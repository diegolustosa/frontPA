# title
## subtitle

/*primeiro precisa fazer o docker criar a network pelo gitbash
depois passa isso para o sh(shell), usa o docker run primeiro no bash depois no sh
para o windows entender de onde está vindo o comando
executa primeiro no bash docker, depois sh, isso serve para o server e para o apache no docker.
pra procurar a hospedagem, localhost:8080*/

```sh
docker network create zabbix
```

```sh
docker run \
    --detach \
    -it \
    --name zabbix-postgres \
    --env POSTGRES_USER=zabbix \
    --env POSTGRES_PASSWORD=zabbix \
    --network zabbix \
    postgres:16
```

server
```sh
docker run \
    -it \
    --rm \
    --name zabbix-server \
    --env DB_SERVER_HOST="zabbix-postgres" \
    --env POSTGRES_USER="zabbix" \
    --env POSTGRES_PASSWORD="zabbix" \
    --network zabbix \
    --publish 10051:10051 \
    --init zabbix/zabbix-server-pgsql:ubuntu-trunk
```

web
```sh
docker run \
    -it \
    --rm \
    --name zabbix-web \
    --env DB_SERVER_HOST="zabbix-postgres" \
    --env ZBX_SERVER_HOST="zabbix-server" \
    --env POSTGRES_USER="zabbix" \
    --env POSTGRES_PASSWORD="zabbix" \
    --network zabbix \
    --publish 8080:8080 \
    --init zabbix/zabbix-web-apache-pgsql:ubuntu-trunk
```


