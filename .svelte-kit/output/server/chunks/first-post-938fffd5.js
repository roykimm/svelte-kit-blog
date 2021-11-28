import { c as create_ssr_component, e as escape } from "./app-cabb3c0b.js";
const metadata = {
  "title": "Top todo apps",
  "tags": ["tech article"],
  "date": "2021-02-08T00:00:00.000Z"
};
const { title, tags, date } = metadata;
const First_post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>${escape(title)}</h1>
<p>Posting : ${escape(new Date(date).toISOString().slice(0, 10))}</p>
<div class="${"markdown-body"}">\uC548\uB155\uD558\uC138\uC694..   
fastapi\uC11C\uBC84\uB97C gunicorn, uvicorn \uC73C\uB85C aws ec2\uC5D0 \uBC30\uD3EC\uB97C \uD574\uBCF4\uACA0\uC2B5\uB2C8\uB2E4.   
<p>\uC6B0\uC120 \uB85C\uCEEC\uC5D0\uC11C \uC791\uC5C5\uD55C \uD504\uB85C\uC81D\uD2B8 \uD30C\uC77C\uC744 git\uC5D0 \uC5C5\uB85C\uB4DC \uD569\uB2C8\uB2E4.<br>
pip freeze &gt; requirements.txt \uD558\uB294 \uAC83\uB3C4 \uC78A\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.   </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">  pip install uvicorn
  pip install gunicorn
  pip freeze &gt; requirements.txt
  git add .
  git commit -m &quot;test&quot;
  git push origin master</code>`}<!-- HTML_TAG_END --></pre>
<p>\uB2E4\uC74C\uC740 \uD130\uBBF8\uB110\uB85C \uB4E4\uC5B4\uAC00 aws ec2\uC5D0 \uC6D0\uACA9\uC73C\uB85C \uC811\uC18D\uD569\uB2C8\uB2E4.<br>
git\uD504\uB85C\uC81D\uD2B8\uB97C \uD074\uB860 \uD569\uB2C8\uB2E4.   </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">ssh -i key.pem ubuntu@gobella.kr
cd srv
git clone ~~~.git</code>`}<!-- HTML_TAG_END --></pre>
<p>\uB2E4\uC74C\uC740 uvicorn \uC73C\uB85C \uAC1C\uBC1C\uC11C\uBC84\uB97C \uD55C\uBC88 \uC2E4\uD589\uD574 \uBCF4\uB3C4\uB85D \uD558\uACA0\uC2B5\uB2C8\uB2E4.<br>
\uD504\uB85C\uC81D\uD2B8 \uACBD\uB85C\uB294 /home/ubuntu/srv/fast-api \uC785\uB2C8\uB2E4.</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">cd fast-api[\uD074\uB860\uD55C \uD504\uB85C\uC81D\uD2B8\uD3F4\uB354]
python -m venv venv
source venv/bin/activate 
(venv) pip install -r requirements.txt
(venv) uvicorn blog.main:app --host 0.0.0.0 --port 8003</code>`}<!-- HTML_TAG_END --></pre>
<p>\uC704 \uB0B4\uC6A9\uC774 \uC815\uC0C1 \uC218\uD589\uC774 \uB418\uBA74 gobella.kr:8003 \uC73C\uB85C \uB4E4\uC5B4\uAC00 \uC798 \uB3D9\uC791\uD558\uB294\uC9C0 \uD655\uC778 \uD569\uB2C8\uB2E4.<br>
\uC798 \uB3D9\uC791 \uB418\uB294\uC9C0 \uD655\uC788\uD588\uB2E4\uBA74 \uC885\uB8CC \uD6C4 Gunicorn\uC73C\uB85C \uC2E4\uD589 \uD558\uC5EC \uBD05\uC2DC\uB2E4.   </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">(venv) gunicorn blog.main:app -w 4 -k uvicorn.workers.UvicornWorker
(venv) sudo vi /etc/systemd/system/gunicorn.socket</code>`}<!-- HTML_TAG_END --></pre>
<p>\uC18C\uCF13 \uD30C\uC77C\uC5D0 \uB2E4\uC74C\uACFC \uAC19\uC740 \uB0B4\uC6A9\uC744 \uBD99\uC5EC\uB123\uAE30 \uD569\uB2C8\uB2E4.</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">[Unit]
Description=gunicorn socket

[Socket]
ListenStream=/run/gunicorn.sock

