import{_ as i,o as n,c as e,b as s}from"./app.d1bf96cf.js";const l={},d=s(`<h1 id="\u6587\u4EF6\u6811" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u6811" aria-hidden="true">#</a> \u6587\u4EF6\u6811</h1><p>Poppy Framework \u6587\u6863</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 composer.json
\u251C\u2500\u2500 config
\u2502   \u2514\u2500\u2500 poppy.php
\u251C\u2500\u2500 docs                   # \u6587\u6863
\u2502   \u2514\u2500\u2500 build.md
\u251C\u2500\u2500 phpunit.xml            # \u5355\u5143\u6D4B\u8BD5\u6587\u4EF6
\u251C\u2500\u2500 resources
\u2502   \u251C\u2500\u2500 lang               # \u8BED\u8A00\u5305
\u2502   \u251C\u2500\u2500 stubs              # make \u6587\u4EF6\u751F\u6210
\u2502   \u2514\u2500\u2500 views              # \u9ED8\u8BA4\u89C6\u56FE
\u2502       \u2514\u2500\u2500 template
\u2502           \u251C\u2500\u2500 default.blade.php
\u2502           \u2514\u2500\u2500 message.blade.php
\u251C\u2500\u2500 src
\u2502   \u251C\u2500\u2500 Application        # \u57FA\u672C\u63A7\u5236\u5668\u7EE7\u627F
\u2502   \u2502   \u251C\u2500\u2500 ApiController.php
\u2502   \u2502   \u251C\u2500\u2500 Controller.php
\u2502   \u2502   \u251C\u2500\u2500 Event.php
\u2502   \u2502   \u251C\u2500\u2500 Job.php
\u2502   \u2502   \u251C\u2500\u2500 Request.php
\u2502   \u2502   \u2514\u2500\u2500 TestCase.php
\u2502   \u251C\u2500\u2500 Classes            # \u57FA\u7840\u52A0\u8F7D\u5668, Number, Resp, Traits
\u2502   \u2502   \u251C\u2500\u2500 ClassLoader.php
\u2502   \u2502   \u251C\u2500\u2500 Number.php
\u2502   \u2502   \u251C\u2500\u2500 Resp.php
\u2502   \u2502   \u2514\u2500\u2500 Traits
\u2502   \u2502       \u251C\u2500\u2500 AppTrait.php
\u2502   \u2502       \u251C\u2500\u2500 HasAttributesTrait.php
\u2502   \u2502       \u251C\u2500\u2500 KeyParserTrait.php
\u2502   \u2502       \u251C\u2500\u2500 MigrationTrait.php
\u2502   \u2502       \u251C\u2500\u2500 PoppyTrait.php
\u2502   \u2502       \u2514\u2500\u2500 ViewTrait.php
\u2502   \u251C\u2500\u2500 Console            # \u547D\u4EE4\u884C
\u2502   \u2502   \u251C\u2500\u2500 Commands
\u2502   \u2502   \u2502   \u251C\u2500\u2500 PoppyDisableCommand.php
\u2502   \u2502   \u2502   \u251C\u2500\u2500 PoppyEnableCommand.php
\u2502   \u2502   \u2502   \u251C\u2500\u2500 PoppyListCommand.php
\u2502   \u2502   \u2502   \u251C\u2500\u2500 PoppyMigrateCommand.php
\u2502   \u2502   \u2502   \u251C\u2500\u2500 PoppyMigrateRefreshCommand.php
\u2502   \u2502   \u2502   \u251C\u2500\u2500 PoppyMigrateResetCommand.php
\u2502   \u2502   \u2502   \u251C\u2500\u2500 PoppyMigrateRollbackCommand.php
\u2502   \u2502   \u2502   \u251C\u2500\u2500 PoppyOptimizeCommand.php
\u2502   \u2502   \u2502   \u2514\u2500\u2500 PoppySeedCommand.php
\u2502   \u2502   \u251C\u2500\u2500 ConsoleServiceProvider.php
\u2502   \u2502   \u251C\u2500\u2500 GeneratorCommand.php
\u2502   \u2502   \u251C\u2500\u2500 GeneratorServiceProvider.php
\u2502   \u2502   \u2514\u2500\u2500 Generators
\u2502   \u2502       \u251C\u2500\u2500 MakeCommandCommand.php
\u2502   \u2502       \u251C\u2500\u2500 MakeControllerCommand.php
\u2502   \u2502       \u251C\u2500\u2500 MakeMiddlewareCommand.php
\u2502   \u2502       \u251C\u2500\u2500 MakeMigrationCommand.php
\u2502   \u2502       \u251C\u2500\u2500 MakeModelCommand.php
\u2502   \u2502       \u251C\u2500\u2500 MakePolicyCommand.php
\u2502   \u2502       \u251C\u2500\u2500 MakePoppyCommand.php
\u2502   \u2502       \u251C\u2500\u2500 MakeProviderCommand.php
\u2502   \u2502       \u251C\u2500\u2500 MakeRequestCommand.php
\u2502   \u2502       \u251C\u2500\u2500 MakeSeederCommand.php
\u2502   \u2502       \u251C\u2500\u2500 MakeTestCommand.php
\u2502   \u2502       \u2514\u2500\u2500 stubs
\u2502   \u2502           \u251C\u2500\u2500 command.stub
\u2502   \u2502           \u251C\u2500\u2500 controller.resource.stub
\u2502   \u2502           \u251C\u2500\u2500 controller.stub
\u2502   \u2502           \u251C\u2500\u2500 event.stub
\u2502   \u2502           \u251C\u2500\u2500 listener.stub
\u2502   \u2502           \u251C\u2500\u2500 listener-duck.stub
\u2502   \u2502           \u251C\u2500\u2500 listener-queued.stub
\u2502   \u2502           \u251C\u2500\u2500 listener-queued-duck.stub
\u2502   \u2502           \u251C\u2500\u2500 middleware.stub
\u2502   \u2502           \u251C\u2500\u2500 model.stub
\u2502   \u2502           \u251C\u2500\u2500 policy.stub
\u2502   \u2502           \u251C\u2500\u2500 provider.stub
\u2502   \u2502           \u251C\u2500\u2500 request.stub
\u2502   \u2502           \u251C\u2500\u2500 seeder.stub
\u2502   \u2502           \u2514\u2500\u2500 test.stub
\u2502   \u251C\u2500\u2500 Database          # \u6570\u636E\u5E93\u96C6\u6210\u5668
\u2502   \u2502   \u2514\u2500\u2500 Migrations
\u2502   \u2502       \u2514\u2500\u2500 Migrator.php
\u2502   \u251C\u2500\u2500 Events            # \u63D0\u4F9B\u7684\u4E8B\u4EF6
\u2502   \u2502   \u2514\u2500\u2500 PoppyMake.php
\u2502   \u251C\u2500\u2500 Exceptions        # \u5F02\u5E38
\u2502   \u2502   \u251C\u2500\u2500 AjaxException.php
\u2502   \u2502   \u251C\u2500\u2500 ApplicationException.php
\u2502   \u2502   \u251C\u2500\u2500 ArithmeticException.php
\u2502   \u2502   \u251C\u2500\u2500 BaseException.php
\u2502   \u2502   \u251C\u2500\u2500 DoException.php
\u2502   \u2502   \u251C\u2500\u2500 FakerException.php
\u2502   \u2502   \u251C\u2500\u2500 LoadConfigurationException.php
\u2502   \u2502   \u251C\u2500\u2500 ModuleNotFoundException.php
\u2502   \u2502   \u251C\u2500\u2500 ParamException.php
\u2502   \u2502   \u251C\u2500\u2500 PolicyException.php
\u2502   \u2502   \u251C\u2500\u2500 PoppyException.php
\u2502   \u2502   \u251C\u2500\u2500 RbacException.php
\u2502   \u2502   \u251C\u2500\u2500 RuntimeException.php
\u2502   \u2502   \u251C\u2500\u2500 TestException.php
\u2502   \u2502   \u2514\u2500\u2500 TransactionException.php
\u2502   \u251C\u2500\u2500 Facade        # \u95E8\u9762
\u2502   \u2502   \u251C\u2500\u2500 IniFacade.php
\u2502   \u2502   \u251C\u2500\u2500 XmlFacade.php
\u2502   \u2502   \u251C\u2500\u2500 YamlFacade.php
\u2502   \u251C\u2500\u2500 Filesystem        # \u6587\u4EF6\u7CFB\u7EDF
\u2502   \u2502   \u2514\u2500\u2500 Filesystem.php
\u2502   \u251C\u2500\u2500 Foundation        # Kernal \u4EE5\u53CA\u5F02\u5E38\u5904\u7406
\u2502   \u2502   \u251C\u2500\u2500 Application.php
\u2502   \u2502   \u251C\u2500\u2500 Bootstrap
\u2502   \u2502   \u2502   \u2514\u2500\u2500 RegisterClassLoader.php
\u2502   \u2502   \u251C\u2500\u2500 Console
\u2502   \u2502   \u2502   \u2514\u2500\u2500 Kernel.php
\u2502   \u2502   \u251C\u2500\u2500 Contracts
\u2502   \u2502   \u2502   \u2514\u2500\u2500 Bootstrap.php
\u2502   \u2502   \u251C\u2500\u2500 Exception
\u2502   \u2502   \u2502   \u2514\u2500\u2500 Handler.php
\u2502   \u2502   \u2514\u2500\u2500 Http
\u2502   \u2502       \u2514\u2500\u2500 Kernel.php
\u2502   \u251C\u2500\u2500 FrameworkServiceProvider.php
\u2502   \u251C\u2500\u2500 Helper           # \u5E2E\u52A9\u6587\u4EF6
\u2502   \u2502   \u251C\u2500\u2500 ArrayHelper.php
\u2502   \u2502   \u251C\u2500\u2500 CookieHelper.php
\u2502   \u2502   \u251C\u2500\u2500 EnvHelper.php
\u2502   \u2502   \u251C\u2500\u2500 FileHelper.php
\u2502   \u2502   \u251C\u2500\u2500 HtmlHelper.php
\u2502   \u2502   \u251C\u2500\u2500 ImageHelper.php
\u2502   \u2502   \u251C\u2500\u2500 RouterHelper.php
\u2502   \u2502   \u251C\u2500\u2500 SearchHelper.php
\u2502   \u2502   \u251C\u2500\u2500 StrHelper.php
\u2502   \u2502   \u251C\u2500\u2500 TimeHelper.php
\u2502   \u2502   \u251C\u2500\u2500 TreeHelper.php
\u2502   \u2502   \u2514\u2500\u2500 UtilHelper.php
\u2502   \u251C\u2500\u2500 Http            # \u63A7\u5236\u5668\u76F8\u5173, \u4E2D\u95F4\u4EF6, \u5206\u9875
\u2502   \u2502   \u251C\u2500\u2500 Middlewares
\u2502   \u2502   \u2502   \u2514\u2500\u2500 EnableCrossRequest.php
\u2502   \u2502   \u2514\u2500\u2500 Pagination
\u2502   \u2502       \u2514\u2500\u2500 PageInfo.php
\u2502   \u2502   \u2514\u2500\u2500 BladeServiceProvider.php
\u2502   \u251C\u2500\u2500 Parse           # \u89E3\u6790\u5668
\u2502   \u2502   \u251C\u2500\u2500 Ini.php
\u2502   \u2502   \u251C\u2500\u2500 ParseServiceProvider.php
\u2502   \u2502   \u251C\u2500\u2500 Xml.php
\u2502   \u2502   \u2514\u2500\u2500 Yaml.php
\u2502   \u251C\u2500\u2500 Poppy           # poppy \u52A0\u8F7D\u7684\u6A21\u5757\u64CD\u4F5C
\u2502   \u2502   \u251C\u2500\u2500 Abstracts
\u2502   \u2502   \u2502   \u2514\u2500\u2500 Repository.php
\u2502   \u2502   \u251C\u2500\u2500 Contracts
\u2502   \u2502   \u2502   \u2514\u2500\u2500 Repository.php
\u2502   \u2502   \u251C\u2500\u2500 Events
\u2502   \u2502   \u2502   \u2514\u2500\u2500 PoppyOptimized.php
\u2502   \u2502   \u251C\u2500\u2500 FileRepository.php
\u2502   \u2502   \u251C\u2500\u2500 Poppy.php
\u2502   \u2502   \u2514\u2500\u2500 PoppyServiceProvider.php
\u2502   \u251C\u2500\u2500 Support            # \u652F\u63F4\u6587\u4EF6
\u2502   \u2502   \u251C\u2500\u2500 Abstracts
\u2502   \u2502   \u2502   \u2514\u2500\u2500 Repository.php
\u2502   \u2502   \u251C\u2500\u2500 PoppyServiceProvider.php
\u2502   \u2502   \u2514\u2500\u2500 functions.php
\u2502   \u251C\u2500\u2500 Translation       # \u591A\u8BED\u8A00
\u2502   \u2502   \u251C\u2500\u2500 TranslationServiceProvider.php
\u2502   \u2502   \u2514\u2500\u2500 Translator.php
\u2502   \u2514\u2500\u2500 Validation        # \u9A8C\u8BC1\u89C4\u5219
\u2502       \u2514\u2500\u2500 Rule.php
\u2514\u2500\u2500 tests                 # \u6D4B\u8BD5\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v=[d];function r(a,p){return n(),e("div",null,v)}const c=i(l,[["render",r],["__file","tree.html.vue"]]);export{c as default};
