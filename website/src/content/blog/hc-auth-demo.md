---
date: "2020-04-01"
title: "Simple authorization and authentication with HotChocolate 11 and ASP.NET Core 3"
tags: ["GraphQL", "HotChocolate", "aspnetcore"]
headerImg: "../images/test.jpg"
postedAt: "https://medium.com/@marcinjaniak/graphql-simple-authorization-and-authentication-with-hotchocolate-11-and-asp-net-core-3-162e0a35743d"
---

Recently in the company, we have started to use GraphQL in business projects. Being more specific, a server-based implementation - HotChocolate.
Basically most of the projects need some kind of authentication and some of the apps might also require to specify roles and permissions.
The key advantage of HotChocolate is a great integration with asp.net core mechanisms and also a rich ecosystem of various solutions, e.g:
Strawberry Shake - .NET client for GraphQL
Banana Cake Pop - GraphQL IDE
Green Donut - a port of facebook's DataLoader utility

Few words to mention: The code below is simplified and should not be used in production as it is.

Installing required NuGet packages
HotChocolate.AspNetCore, 11.0.0-preview.118
HotChocolate.AspNetCore.Authorization, 11.0.0-preview.118
HotChocolate.AspNetCore.Playground, 11.0.0-preview.118
Microsoft.AspNetCore.Authentication.JwtBearer, 3.1.3
Microsoft.IdentityModel.Tokens, 6.5.0

We want to start off by creating some kind of Identity Service implementation and adding authentication (JWT based) in a ConfigureServices and Configure method in Startup.

```csharp
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Authentication;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;

namespace GraphQLAuthDemo
{
    public interface IIdentityService
    {
        Task<string> Authenticate(string email, string password);
    }

    public class IdentityService : IIdentityService
    {
        public async Task<string> Authenticate(string email, string password)
        {
            //Your custom logic here (e.g. database query)
            //Mocked for a sake of simplicity
            var roles = new List<string>();

            if (email.Contains("hr"))
            {
                roles.Add("hr");
            }

            if (email.Contains("dev"))
            {
                roles.Add("dev");
            }

            if (email.Contains("leader"))
            {
                roles.Add("leader");
            }

            if (email.Contains("employee"))
            {
                roles.Add("employee");
            }

            if (roles.Count > 0)
            {
                return GenerateAccessToken(email, Guid.NewGuid().ToString(), roles.ToArray());
            }

            throw new AuthenticationException();
        }

        private string GenerateAccessToken(string email, string userId, string[] roles)
        {
            var key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes("secretsecretsecret"));

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, userId),
                new Claim(ClaimTypes.Name, email)
            };

            claims = claims.Concat(roles.Select(role => new Claim(ClaimTypes.Role, role))).ToList();


            var signingCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                "issuer",
                "audience",
                claims,
                expires: DateTime.Now.AddDays(90),
                signingCredentials: signingCredentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
```
