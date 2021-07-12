Para iniciarmos os pods basta aplicarmos nosso `deployment.yml` com:
```sh
$ kubectl apply -f k8s/.
```

Depois, após os pods terem sido inciados, fazemos o binding de portas tanto do front quanto da api com os seguintes comandos:

```sh
$ # binding do back
$ kubectl port-forward service/api-routes-service 3000:3000
$ # binding do front
$ kubectl port-forward service/front-routes-service 3001:3001
```