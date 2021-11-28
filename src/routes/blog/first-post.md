---
title: Top todo apps
tags: 
    - tech article 
date: 2021-02-08
---
# {title}
Posting : {new Date(date).toISOString().slice(0, 10)}

<div class="markdown-body">
안녕하세요..   
fastapi서버를 gunicorn, uvicorn 으로 aws ec2에 배포를 해보겠습니다.   

우선 로컬에서 작업한 프로젝트 파일을 git에 업로드 합니다.     
pip freeze > requirements.txt 하는 것도 잊지 않습니다.   

```
  pip install uvicorn
  pip install gunicorn
  pip freeze > requirements.txt
  git add .
  git commit -m "test"
  git push origin master
```

다음은 터미널로 들어가 aws ec2에 원격으로 접속합니다.  
git프로젝트를 클론 합니다.   

```
ssh -i key.pem ubuntu@gobella.kr
cd srv
git clone ~~~.git
```

다음은 uvicorn 으로 개발서버를 한번 실행해 보도록 하겠습니다.  
프로젝트 경로는 /home/ubuntu/srv/fast-api 입니다.
```
cd fast-api[클론한 프로젝트폴더]
python -m venv venv
source venv/bin/activate 
(venv) pip install -r requirements.txt
(venv) uvicorn blog.main:app --host 0.0.0.0 --port 8003
```
위 내용이 정상 수행이 되면 gobella.kr:8003 으로 들어가 잘 동작하는지 확인 합니다.   
잘 동작 되는지 확있했다면 종료 후 Gunicorn으로 실행 하여 봅시다.   

```
(venv) gunicorn blog.main:app -w 4 -k uvicorn.workers.UvicornWorker
(venv) sudo vi /etc/systemd/system/gunicorn.socket
```

소켓 파일에 다음과 같은 내용을 붙여넣기 합니다.
```
[Unit]
Description=gunicorn socket

[Socket]
ListenStream=/run/gunicorn.sock

[Install]
WantedBy=sockets.target
```

그런 다음 systemd에 service파일을 작성합니다.   
```
sudo vi /etc/systemd/system/gunicorn.service

[Unit]
Description=gunicorn daemon
Requires=gunicorn.socket
After=network.target

[Service]
User=root
Group=deploy
WorkingDirectory=/home/ubuntu/srv/fast-api   # 프로젝트 경로
ExecStart=/home/ubuntu/srv/fast-api/venv/bin/gunicorn blog.main:app -w 4 -k uvicorn.workers.UvicornWorker --bind unix:/run/gunicorn.sock   # 앞부분은 venv안에 gunicorn모듈 파일이 있는 경로
```

그런 다음 하단의 명령어로 gunicorn 소켓을 시작 및 활성화 합니다.
```
sudo systemctl start gunicorn.socket   # 소켓 시작
sudo systemctl enable gunicorn.socket   # 소켓 활성화

sudo systemctl status gunicorn.socket  # 소켓 상태 확인
sudo systemctl status gunicorn  # 상태 확인
```

그런 다음 데몬 재시작과 gunicorn재시작 합니다.
```
sudo systemctl daemon-reload
sudo systemctl restart gunicorn
```

다음은 nginx설정입니다. 이미 설치가 되어있지 않으면 설치부터 진행하세요.   
```
apt-get install nginx
cd /etc/nginx/sites-available/ 
cp mysite.conf fastapi.conf   # 기존 conf파일 중 하나를 복사
vi fastapi.conf   # 수정
```

fastapi.conf 내용을 아래와 같이 수정합니다.  
```
server {
    listen 8003;
    server_name gobella.kr;
    charset utf-8;

    location / {
        proxy_pass http://unix:/run/gunicorn.sock;
    }
}
```
수정이 완료 되었으면 심볼릭 링크를 걸어 줌니다. 
```
sudo ln -sf /etc/nginx/sites-available/fastapi.conf /etc/nginx/sites-enabled/fastapi.conf
```

sites-enabled 폴더 내에 fastapi.conf 파일이 생성된 것을 확인 후 하단의 명령어를 입력 하여 최종 확인 합니다.
```
nginx -t # nginx 유효한지 확인
service nginx restart # nginx 재시작
```

모든 작업이 완료 되었으므로 gobella.kr:8003으로 접속하여 fastapi로 만든 restapi가 잘 동작하는지 확인해 봅시다.   
![완료](/img/sh48.png "sh48")
</div>