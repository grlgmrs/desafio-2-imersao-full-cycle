Utilizei o k3d para rodar o kubernetes localmentem para isso, basta alterar o service `api-routes-service` no arquivo `deployment.yml`, comentando o `type: LoadBalancer` e descomentando o `nodePort: 30000 \ type: NodePort`. Depois disso, para usar o k3d basta rodar os seguintes comandos:

```sh
$ k3d cluster create cluster-desafio-2-full-cycle -p "3001:30000@loadbalancer"
$ # ir até o diretório k8s, onde está localizado o arquivo deployment.yml
$ kubectl apply -f .
```

por fim, basta aguardar a api subir e acessar a aplicação em localhost:3001