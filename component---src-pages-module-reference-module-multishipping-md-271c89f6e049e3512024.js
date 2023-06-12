"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[5530],{53040:function(e,i,n){n.r(i),n.d(i,{_frontmatter:function(){return o},default:function(){return u}});var t=n(87462),l=n(63366),a=(n(15007),n(64983)),m=n(91515),d=["components"],o={},r={_frontmatter:o},p=m.Z;function u(e){var i=e.components,n=(0,l.Z)(e,d);return(0,a.mdx)(p,(0,t.Z)({},r,n,{components:i,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"magento_multishipping-module"},"Magento_Multishipping module"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Magento_Multishipping")," module provides functionality that allows customer to request shipping to more than one address\nusing different carriers. The module provides alternative to standard checkout flow."),(0,a.mdx)("h2",{id:"installation"},"Installation"),(0,a.mdx)("p",null,"For information about a module installation in Magento 2, see ",(0,a.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli-subcommands-enable.html"},"Enable or disable modules"),"."),(0,a.mdx)("h2",{id:"structure"},"Structure"),(0,a.mdx)("p",null,"For information about a typical file structure of a module in Magento 2,\nsee ",(0,a.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/extension-dev-guide/build/module-file-structure.html#module-file-structure"},"Module file structure"),"."),(0,a.mdx)("h2",{id:"extensibility"},"Extensibility"),(0,a.mdx)("p",null,"Developers can interact with the module and change behaviour using type configuration feature."),(0,a.mdx)("p",null,"Namely, we can change ",(0,a.mdx)("inlineCode",{parentName:"p"},"paymentSpecification")," for ",(0,a.mdx)("inlineCode",{parentName:"p"},"Magento\\Multishipping\\Block\\Checkout\\Billing")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"Magento\\Multishipping\\Model\\Checkout\\Type\\Multishipping")," classes.\nAs result, we will get changed behavior, new logic or something what our business need."),(0,a.mdx)("p",null,"For example:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-xml"},'<type name="Magento\\Multishipping\\Model\\Checkout\\Type\\Multishipping">\n     <arguments>\n         <argument name="paymentSpecification" xsi:type="object">multishippingPaymentSpecification</argument>\n     </arguments>\n</type>\n')),(0,a.mdx)("p",null,"Yo can check this configuration and find more examples in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"etc/frontend/di.xml")," file."),(0,a.mdx)("p",null,"More information about ",(0,a.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/extension-dev-guide/build/di-xml-file.html"},"type configuration"),"."),(0,a.mdx)("p",null,"Extension developers can interact with the Magento_Multishipping module. For more information about the Magento extension mechanism, see ",(0,a.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/extension-dev-guide/plugins.html"},"Magento plug-ins"),"."),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/extension-dev-guide/depend-inj.html"},"The Magento dependency injection mechanism")," enables you to override the functionality of the Magento_Msrp module."),(0,a.mdx)("h3",{id:"events"},"Events"),(0,a.mdx)("p",null,"This module observes the following event:"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"etc/frontend/")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"checkout_cart_save_before")," in the ",(0,a.mdx)("inlineCode",{parentName:"li"},"Magento\\Multishipping\\Observer\\DisableMultishippingObserver")," file.")),(0,a.mdx)("p",null,"The module dispatches the following events:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"multishipping_checkout_controller_success_action")," event in the\nclass ",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Multishipping\\Controller\\Checkout\\Success::execute()")," method. Parameters:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"order_ids")," is order ids created during checkout"))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"checkout_controller_multishipping_shipping_post")," event in the\nclass ",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Multishipping\\Controller\\Checkout\\ShippingPost::execute()")," method. Parameters:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"request")," is a request object ",(0,a.mdx)("inlineCode",{parentName:"li"},"Magento\\Framework\\App\\RequestInterface"),"."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"quote")," is a quote object for current checkout ",(0,a.mdx)("inlineCode",{parentName:"li"},"Magento\\Quote\\Model\\Quote"),"."))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"checkout_type_multishipping_set_shipping_items")," event in the\nclass ",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Multishipping\\Model\\Checkout\\Type\\Multishipping::setShippingItemsInformation()")," method. Parameters:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"quote")," is a quote object for current checkout ",(0,a.mdx)("inlineCode",{parentName:"li"},"Magento\\Quote\\Model\\Quote"),"."))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"checkout_type_multishipping_create_orders_single")," event in the\nclass ",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Multishipping\\Model\\Checkout\\Type\\Multishipping::createOrders()")," method. Parameters:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"order")," is a prepared order object for creating ",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Sales\\Model\\Order"),"."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"address")," is an address array."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"quote")," is a quote object for current checkout ",(0,a.mdx)("inlineCode",{parentName:"li"},"Magento\\Quote\\Model\\Quote"),"."))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"checkout_submit_all_after")," event in the\nclass ",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Multishipping\\Model\\Checkout\\Type\\Multishipping::createOrders()")," method. Parameters:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"orders")," is order object array ",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Sales\\Model\\Order"),"  that was created."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"quote")," is a quote object for current checkout ",(0,a.mdx)("inlineCode",{parentName:"li"},"Magento\\Quote\\Model\\Quote"),"."))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"checkout_multishipping_refund_all")," event in the\nclass ",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Multishipping\\Model\\Checkout\\Type\\Multishipping::createOrders()")," method. Parameters:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"orders")," is order object array ",(0,a.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Sales\\Model\\Order"),"  that was created.")))),(0,a.mdx)("p",null,"For information about an event in Magento 2, see ",(0,a.mdx)("a",{parentName:"p",href:"http://devdocs.magento.com/guides/v2.3/extension-dev-guide/events-and-observers.html#events"},"Events and observers"),"."),(0,a.mdx)("h3",{id:"layouts"},"Layouts"),(0,a.mdx)("p",null,"The module interacts with the following layout handles:"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"view/frontend/layout")," directory:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"checkout_cart_index"))),(0,a.mdx)("p",null,"This module introduces the following layouts and layout handles:"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"view/frontend/layout")," directory:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"multishipping_checkout")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"multishipping_checkout_address_editaddress")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"multishipping_checkout_address_editbilling")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"multishipping_checkout_address_editshipping")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"multishipping_checkout_address_newbilling")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"multishipping_checkout_address_newshipping")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"multishipping_checkout_address_select")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"multishipping_checkout_address_selectbilling")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"multishipping_checkout_addresses")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"multishipping_checkout_billing")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"multishipping_checkout_customer_address")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"multishipping_checkout_login")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"multishipping_checkout_overview")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"multishipping_checkout_register")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"multishipping_checkout_results")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"multishipping_checkout_shipping")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"multishipping_checkout_success"))),(0,a.mdx)("h2",{id:"additional-information"},"Additional information"),(0,a.mdx)("h3",{id:"acl"},"ACL"),(0,a.mdx)("p",null,"Module introduces the following resources:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"Magento_Multishipping::config_multishipping")," - Multishipping Settings Section")),(0,a.mdx)("p",null,"More information about ",(0,a.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/ext-best-practices/tutorials/create-access-control-list-rule.html"},"Access Control List rule"),"."),(0,a.mdx)("h3",{id:"page-types"},"Page Types"),(0,a.mdx)("p",null,"Module introduces the new pages:"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"etc/frontend/page_types.xml")," file."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"checkout_cart_multishipping")," - Catalog Quick Search Form Suggestion"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"checkout_cart_multishipping_address_editaddress")," - Multishipping Checkout One Address Edit Form"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"checkout_cart_multishipping_address_editbilling")," - Multishipping Checkout Billing Address Edit Form"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"checkout_cart_multishipping_address_editshipping")," - Multishipping Checkout Shipping Address Edit Form"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"checkout_cart_multishipping_address_newbilling")," - Multishipping Checkout Billing Address Creation"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"checkout_cart_multishipping_address_newshipping")," - Multishipping Checkout Shipping Address Creation"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"checkout_cart_multishipping_address_selectbilling")," - Multishipping Checkout Billing Address Selection"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"checkout_cart_multishipping_addresses")," - Multishipping Checkout Address (Any) Form"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"checkout_cart_multishipping_billing")," - Multishipping Checkout Billing Information Step"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"checkout_cart_multishipping_customer_address")," - Multishipping Checkout Customer Address Edit Form"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"checkout_cart_multishipping_login")," - Multishipping Checkout Login User Form"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"checkout_cart_multishipping_overview")," - Multishipping Checkout Overview"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"checkout_cart_multishipping_register")," - Multishipping Checkout Register User Form"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"checkout_cart_multishipping_shipping")," - Multishipping Checkout Shipping Information Step"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"checkout_cart_multishipping_success")," - Multishipping Checkout Success")),(0,a.mdx)("p",null,"More information about ",(0,a.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/frontend-dev-guide/layouts/layout-types.html"},"layout types"),"."),(0,a.mdx)("p",null,"For information about significant changes in patch releases, see ",(0,a.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/release/notes/overview.html"},"Release information"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-module-reference-module-multishipping-md-271c89f6e049e3512024.js.map