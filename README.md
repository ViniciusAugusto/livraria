# Livraria Manager

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/bd6ad6ef0356428195957b8f80c98705)](https://app.codacy.com/app/ViniciusAugusto/livraria?utm_source=github.com&utm_medium=referral&utm_content=ViniciusAugusto/livraria&utm_campaign=Badge_Grade_Dashboard)

Aplicação de exemplo de uso de DDD, separação de camadas e injeção de dependência

## Instalação

```bash
dotnet run
```

- Para atualizar os pacotes NuGet vá em (Ferramentas > Gerenciador de Pacotes do NuGet > Console do Gerenciador de Pacotes) no Visual Studio
```bash
Update-Package
```

## Configuração
- Por padrão está setado o banco de dados `MemoryDatabase` porém caso necessário configure o connection string local no arquivo `/Livraria/Web/Startup.cs`

## Licença
- [MIT](https://opensource.org/licenses/MIT)