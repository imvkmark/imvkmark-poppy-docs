<template><div><h1 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h1>
<h2 id="文件位置及命名" tabindex="-1"><a class="header-anchor" href="#文件位置及命名" aria-hidden="true">#</a> 文件位置及命名</h2>
<p>事件放置在 <code v-pre>modules/{module}/events</code> 文件夹中, 监听器放在
<code v-pre>modules/{module}/listeners</code> 文件夹中</p>
<h2 id="事件-event" tabindex="-1"><a class="header-anchor" href="#事件-event" aria-hidden="true">#</a> 事件(Event)</h2>
<ol>
<li>事件命名是 DoWhatEvent, 使用 Event 后缀</li>
<li>数据的修饰符为 public ,无需定义 get 方法</li>
<li>事件需要继承 PoppyFrameworkApplicationEvent</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php namespace Poppy\Framework\Events;

use Poppy\Framework\Application\Event;

class LocaleChanged extends Event
{
    /**
     * @var string
     */
    public $locale;


    public function __construct($locale)
    {
        $this->locale = $locale;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="监听-listener" tabindex="-1"><a class="header-anchor" href="#监听-listener" aria-hidden="true">#</a> 监听(Listener)</h2>
<p>监听器放置位置在 <code v-pre>modules/{module}/listeners/{event_folder}</code>
这个文件夹下, 文件夹名称和事件的名称相符合,
但是是蛇形写法. 事件监听器必须为 DoWhatListener, 事件中需要体现 监听器的作用,并且必须是 Listener 后缀</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;?php namespace Order\Listeners\OrderBossIngCancel;

use Order\Events\OrderBossIngCancelEvent;
use Order\Models\OrderHunter;
use Poppy\Extension\NetEase\Im\Yunxin;
use System\Classes\Traits\ListenerTrait;
use User\Models\UserProfile;

/**
 * 订单IM - 老板取消订单
 */
class BossImListener
{
    use ListenerTrait;

    /**
     * @param OrderBossIngCancelEvent $event
     */
    public function handle(OrderBossIngCancelEvent $event)
    {
        /** @var OrderHunter $order */
        $order  = $event->order;
        $accid  = UserProfile::nickPic($order->account_id)['accid'];
        $yun    = new Yunxin();
        $Msg    = [
            // ...
        ];
        $result = $yun->sendMsg($Msg);

        $this->listenIm($event, self::class, $result);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件监听定义" tabindex="-1"><a class="header-anchor" href="#事件监听定义" aria-hidden="true">#</a> 事件监听定义</h2>
<p>事件监听放在 <code v-pre>{module}/src/ServiceProvider.php</code> 文件中, 如下定义</p>
<div class="language-php line-numbers-mode" data-ext="php"><pre v-pre class="language-php"><code><span class="token keyword">protected</span> <span class="token variable">$listens</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// 这里使用 子命名空间 来引入</span>
    <span class="token comment">// 这里不使用 字符串 命名</span>
    <span class="token class-name class-name-fully-qualified static-context">Event<span class="token punctuation">\</span>LoginSuccessEvent</span><span class="token operator">::</span><span class="token keyword">class</span>               <span class="token operator">=></span> <span class="token punctuation">[</span>
        <span class="token class-name class-name-fully-qualified static-context">Listeners<span class="token punctuation">\</span>LoginSuccess<span class="token punctuation">\</span>LogListener</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// 系统级别采用全命名空间引入</span>
    <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\</span>Poppy<span class="token punctuation">\</span>Framework<span class="token punctuation">\</span>Events<span class="token punctuation">\</span>LocaleChanged</span><span class="token operator">::</span><span class="token keyword">class</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
        <span class="token comment">//...</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


