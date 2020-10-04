# Node Server
## API

## Login API's
 - /api/login [POST]
	 - Req
	 ```JSON
	 {
		 "username": string,
		 "password": string
	 }
	 ```
	 - Res
	 ```JSON
	 {
		 "userId": "",
		 "token": "",
		 "success": true
	 }
	 ```
 - /api/register [POST]
	 - Req
	 ```JSON
	 {
		 "user":userobject
	 }
	 ```
	 - Res
	 ```JSON
	 {
		
	 }
	 ```
## User API's
 - /api/users [DELETE]
	 - Req
	 ```JSON
	 {
		 "user":userobject
	 }
	 ```
	 - Res
	 ```JSON
	 {
		 
	 }
	 ```
 - /api/update [PUT]
	 - Req
	 ```JSON
	 {
		 "user":userobject
	 }
	 ```
	 - Res
	 ```JSON
	 {
		 "user": "",
		 "error": "",
		 "success": true
	 }
	 ```
## Service API's	 
- /api/services [GET]
	 - Req
	 ```JSON
	 {
		 
	 }
	 ```
	 - Res
	 ```JSON
	[
	{
		 "_Id": string,
		 "name": string,
		 "image": "string",
		 "description" : "string",
		 "item": [{
		 	"name": string,
			"price": number
		 }]
		 
	}
	]
	 ```
	 
- /api/services [GET]
	 - Req
	 ```JSON
	 {
		  "service": _Id
	 }
	 ```
	 - Res
	 ```JSON
	[
		 "_Id": string,
		 "name": string,
		 "imageSrc": "string",
		 "item": [{
		 	"name": string,
			"price": number
		 }]
		
	]
	 ```
	 
 - /api/service [POST]
	 - Req
	 ```JSON
	 {
		  "service": serviceObject
	 }
	 ```
	 - Res
	 ```JSON
	[
	{
		True/False
	}
	]
	 ```
 - /api/service [PUT]
	 - Req
	 ```JSON
	 {
	 	"service":serviceObject
	 }
	 ```
	 - Res
	 ```JSON
	[
	{
		True/False
	}
	]
	 ```
 - /api/service [DELETE]
	 - Req
	 ```JSON
	 {
		  "service": _Id
	 }
	 ```
	 - Res
	 ```JSON
	[
	{
		True/False
	}
	]
	 ```
 - /api/uploadImage [post]
	 - Req
	 ```JSON
	 {
	 	Image
	 }
	 ```
	 - Res
	 ```JSON
	[
	{
		"imageLink": string
	}
	]
	 ```


