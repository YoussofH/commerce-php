"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[51483],{96778:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return d},default:function(){return u}});var t=n(87462),o=n(63366),r=(n(15007),n(64983)),m=n(91515),i=n(1930),l=["components"],d={},p={_frontmatter:d},s=m.Z;function u(e){var a=e.components,n=(0,o.Z)(e,l);return(0,r.mdx)(s,(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)(i.default,{mdxType:"Docs"}),(0,r.mdx)("h1",{id:"payment-method-facade"},"Payment method facade"),(0,r.mdx)("p",null,"Payment facade is an instance of ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.4/app/code/Magento/Payment/Model/Method/Adapter.php"},"Payment Adapter")," configured with virtual types. It allows you to process payment actions between Adobe Commerce Sales Management and the payment processor."),(0,r.mdx)("p",null,"Add the ",(0,r.mdx)("a",{parentName:"p",href:"../../components/dependency-injection.md"},"dependency injection (DI)")," configuration for ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/payment-method"},"payment method")," facade in your ",(0,r.mdx)("inlineCode",{parentName:"p"},"%Vendor_Module%/etc/di.xml"),"."),(0,r.mdx)("p",null,"The following sample is an illustration of this configuration (",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.3/app/code/Magento/Braintree/etc/di.xml"},"app/code/Magento/Braintree/etc/di.xml"),"):"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<virtualType name="BraintreeFacade" type="Magento\\Payment\\Model\\Method\\Adapter">\n    <arguments>\n        <argument name="code" xsi:type="const">Magento\\Braintree\\Model\\Ui\\ConfigProvider::CODE</argument>\n        <argument name="formBlockType" xsi:type="string">Magento\\Braintree\\Block\\Form</argument>\n        <argument name="infoBlockType" xsi:type="string">Magento\\Braintree\\Block\\Info</argument>\n        <argument name="valueHandlerPool" xsi:type="object">BraintreeValueHandlerPool</argument>\n        <argument name="validatorPool" xsi:type="object">BraintreeValidatorPool</argument>\n        <argument name="commandPool" xsi:type="object">BraintreeCommandPool</argument>\n    </arguments>\n</virtualType>\n')),(0,r.mdx)("p",null,"The following mandatory arguments must be configured:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Option"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"code")),(0,r.mdx)("td",{parentName:"tr",align:null},"The code for the payment method.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"formBlockType")),(0,r.mdx)("td",{parentName:"tr",align:null},"The name of the block class responsible for payment provider gateway form rendering. Only the Admin panel uses this block because the storefront form renders using knockout.js. See the ",(0,r.mdx)("a",{parentName:"td",href:"formblocktype.md"},"Admin integration")," topic for details.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"infoBlockType")),(0,r.mdx)("td",{parentName:"tr",align:null},"The name of the block class responsible for Transaction/Payment Information details rendering in the Order block, in the Admin panel or in a customer account on storefront. In most cases it will be enough to specify the default implementation of ",(0,r.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/tree/2.4/app/code/Magento/Payment/Block/ConfigurableInfo.php"},"Configurable Info"),". To customize specify your own implementation.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"valueHandlerPool")),(0,r.mdx)("td",{parentName:"tr",align:null},"Pool of value handlers used for queries to configuration. For details see the ",(0,r.mdx)("a",{parentName:"td",href:"#value-handlers-pool"},"following paragraph"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"validatorPool")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"#validators-pool"},"Pool of validators"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"commandPool")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"../payment-gateway/command-pool.md"},"Pool of gateway commands"),".")))),(0,r.mdx)("h4",{id:"value-handlers-pool"},"Value handlers pool"),(0,r.mdx)("p",null,"Let's look closer at the value handlers pool of a payment method. This pool enables you to set payment configuration that is based on certain conditions."),(0,r.mdx)("p",null,"For example, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"can_void")," configuration option might depend on payment transaction status or paid amount. The following sample shows how to set the corresponding configuration (",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.3/app/code/Magento/Braintree/etc/di.xml"},"app/code/Magento/Braintree/etc/di.xml"),"):"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<virtualType name="BraintreeValueHandlerPool" type="Magento\\Payment\\Gateway\\Config\\ValueHandlerPool">\n    <arguments>\n        <argument name="handlers" xsi:type="array">\n            <item name="default" xsi:type="string">BraintreeConfigValueHandler</item>\n            <item name="can_void" xsi:type="string">Magento\\Braintree\\Gateway\\Config\\CanVoidHandler</item>\n            <item name="can_cancel" xsi:type="string">Magento\\Braintree\\Gateway\\Config\\CanVoidHandler</item>\n        </argument>\n    </arguments>\n</virtualType>\n')),(0,r.mdx)("p",null,"You must always specify the default handler. In this example it is the config reader for Braintree:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<virtualType name="BraintreeConfigValueHandler" type="Magento\\Payment\\Gateway\\Config\\ConfigValueHandler">\n    <arguments>\n        <argument name="configInterface" xsi:type="object">Magento\\Braintree\\Gateway\\Config\\Config</argument>\n    </arguments>\n</virtualType>\n')),(0,r.mdx)("p",null,"In your configuration you can use default ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.4/app/code/Magento/Payment/Gateway/Config/Config.php"},"Magento\\Payment\\Gateway\\Config\\Config")," or you can add a custom config interface by implementing the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Magento\\Payment\\Gateway\\ConfigInterface")," interface."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Magento\\Payment\\Gateway\\Config\\Config")," can read configuration by payment method code, so is useful to use it or extend it for your own purposes."),(0,r.mdx)("p",null,"And ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.3/app/code/Magento/Braintree/Gateway/Config/Config.php"},"Magento\\Braintree\\Gateway\\Config\\Config")," reads\nconfiguration from database or payment config file."),(0,r.mdx)("p",null,"Other handlers contain some logic, for example, ",(0,r.mdx)("inlineCode",{parentName:"p"},"can_cancel")," option is the same as ",(0,r.mdx)("inlineCode",{parentName:"p"},"can_void")," and depends on whether the order has paid amount (invoiced)."),(0,r.mdx)("p",null,"Your custom handlers must implement the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.4/app/code/Magento/Payment/Gateway/Config/ValueHandlerInterface.php"},"Value Handler interface"),"."),(0,r.mdx)("h4",{id:"validators-pool"},"Validators pool"),(0,r.mdx)("p",null,"You can configure the pool of validators, which allows processing various payment method validations. Below are the examples of such validators:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"country")," — checks if billing country is allowed for the payment method")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"currency")," — checks if the selected currency is allowed for the payment method")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"availability")," — checks if the payment method is available")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"global")," — the validation that is called before placing an order"))),(0,r.mdx)("p",null,"A custom validator should implement the ",(0,r.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Payment\\Gateway\\Validator\\ValidatorInterface"),". In the most cases, it is enough\nto extend the ",(0,r.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Payment\\Gateway\\Validator\\AbstractValidator")," and create an implementation of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"validate")," method:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"class CountryValidator extends AbstractValidator\n{\n    /**\n     * @inheritdoc\n     */\n    public function validate(array $validationSubject)\n    {\n        $isValid = true;\n        $storeId = $validationSubject['storeId'];\n\n        if ((int)$this->config->getValue('allowspecific', $storeId) === 1) {\n            $availableCountries = explode(\n                ',',\n                $this->config->getValue('specificcountry', $storeId)\n            );\n\n            if (!in_array($validationSubject['country'], $availableCountries)) {\n                $isValid =  false;\n            }\n        }\n\n        return $this->createResult($isValid);\n    }\n}\n")),(0,r.mdx)("p",null,"Then, the newly created validator needs to be added to the global pool of validators:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<virtualType name="BraintreeValidatorPool" type="Magento\\Payment\\Gateway\\Validator\\ValidatorPool">\n    <arguments>\n        <argument name="validators" xsi:type="array">\n            <item name="country" xsi:type="string">Magento\\Braintree\\Gateway\\Validator\\CountryValidator</item>\n        </argument>\n    </arguments>\n</virtualType>\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-payments-integrations-base-integration-facade-configuration-md-329aa787ffad6b2a2687.js.map