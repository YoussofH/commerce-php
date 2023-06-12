"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[80526],{17610:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return d},default:function(){return u}});var t=a(87462),o=a(63366),i=(a(15007),a(64983)),l=a(91515),m=["components"],d={},r={_frontmatter:d},p=l.Z;function u(e){var n=e.components,a=(0,o.Z)(e,m);return(0,i.mdx)(p,(0,t.Z)({},r,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"magento_layerednavigation-module"},"Magento_LayeredNavigation module"),(0,i.mdx)("p",null,"This module introduces Layered Navigation UI for Catalog (faceted search)."),(0,i.mdx)("p",null,"This module can be removed from Magento installation without impact on the application."),(0,i.mdx)("h2",{id:"installation"},"Installation"),(0,i.mdx)("p",null,"For information about a module installation in Magento 2, see ",(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/tutorials/manage-modules.html"},"Enable or disable modules"),"."),(0,i.mdx)("h2",{id:"extensibility"},"Extensibility"),(0,i.mdx)("p",null,"Extension developers can interact with the Magento_LayeredNavigation module. For more information about the Magento extension mechanism, see ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/plugins/"},"Magento plugins"),"."),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/dependency-injection/"},"The Magento dependency injection mechanism")," enables you to override the functionality of the Magento_LayeredNavigation module."),(0,i.mdx)("h3",{id:"layouts"},"Layouts"),(0,i.mdx)("p",null,"This module introduces the following layout handles in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"view/frontend/layout")," directory:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"catalog_category_view_type_layered")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"catalog_category_view_type_layered_without_children")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"catalogsearch_result_index"))),(0,i.mdx)("p",null,"For more information about a layout in Magento 2, see the ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/guide/layouts/"},"Layout documentation"),"."),(0,i.mdx)("h3",{id:"ui-components"},"UI components"),(0,i.mdx)("p",null,"This module extends following ui components located in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"view/adminhtml/ui_component")," directory:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"product_attribute_add_form")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"product_attributes_grid")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"product_attributes_listing"))),(0,i.mdx)("p",null,"For information about a UI component in Magento 2, see ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/ui-components/"},"Overview of UI components"),"."),(0,i.mdx)("h3",{id:"public-apis"},"Public APIs"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"\\Magento\\LayeredNavigation\\Block\\Navigation\\FilterRendererInterface"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"render filter")))),(0,i.mdx)("p",null,"For information about a public API in Magento 2, see ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/api-concepts/"},"Public interfaces & APIs"),"."),(0,i.mdx)("h2",{id:"additional-information"},"Additional information"),(0,i.mdx)("h3",{id:"page-layout"},"Page Layout"),(0,i.mdx)("p",null,"This module modifies the following page_layout in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"view/frontend.page_layout")," directory:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"1columns")," - moves block ",(0,i.mdx)("inlineCode",{parentName:"li"},"catalog.leftnav")," into the ",(0,i.mdx)("inlineCode",{parentName:"li"},"content.top")," container"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"2columns-left")," - moves block ",(0,i.mdx)("inlineCode",{parentName:"li"},"catalog.leftnav")," into the ",(0,i.mdx)("inlineCode",{parentName:"li"},'sidebar.main"')," container"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"2columns-right")," - moves block ",(0,i.mdx)("inlineCode",{parentName:"li"},"catalog.leftnav")," into the ",(0,i.mdx)("inlineCode",{parentName:"li"},'sidebar.main"')," container"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"3columns")," - moves block ",(0,i.mdx)("inlineCode",{parentName:"li"},"catalog.leftnav")," into the ",(0,i.mdx)("inlineCode",{parentName:"li"},'sidebar.main"')," container"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"empty")," - moves block ",(0,i.mdx)("inlineCode",{parentName:"li"},"catalog.leftnav")," into the ",(0,i.mdx)("inlineCode",{parentName:"li"},"category.product.list.additional")," container")),(0,i.mdx)("p",null,"More information can be found in:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://docs.magento.com/user-guide/catalog/navigation-layered.html"},"Learn more about Layered Navigation")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://docs.magento.com/user-guide/catalog/navigation-layered-configuration.html"},"Learn how to Configuring Layered Navigation"))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-module-reference-beta-module-layered-navigation-md-02a38f74e18b6cbf3583.js.map