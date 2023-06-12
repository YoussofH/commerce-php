"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[93844],{451:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return p},default:function(){return h}});var a,r=t(87462),o=t(63366),i=(t(15007),t(64983)),d=t(91515),s=t(1930),m=["components"],p={},l=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),c={_frontmatter:p},u=d.Z;function h(e){var n=e.components,t=(0,o.Z)(e,m);return(0,i.mdx)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)(s.default,{mdxType:"Docs"}),(0,i.mdx)("h1",{id:"get-payment-information-from-frontend-to-backend"},"Get payment information from frontend to backend"),(0,i.mdx)("p",null,"To implement transaction authorization our payment should receive some payment details from the payment form, like credit card details, and send received details to payment processor."),(0,i.mdx)("p",null,"Depending on your payment integration, payment details might include credit card details, tokenized cards, payment nonce, and similar information."),(0,i.mdx)("p",null,"However, in any case you should write some code to retrieve payment details from payment form."),(0,i.mdx)("h2",{id:"example-braintree-request-builder-for-the-payment-part-of-the-request"},"Example: Braintree request builder for the ",(0,i.mdx)("inlineCode",{parentName:"h2"},"payment")," part of the request"),(0,i.mdx)("p",null,"We have specified ",(0,i.mdx)("inlineCode",{parentName:"p"},"BraintreeAuthorizeRequest")," builder composite to process authorization and it includes the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento\\Braintree\\Gateway\\Request\\PaymentDataBuilder")," builder. This is builder responsible for the payment information part of the request, in other words, the credit card information. Let's look closer at it's implementation."),(0,i.mdx)("p",null,"The Braintree payment provider requires the ",(0,i.mdx)("a",{parentName:"p",href:"https://developers.braintreepayments.com/start/overview#payment-method-nonce"},"payment method nonce"),"\nto process transactions, and our builder should send it for each authorization transaction."),(0,i.mdx)("p",null,"Here is how the Braintree payment builder looks:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"class PaymentDataBuilder implements BuilderInterface\n{\n    /**\n     * @inheritdoc\n     */\n    public function build(array $buildSubject)\n    {\n        $paymentDO = $this->subjectReader->readPayment($buildSubject);\n\n        $payment = $paymentDO->getPayment();\n        $order = $paymentDO->getOrder();\n\n        $result = [\n            self::AMOUNT => $this->formatPrice($this->subjectReader->readAmount($buildSubject)),\n            self::PAYMENT_METHOD_NONCE => $payment->getAdditionalInformation(\n                DataAssignObserver::PAYMENT_METHOD_NONCE\n            ),\n            self::ORDER_ID => $order->getOrderIncrementId()\n        ];\n\n        ...\n\n        return $result;\n    }\n}\n")),(0,i.mdx)("p",null,"As you can see, we get the payment nonce from payment additional information. And so any specific data (like credit card information) can be retrieved."),(0,i.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"You should remove any sensitive data (like credit card details) from payment additional information when you do not use it in your code. You can remove it in request builder, after reading, or in response handler, after processing response. In other case it will be stored in database."),(0,i.mdx)("h2",{id:"getting-payment-information-from-frontend-to-backend"},"Getting payment information from frontend to backend"),(0,i.mdx)("p",null,"In most cases, customers fill all required information (credit card, expiration date, billing address, etc) on checkout payment form.\nSo our payment method implementation should provide the ability to display and process payment form on checkout step."),(0,i.mdx)("p",null,"We can send to backend any specific data, just need to override ",(0,i.mdx)("inlineCode",{parentName:"p"},"getData()")," method in\n",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.3/app/code/Magento/Braintree/view/frontend/web/js/view/payment/method-renderer/cc-form.js"},"payment UI component"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"define(\n    [..., 'Magento_Payment/js/view/payment/cc-form', ...],\n    function (..., Component, ...) {\n        'use strict';\n\n        return Component.extend({\n            defaults: {\n                ...\n                paymentMethodNonce: null,\n            },\n            ...\n\n            getData: function () {\n                var data = {\n                    'method': this.getCode(),\n                    'additional_data': {\n                        'payment_method_nonce': this.paymentMethodNonce\n                    }\n                };\n\n                return data;\n            },\n\n            setPaymentMethodNonce: function (paymentMethodNonce) {\n                this.paymentMethodNonce = paymentMethodNonce;\n            },\n\n            beforePlaceOrder: function (data) {\n                this.setPaymentMethodNonce(data.nonce);\n                this.placeOrder();\n            },\n\n            ...\n        });\n    }\n);\n")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"getData()")," method returns data what we need and depending on payment integration the returned data can be more\ncomplicated. we need last step to retrieve data from storefront in the backend. Adobe Commerce provides some\nmechanisms called ",(0,i.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/extension-dev-guide/events-and-observers.html"},"Observers"),"."),(0,i.mdx)("h3",{id:"read-additional-data"},"Read additional data"),(0,i.mdx)("p",null,"You need to add an observer to retrieve additional data from payment form and store it\nin the payment additional information. In most cases it will be enough to extend\n",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.4/app/code/Magento/Payment/Observer/AbstractDataAssignObserver.php"},"AbstractDataAssignObserver")," and add custom behavior."),(0,i.mdx)("p",null,"That's how observer might looks:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"class DataAssignObserver extends AbstractDataAssignObserver\n{\n    const PAYMENT_METHOD_NONCE = 'payment_method_nonce';\n\n    /**\n     * @var array\n     */\n    protected $additionalInformationList = [\n        self::PAYMENT_METHOD_NONCE,\n    ];\n\n    /**\n     * @param Observer $observer\n     * @return void\n     */\n    public function execute(Observer $observer)\n    {\n        $data = $this->readDataArgument($observer);\n\n        $additionalData = $data->getData(PaymentInterface::KEY_ADDITIONAL_DATA);\n        if (!is_array($additionalData)) {\n            return;\n        }\n\n        $paymentInfo = $this->readPaymentModelArgument($observer);\n\n        foreach ($this->additionalInformationList as $additionalInformationKey) {\n            if (isset($additionalData[$additionalInformationKey])) {\n                $paymentInfo->setAdditionalInformation(\n                    $additionalInformationKey,\n                    $additionalData[$additionalInformationKey]\n                );\n            }\n        }\n    }\n}\n")),(0,i.mdx)("p",null,"And this observer should be added to list of events (",(0,i.mdx)("inlineCode",{parentName:"p"},"Module_Name/etc/events.xml"),"):"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Event/etc/events.xsd">\n    <event name="payment_method_assign_data_braintree">\n        <observer name="braintree_gateway_data_assign" instance="Magento\\Braintree\\Observer\\DataAssignObserver" />\n    </event>\n</config>\n')),(0,i.mdx)("p",null,"This event will be triggered in ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/tree/2.4/app/code/Magento/Payment/Model/Method/Adapter.php"},"Adapter::assignData()")," method call:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"public function assignData(\\Magento\\Framework\\DataObject $data)\n{\n    $this->eventManager->dispatch(\n        'payment_method_assign_data_' . $this->getCode(),\n        [\n            AbstractDataAssignObserver::METHOD_CODE => $this,\n            AbstractDataAssignObserver::MODEL_CODE => $this->getInfoInstance(),\n            AbstractDataAssignObserver::DATA_CODE => $data\n        ]\n    );\n\n    $this->eventManager->dispatch(\n        'payment_method_assign_data',\n        [\n            AbstractDataAssignObserver::METHOD_CODE => $this,\n            AbstractDataAssignObserver::MODEL_CODE => $this->getInfoInstance(),\n            AbstractDataAssignObserver::DATA_CODE => $data\n        ]\n    );\n\n    return $this;\n}\n")),(0,i.mdx)("p",null,"There are two events:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"payment_method_assign_data_payment_code"),": specific for current method (placing order using this payment method)")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"payment_method_assign_data"),": global for all payments (place order)"))),(0,i.mdx)("p",null,"What type of event to use depends on your implementation, but in most cases it will be enough to use the event for current payment method."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-payments-integrations-base-integration-get-payment-info-md-596afecab6b64ea8767c.js.map