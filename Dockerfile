FROM microsoft/aspnetcore-build AS build
WORKDIR /app

COPY vue-netcore2spa.web/package.json ./vue-netcore2spa.web/
RUN cd vue-netcore2spa.web && npm install

# copy csproj and restore as distinct layers
COPY *.sln .
COPY vue-netcore2spa.web/*.csproj ./vue-netcore2spa.web/
RUN dotnet restore

# copy everything else and build app
COPY vue-netcore2spa.web/. ./vue-netcore2spa.web/
WORKDIR /app/vue-netcore2spa.web
RUN dotnet publish -o out /p:PublishWithAspNetCoreTargetManifest="false" --no-restore


FROM microsoft/aspnetcore AS runtime
ENV ASPNETCORE_URLS http://+:80
WORKDIR /app
COPY --from=build /app/vue-netcore2spa.web/out ./
ENTRYPOINT ["dotnet", "vue-netcore2spa.web.dll"]
