import{_ as n,o as e,c as s,b as a}from"./app.d1bf96cf.js";const i={},l=a(`<h1 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h1><h2 id="\u6587\u4EF6\u4F4D\u7F6E\u53CA\u547D\u540D" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u4F4D\u7F6E\u53CA\u547D\u540D" aria-hidden="true">#</a> \u6587\u4EF6\u4F4D\u7F6E\u53CA\u547D\u540D</h2><p>\u4E8B\u4EF6\u653E\u7F6E\u5728 <code>modules/{module}/events</code> \u6587\u4EF6\u5939\u4E2D, \u76D1\u542C\u5668\u653E\u5728 <code>modules/{module}/listeners</code> \u6587\u4EF6\u5939\u4E2D</p><h2 id="\u4E8B\u4EF6-event" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6-event" aria-hidden="true">#</a> \u4E8B\u4EF6(Event)</h2><ol><li>\u4E8B\u4EF6\u547D\u540D\u662F DoWhatEvent, \u4F7F\u7528 Event \u540E\u7F00</li><li>\u6570\u636E\u7684\u4FEE\u9970\u7B26\u4E3A public ,\u65E0\u9700\u5B9A\u4E49 get \u65B9\u6CD5</li><li>\u4E8B\u4EF6\u9700\u8981\u7EE7\u627F PoppyFrameworkApplicationEvent</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php namespace Poppy\\Framework\\Events;

use Poppy\\Framework\\Application\\Event;

class LocaleChanged extends Event
{
    /**
     * @var string
     */
    public $locale;


    public function __construct($locale)
    {
        $this-&gt;locale = $locale;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u76D1\u542C-listener" tabindex="-1"><a class="header-anchor" href="#\u76D1\u542C-listener" aria-hidden="true">#</a> \u76D1\u542C(Listener)</h2><p>\u76D1\u542C\u5668\u653E\u7F6E\u4F4D\u7F6E\u5728 <code>modules/{module}/listeners/{event_folder}</code> \u8FD9\u4E2A\u6587\u4EF6\u5939\u4E0B, \u6587\u4EF6\u5939\u540D\u79F0\u548C\u4E8B\u4EF6\u7684\u540D\u79F0\u76F8\u7B26\u5408, \u4F46\u662F\u662F\u86C7\u5F62\u5199\u6CD5. \u4E8B\u4EF6\u76D1\u542C\u5668\u5FC5\u987B\u4E3A DoWhatListener, \u4E8B\u4EF6\u4E2D\u9700\u8981\u4F53\u73B0 \u76D1\u542C\u5668\u7684\u4F5C\u7528,\u5E76\u4E14\u5FC5\u987B\u662F Listener \u540E\u7F00</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php namespace Order\\Listeners\\OrderBossIngCancel;

use Order\\Events\\OrderBossIngCancelEvent;
use Order\\Models\\OrderHunter;
use Poppy\\Extension\\NetEase\\Im\\Yunxin;
use System\\Classes\\Traits\\ListenerTrait;
use User\\Models\\UserProfile;

/**
 * \u8BA2\u5355IM - \u8001\u677F\u53D6\u6D88\u8BA2\u5355
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
        $order  = $event-&gt;order;
        $accid  = UserProfile::nickPic($order-&gt;account_id)[&#39;accid&#39;];
        $yun    = new Yunxin();
        $Msg    = [
            // ...
        ];
        $result = $yun-&gt;sendMsg($Msg);

        $this-&gt;listenIm($event, self::class, $result);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8B\u4EF6\u76D1\u542C\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u76D1\u542C\u5B9A\u4E49" aria-hidden="true">#</a> \u4E8B\u4EF6\u76D1\u542C\u5B9A\u4E49</h2><p>\u4E8B\u4EF6\u76D1\u542C\u653E\u5728 <code>{module}/src/ServiceProvider.php</code> \u6587\u4EF6\u4E2D, \u5982\u4E0B\u5B9A\u4E49</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">protected</span> <span class="token variable">$listens</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// \u8FD9\u91CC\u4F7F\u7528 \u5B50\u547D\u540D\u7A7A\u95F4 \u6765\u5F15\u5165</span>
    <span class="token comment">// \u8FD9\u91CC\u4E0D\u4F7F\u7528 \u5B57\u7B26\u4E32 \u547D\u540D</span>
    <span class="token class-name class-name-fully-qualified static-context">Event<span class="token punctuation">\\</span>LoginSuccessEvent</span><span class="token operator">::</span><span class="token keyword">class</span>               <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token class-name class-name-fully-qualified static-context">Listeners<span class="token punctuation">\\</span>LoginSuccess<span class="token punctuation">\\</span>LogListener</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// \u7CFB\u7EDF\u7EA7\u522B\u91C7\u7528\u5168\u547D\u540D\u7A7A\u95F4\u5F15\u5165</span>
    <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Poppy<span class="token punctuation">\\</span>Framework<span class="token punctuation">\\</span>Events<span class="token punctuation">\\</span>LocaleChanged</span><span class="token operator">::</span><span class="token keyword">class</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token comment">//...</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),d=[l];function c(t,r){return e(),s("div",null,d)}const o=n(i,[["render",c],["__file","event.html.vue"]]);export{o as default};
