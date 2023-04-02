<template>
    <section id="hero">
        <h1 class="tagline">
            <span class="accent">模块化开发框架</span>
            <br/>基于 Laravel
        </h1>
        <p class="description">
            快速, 便捷, 全站式, 接口调用
        </p>
        <p class="actions">
            <a class="get-started" href="/4.x/">
                开始使用
                <svg
                    class="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                    />
                </svg>
            </a>
        </p>
    </section>

    <section id="highlights" class="vt-box-container">
        <div class="vt-box">
            <h2>模块化</h2>
            <p>
                - 模块化开发 <br>
                - 结构清晰 <br>
            </p>
        </div>
        <div class="vt-box">
            <h2>便捷</h2>
            <p>
                - 验证码校验 <br>
                - Redis 封装 <br>
                - 多语言 <br>
                - 丰富文档
            </p>
        </div>
        <div class="vt-box">
            <h2>多组件</h2>
            <p>
                - 框架 <br>
                - 系统 <br>
                - 核心 <br>
                - 推送 <br>
                - OSS <br>
                - 版本管理
            </p>
        </div>
    </section>
</template>

<style scoped>

section {
    padding: 42px 32px;
}

#hero {
    padding: 96px 32px;
    text-align: center;
}

.tagline {
    font-size: 76px;
    line-height: 1.25;
    font-weight: 900;
    letter-spacing: -1.5px;
    max-width: 960px;
    margin: 0px auto;
}

html:not(.dark) .accent,
.dark .tagline {
    background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.description {
    max-width: 960px;
    line-height: 1.5;
    transition: color 0.5s;
    font-size: 22px;
    margin: 24px auto 40px;
}

.actions a {
    font-size: 16px;
    display: inline-block;
    padding: 8px 18px;
    font-weight: 500;
    border-radius: 8px;
    transition: background-color 0.5s, color 0.5s;
}

.actions .get-started {
    margin-right: 18px;
}

.actions .icon {
    display: inline;
    position: relative;
    top: -1px;
    margin-left: 2px;
    fill: currentColor;
    transition: transform 0.2s;
}

.actions .get-started:hover {
    transition-duration: 0.2s;
    text-decoration: none;
}

.actions .get-started:hover .icon {
    transform: translateX(2px);
}

#highlights {
    max-width: 960px;
    margin: 0 auto;
}

#highlights h2 {
    font-weight: 600;
    font-size: 20px;
    letter-spacing: -0.4px;
    transition: color 0.5s;
    margin-bottom: 0.75em;
}

#highlights p {
    font-weight: 400;
    font-size: 15px;
}

#highlights .vt-box {
    background-color: transparent;
}


@media (max-width: 960px) {
    .tagline {
        font-size: 64px;
        letter-spacing: -0.5px;
    }

    .description {
        font-size: 18px;
        margin-bottom: 48px;
    }
}

@media (max-width: 768px) {
    .tagline {
        font-size: 48px;
        letter-spacing: -0.5px;
    }
}

@media (max-width: 576px) {
    #hero {
        padding: 64px 32px;
    }

    .description {
        font-size: 16px;
        margin: 18px 0 30px;
    }

    #highlights h3 {
        margin-bottom: 0.6em;
    }

    #highlights .vt-box {
        padding: 20px 36px;
    }

    .actions a {
        margin: 0.5em 0;
    }
}

@media (max-width: 370px) {
    .tagline {
        font-size: 36px;
    }
}

.vt-box-container {
    display: flex;
    justify-content: space-between;
}
</style>