[Install]
WantedBy=sockets.target</code>`}<!-- HTML_TAG_END --></pre>
<p>\uADF8\uB7F0 \uB2E4\uC74C systemd\uC5D0 service\uD30C\uC77C\uC744 \uC791\uC131\uD569\uB2C8\uB2E4.   </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo vi /etc/systemd/system/gunicorn.service

[Unit]
Description=gunicorn daemon
Requires=gunicorn.socket
After=network.target

[Service]
User=root
Group=deploy
WorkingDirectory=/home/ubuntu/srv/fast-api   # \uD504\uB85C\uC81D\uD2B8 \uACBD\uB85C
ExecStart=/home/ubuntu/srv/fast-api/venv/bin/gunicorn blog.main:app -w 4 -k uvicorn.workers.UvicornWorker --bind unix:/run/gunicorn.sock   # \uC55E\uBD80\uBD84\uC740 venv\uC548\uC5D0 gunicorn\uBAA8\uB4C8 \uD30C\uC77C\uC774 \uC788\uB294 \uACBD\uB85C</code>`}<!-- HTML_TAG_END --></pre>
<p>\uADF8\uB7F0 \uB2E4\uC74C \uD558\uB2E8\uC758 \uBA85\uB839\uC5B4\uB85C gunicorn \uC18C\uCF13\uC744 \uC2DC\uC791 \uBC0F \uD65C\uC131\uD654 \uD569\uB2C8\uB2E4.</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo systemctl start gunicorn.socket   # \uC18C\uCF13 \uC2DC\uC791
sudo systemctl enable gunicorn.socket   # \uC18C\uCF13 \uD65C\uC131\uD654

sudo systemctl status gunicorn.socket  # \uC18C\uCF13 \uC0C1\uD0DC \uD655\uC778
sudo systemctl status gunicorn  # \uC0C1\uD0DC \uD655\uC778</code>`}<!-- HTML_TAG_END --></pre>
<p>\uADF8\uB7F0 \uB2E4\uC74C \uB370\uBAAC \uC7AC\uC2DC\uC791\uACFC gunicorn\uC7AC\uC2DC\uC791 \uD569\uB2C8\uB2E4.</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo systemctl daemon-reload
sudo systemctl restart gunicorn</code>`}<!-- HTML_TAG_END --></pre>
<p>\uB2E4\uC74C\uC740 nginx\uC124\uC815\uC785\uB2C8\uB2E4. \uC774\uBBF8 \uC124\uCE58\uAC00 \uB418\uC5B4\uC788\uC9C0 \uC54A\uC73C\uBA74 \uC124\uCE58\uBD80\uD130 \uC9C4\uD589\uD558\uC138\uC694.   </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">apt-get install nginx
cd /etc/nginx/sites-available/ 
cp mysite.conf fastapi.conf   # \uAE30\uC874 conf\uD30C\uC77C \uC911 \uD558\uB098\uB97C \uBCF5\uC0AC
vi fastapi.conf   # \uC218\uC815</code>`}<!-- HTML_TAG_END --></pre>
<p>fastapi.conf \uB0B4\uC6A9\uC744 \uC544\uB798\uC640 \uAC19\uC774 \uC218\uC815\uD569\uB2C8\uB2E4.  </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">server &#123;
    listen 8003;
    server_name gobella.kr;
    charset utf-8;

    location / &#123;
        proxy_pass http://unix:/run/gunicorn.sock;
    &#125;
&#125;</code>`}<!-- HTML_TAG_END --></pre>
<p>\uC218\uC815\uC774 \uC644\uB8CC \uB418\uC5C8\uC73C\uBA74 \uC2EC\uBCFC\uB9AD \uB9C1\uD06C\uB97C \uAC78\uC5B4 \uC90C\uB2C8\uB2E4. </p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">sudo ln -sf /etc/nginx/sites-available/fastapi.conf /etc/nginx/sites-enabled/fastapi.conf</code>`}<!-- HTML_TAG_END --></pre>
<p>sites-enabled \uD3F4\uB354 \uB0B4\uC5D0 fastapi.conf \uD30C\uC77C\uC774 \uC0DD\uC131\uB41C \uAC83\uC744 \uD655\uC778 \uD6C4 \uD558\uB2E8\uC758 \uBA85\uB839\uC5B4\uB97C \uC785\uB825 \uD558\uC5EC \uCD5C\uC885 \uD655\uC778 \uD569\uB2C8\uB2E4.</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">nginx -t # nginx \uC720\uD6A8\uD55C\uC9C0 \uD655\uC778
service nginx restart # nginx \uC7AC\uC2DC\uC791</code>`}<!-- HTML_TAG_END --></pre>
<p>\uBAA8\uB4E0 \uC791\uC5C5\uC774 \uC644\uB8CC \uB418\uC5C8\uC73C\uBBC0\uB85C gobella.kr:8003\uC73C\uB85C \uC811\uC18D\uD558\uC5EC fastapi\uB85C \uB9CC\uB4E0 restapi\uAC00 \uC798 \uB3D9\uC791\uD558\uB294\uC9C0 \uD655\uC778\uD574 \uBD05\uC2DC\uB2E4.<br>
<img src="${"/img/sh48.png"}" alt="${"\uC644\uB8CC"}" title="${"sh48"}"></p></div>`;
});
export { First_post as default, metadata };
