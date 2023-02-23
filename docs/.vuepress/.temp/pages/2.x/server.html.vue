<template><div><h1 id="服务器环境配置" tabindex="-1"><a class="header-anchor" href="#服务器环境配置" aria-hidden="true">#</a> 服务器环境配置</h1>
<h2 id="服务器环境配置-1" tabindex="-1"><a class="header-anchor" href="#服务器环境配置-1" aria-hidden="true">#</a> 服务器环境配置</h2>
<h3 id="需要软件" tabindex="-1"><a class="header-anchor" href="#需要软件" aria-hidden="true">#</a> 需要软件</h3>
<ul>
<li>Mysql 5.6+, 建议(5.7) 支持 mysql 的 innodb 的 全文索引</li>
<li>php 5.6 + 建议(7.0) 性能会是最优的</li>
<li>Nginx/Apache</li>
</ul>
<h3 id="nginx-配置" tabindex="-1"><a class="header-anchor" href="#nginx-配置" aria-hidden="true">#</a> nginx 配置</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>server {

    # port
    listen 80;

    # server
    server_name l.dailian.sour-lemon.com;

    # index
    index index.php index.html;

    # root path
    root /data/www/dailian/public/;

    # php支持
    location ~ .*\.(php|php5)?$ {
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_index index.php;
        include fastcgi.conf;

        # sock 方式
        # fastcgi_pass unix:/run/php/php7.0-fpm.sock;
    }

    # route rewrite
    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    # 静态文件缓存
    location ~ .*\.(js|css)?$ {
        expires 12h;
    }

    # 日志
    access_log /data/web_log/dailian_access.log;
    error_log /data/web_log/dailian_error.log;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php-需要开启的扩展" tabindex="-1"><a class="header-anchor" href="#php-需要开启的扩展" aria-hidden="true">#</a> PHP 需要开启的扩展</h3>
<p><strong>php版本</strong> php 5.5.10+</p>
<p><strong>需要的扩展</strong> ext-gd2 ext-mbstring ext-iconv ext-php_mysqli ext-php_pdo_mysql ext-bmath ext-curl ext-redis ext-tokenizer ext-mcrypt ext-sqlite3 ext-soap</p>
<h3 id="apache-配置" tabindex="-1"><a class="header-anchor" href="#apache-配置" aria-hidden="true">#</a> Apache 配置</h3>
<p><strong>需要开启的组件</strong> 需要开启 <code v-pre>mod-rewrite</code> 重写组件</p>
<p><strong>主要配置文件 http.conf</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 开启重写, 配置允许访问
&lt;Directory />
    Options FollowSymLinks
    AllowOverride All
    Order deny,allow
    Allow from all
&lt;/Directory>

# 配置 index.php
&lt;IfModule dir_module>
    DirectoryIndex index.php index.html index.htm
&lt;/IfModule>

# 开启虚拟主机
Include conf/extra/httpd-vhosts.conf

# 需要 .htaccess 的访问
&lt;FilesMatch "^\.ht">
    Order allow,deny
    Allow from all
    Satisfy All
&lt;/FilesMatch>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>配置虚拟主机</strong> 找到 <code v-pre>httpd-vhosts.conf</code>文件并编辑：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;VirtualHost *:80>
    DocumentRoot "D:\wamp\www\ixdcw"
    ServerName l.dailian.sour-lemon.com
    ServerAlias l.dailian.api.sour-lemon.com
    ErrorLog "logs/dailian_error.log"
    CustomLog "logs/dailian_access.log" common
    RewriteEngine on
    &lt;Directory "D:\wamp\www\ixdcw">
        Options FollowSymLinks
        AllowOverride ALL
        Order allow,deny
        Allow from all
    &lt;/Directory>
&lt;/VirtualHost>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="laravel-运行配置" tabindex="-1"><a class="header-anchor" href="#laravel-运行配置" aria-hidden="true">#</a> laravel 运行配置</h2>
<h3 id="配置计划任务" tabindex="-1"><a class="header-anchor" href="#配置计划任务" aria-hidden="true">#</a> 配置计划任务</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ sudo crontab -e
* * * * * php /media/web/www/project_name/artisan schedule:run 1>> /dev/null 2>&amp;1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="supervisor-运行队列监听" tabindex="-1"><a class="header-anchor" href="#supervisor-运行队列监听" aria-hidden="true">#</a> supervisor 运行队列监听</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>[program:dailian]
process_name=%(program_name)s_%(process_num)02d
command=php /media/web/www/project_name/artisan queue:work --sleep=3 --tries=3 --daemon
autostart=true
autorestart=true
user=mark
numprocs=1
redirect_stderr=true
stdout_logfile=/media/web/www/project_name/storage/server/job.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自动化部署" tabindex="-1"><a class="header-anchor" href="#自动化部署" aria-hidden="true">#</a> 自动化部署</h3>
<p>请求地址: SERVER/sl_deploy/coding 需要设置 <code v-pre>token</code> 值, 默认的 <code v-pre>token</code>值为 代码目录下 <code v-pre>.env</code> 文件中的 <code v-pre>APP_KEY</code> 的值</p>
<p><img src="https://file.wulicode.com/mweb/2021/12/15810951507090.jpg" alt="https://file.wulicode.com/mweb/2021/12/15810951507090.jpg"></p>
<h2 id="开发注意事项" tabindex="-1"><a class="header-anchor" href="#开发注意事项" aria-hidden="true">#</a> 开发注意事项</h2>
<h3 id="错误查找" tabindex="-1"><a class="header-anchor" href="#错误查找" aria-hidden="true">#</a> 错误查找</h3>
<p>1、出现问题之后，请首先查找日志文件/apache/网站 2、如果出现文件访问权限问题，请注意安装文件目录权限、apache的访问目录权限等。</p>
<h3 id="生成-apidoc-文档" tabindex="-1"><a class="header-anchor" href="#生成-apidoc-文档" aria-hidden="true">#</a> 生成 apidoc 文档</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>apidoc -i app/Http/Controllers/Api/ -o public/docs/api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="生成-phpdoc-文档" tabindex="-1"><a class="header-anchor" href="#生成-phpdoc-文档" aria-hidden="true">#</a> 生成 phpdoc 文档</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>php vendor/sami/sami/sami.php update config/sami.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="生成-global-js" tabindex="-1"><a class="header-anchor" href="#生成-global-js" aria-hidden="true">#</a> 生成 <code v-pre>global.js</code></h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># 必须使用 php5.5.9+ 版本的php 来访问
php artisan lemon:fe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


