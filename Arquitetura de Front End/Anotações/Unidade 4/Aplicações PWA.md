#PWA

*Resumo: São aplicações Web que se apresentam como Apps nativos, utilizando recursos ativos de app e web *

## Conceito
São aplicações baseadas na Web que oferecem ao usuário funcionalidades como a possibilidade de utilização sem conexão, notificações push e acesso a recursos nativos dos dispositivos moveis

## Aplicações PWA
* Código JS executa em background
* É associado a um domínio
* Gerencia diversas páginas do escopo
* Vive mesmo após o fechamento de uma página
* Requer HTTPS para comunicação 
* Responde a Eventos

### Manifest

```json
{
	"name": "Weather",
	"short_name": "Weather",
	"icons": [{	
		"src": "/images/icons/icon-128x128.png",
		"sizes": "128x128",
		"type": "image/png"
	}, {
		"src": "/images/icons/icon-144x144.png",
		"sizes": "144x144",
		"type": "image/png"
	}],
	"start_url": "/index.html" ,
	"display": "standalone",
	"background_color": "#ЗЕ4Е8",
	"theme_color": "#2F3BA2"
}
```

### APIs

| **Service Worker API** | Atua como proxy entre a aplicação e o servidor |
| ---------------------- | ---------------------------------------------- |
| **Cache API**          | Armazena os arquivos estáticos da aplicação    |
| **Fetch**              | Requisições HTTP ao servidor / Service Worker  |
| **Push Notifications** | Permite interagir com o usuário (AppLike)      |
| **Indexed DB**         | Estrutura de dados no browser                  |
