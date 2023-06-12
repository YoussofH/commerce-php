"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[16557],{11908:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return c},default:function(){return m}});var o=n(87462),a=n(63366),r=(n(15007),n(64983)),i=n(91515),d=["components"],c={},s={_frontmatter:c},l=i.Z;function m(e){var t=e.components,n=(0,a.Z)(e,d);return(0,r.mdx)(l,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"working-with-the-architecture"},"Working with the architecture"),(0,r.mdx)("p",null,"In addition to understanding fundamental programming designs/concepts, you are encouraged to learn how the MVC architecture works in our code and how to work with generated code and factories."),(0,r.mdx)("h2",{id:"avoid-modification-of-the-core"},"Avoid modification of the Core"),(0,r.mdx)("p",null,"The core code is the default code that comes with the application. You should never edit the core code because code changes occur between version upgrades and any changes you make will get overwritten. Try achieving your desired behavior with plugins, overriding interface preferences, and event observers."),(0,r.mdx)("p",null,"If you feel that the application can be improved with your core code changes, please consider ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/contributor/guides/code-contributions/"},"contributing via Git"),"."),(0,r.mdx)("h2",{id:"learn-the-architecture"},"Learn the architecture"),(0,r.mdx)("p",null,"To create the optimum module, you should get to know the application architecture. Start off by familiarizing yourself with the ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/admin-developer/pattern-library/"},"Admin Pattern Library"),", the core ",(0,r.mdx)("a",{parentName:"p",href:"../../development/index.md"},"components"),", and our ",(0,r.mdx)("a",{parentName:"p",href:"../../development/components/service-contracts/index.md"},"service contracts")," and ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/get-started/"},"APIs"),"."),(0,r.mdx)("h2",{id:"check-your-extension-configurations"},"Check your extension configurations"),(0,r.mdx)("p",null,"Make sure your extension is configured correctly in each of your extension's configuration files. Invalid or unexpected values will cause your extension to behave incorrectly."),(0,r.mdx)("h2",{id:"know-and-leverage-the-application-framework"},"Know and leverage the application framework"),(0,r.mdx)("p",null,"There have been some significant changes from Magento 1. Be sure to study the capabilities and standards of the application framework."),(0,r.mdx)("p",null,"For example:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Instead of creating custom validators from scratch, implement the ",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Validator/ValidatorInterface.php"},(0,r.mdx)("inlineCode",{parentName:"a"},"\\Magento\\Framework\\Validator\\ValidatorInterface")),"."),(0,r.mdx)("li",{parentName:"ul"},"Instantiating a database connection can be expensive and unnecessary. The application provides resource models for performing SQL commands. (See ",(0,r.mdx)("a",{parentName:"li",href:"../../architecture/layers/persistence.md"},"Persistence Layer"),")"),(0,r.mdx)("li",{parentName:"ul"},"Consider using framework conventions instead of low-level or PHP functionality."),(0,r.mdx)("li",{parentName:"ul"},"Use the  ",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Data/Collection.php"},(0,r.mdx)("inlineCode",{parentName:"a"},"Magento\\Framework\\Data\\Collection"))," class to retrieve a collection of filtered objects instead of directly querying the database.")),(0,r.mdx)("h2",{id:"use-dependency-injection"},"Use dependency injection"),(0,r.mdx)("p",null,"Direct class instantiation is not recommended because the class can be rewritten. If the class is created directly, any rewrites will not be applied and it breaks class rewrite capability. We encourage you to become familiar with how we use ",(0,r.mdx)("a",{parentName:"p",href:"../../development/components/dependency-injection.md"},"dependency injection")," to get an instance of a class."),(0,r.mdx)("h2",{id:"follow-model-view-control-mvc-pattern"},"Follow Model-View-Control (MVC) pattern"),(0,r.mdx)("p",null,"Make sure your extension adheres to the MVC Pattern, and that it does not violate any of its principles."),(0,r.mdx)("p",null,"Some important things to check in your extensions:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Make sure your Business Logic, Configuration, and SQL are implemented in the correct places."),(0,r.mdx)("li",{parentName:"ul"},"Make sure that CSS, JavaScript, HTML, and XML code are all in the appropriate files (i.e. they should not be inline)."),(0,r.mdx)("li",{parentName:"ul"},"Use appropriate logic in a Block, Helper, Template, Controller, or Model."),(0,r.mdx)("li",{parentName:"ul"},"Ensure correct module design.")),(0,r.mdx)("h2",{id:"use-the-php_codesniffer-tool"},"Use the PHP_CodeSniffer tool"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/squizlabs/PHP_CodeSniffer"},"PHP_CodeSniffer")," is a set of PHP scripts that checks your code for violations of a particular coding standard. It can be used in conjunction with the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento-coding-standard"},"Coding Standard")," to check your code for some of the more common application and PHP problems. Using these two tools will ensure that your extension code meets many of ",(0,r.mdx)("a",{parentName:"p",href:"../../coding-standards/index.md"},"coding standards"),". It also has the added benefits of keeping your code clean and maintainable."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-best-practices-extensions-architecture-md-b76c38e75c2484dfd84c.js.map