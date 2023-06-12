"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[15396],{10708:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return p}});var n=a(87462),l=a(63366),o=(a(15007),a(64983)),i=a(91515),m=["components"],d={},r={_frontmatter:d},u=i.Z;function p(e){var t=e.components,a=(0,l.Z)(e,m);return(0,o.mdx)(u,(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"magento_catalogstaging-module"},"Magento_CatalogStaging module"),(0,o.mdx)("p",null,"The Magento_CatalogStaging module is a part of the staging functionality in Magento EE. It enables you to create new catalog updates or add new changes to the existing store updates. In other words, you can modify the category and product entity attributes in updates. These updates are shown on the content dashboard."),(0,o.mdx)("h2",{id:"implementation-details"},"Implementation Details"),(0,o.mdx)("p",null,"The Magento_CatalogStaging module extends the Magento_Catalog module functionality. It changes a category and product creation page, and related database tables to make them compatible with the Magento Staging Framework."),(0,o.mdx)("p",null,"The following fields are removed from the Magento_Catalog module forms:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Category form:"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Schedule design update from"),(0,o.mdx)("li",{parentName:"ul"},"Schedule design update to"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Product form:"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Set as new from"),(0,o.mdx)("li",{parentName:"ul"},"Set as new to"),(0,o.mdx)("li",{parentName:"ul"},"Schedule design update from"),(0,o.mdx)("li",{parentName:"ul"},"Schedule design update to"),(0,o.mdx)("li",{parentName:"ul"},"Special price from"),(0,o.mdx)("li",{parentName:"ul"},"Special price to")))),(0,o.mdx)("p",null,"They are all related to the time period attributes, and now can be set using staging functionality, when you schedule a new update as:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Special price"),(0,o.mdx)("li",{parentName:"ul"},"Schedule design update"),(0,o.mdx)("li",{parentName:"ul"},"Set product as new")),(0,o.mdx)("h3",{id:"category-staging"},"Category Staging"),(0,o.mdx)("p",null,"The Magento_CatalogStaging module enables you to stage the following category attributes:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Enable/disable Category"),(0,o.mdx)("li",{parentName:"ul"},"Include in Menu"),(0,o.mdx)("li",{parentName:"ul"},"Category Name"),(0,o.mdx)("li",{parentName:"ul"},"Content",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Category Image"),(0,o.mdx)("li",{parentName:"ul"},"Description"),(0,o.mdx)("li",{parentName:"ul"},"CMS Blocks"))),(0,o.mdx)("li",{parentName:"ul"},"Display Settings",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Display Mode"),(0,o.mdx)("li",{parentName:"ul"},"Anchor"),(0,o.mdx)("li",{parentName:"ul"},"Product Sorting"),(0,o.mdx)("li",{parentName:"ul"},"Layered Navigation Price Step"))),(0,o.mdx)("li",{parentName:"ul"},"Search Engine Optimization",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Meta Title"),(0,o.mdx)("li",{parentName:"ul"},"Meta Keywords"),(0,o.mdx)("li",{parentName:"ul"},"Meta Description"))),(0,o.mdx)("li",{parentName:"ul"},"Design",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Layout"),(0,o.mdx)("li",{parentName:"ul"},"Layout Update XML"),(0,o.mdx)("li",{parentName:"ul"},"New Theme")))),(0,o.mdx)("p",null,"The following category attributes cannot be staged:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Assignment of Products to a Category"),(0,o.mdx)("li",{parentName:"ul"},"URL")),(0,o.mdx)("h3",{id:"product-staging"},"Product Staging"),(0,o.mdx)("p",null,"The Magento_CatalogStaging module enables you to stage the following product attributes:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Attribute Set"),(0,o.mdx)("li",{parentName:"ul"},"Product Name"),(0,o.mdx)("li",{parentName:"ul"},"Price"),(0,o.mdx)("li",{parentName:"ul"},"Weight attributes"),(0,o.mdx)("li",{parentName:"ul"},"Visibility"),(0,o.mdx)("li",{parentName:"ul"},"New(flag)"),(0,o.mdx)("li",{parentName:"ul"},"Country of Manufacture"),(0,o.mdx)("li",{parentName:"ul"},"Description"),(0,o.mdx)("li",{parentName:"ul"},"Websites(assignment)"),(0,o.mdx)("li",{parentName:"ul"},"Design",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Layout"),(0,o.mdx)("li",{parentName:"ul"},"Display Product Options In"),(0,o.mdx)("li",{parentName:"ul"},"Layout Update XML"))),(0,o.mdx)("li",{parentName:"ul"},"Related Products, Up-Sells, and Cross-Sells")),(0,o.mdx)("p",null,"Also, you can stage any other attribute added in Admin."),(0,o.mdx)("p",null,"The following product attributes cannot be staged:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Quantity"),(0,o.mdx)("li",{parentName:"ul"},"URL Key"),(0,o.mdx)("li",{parentName:"ul"},"SKU")),(0,o.mdx)("h3",{id:"installation-details"},"Installation Details"),(0,o.mdx)("p",null,"The Magento_CatalogStaging module makes irreversible changes in a database during installation. It means, that you cannot uninstall this module."),(0,o.mdx)("h2",{id:"dependencies"},"Dependencies"),(0,o.mdx)("p",null,"You can find the list of modules that have dependencies with the Magento_CatalogStaging module in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"require")," object of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"composer.json")," file. The file is located in the same directory as this ",(0,o.mdx)("inlineCode",{parentName:"p"},"README")," file."),(0,o.mdx)("h2",{id:"extension-points"},"Extension Points"),(0,o.mdx)("p",null,"Extension points enable extension developers to interact with the Magento_CatalogStaging module. You can interact with the Magento_CatalogStaging module using the Magento extension mechanism, see ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/plugins/"},"Magento plug-ins"),"."),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/dependency-injection/"},"Magento dependency injection mechanism")," enables you to override the functionality of the Magento_CatalogStaging module."),(0,o.mdx)("h3",{id:"ui-components"},"UI components"),(0,o.mdx)("p",null,"You can extend product and category updates using the UI components located in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento\\CatalogStaging\\view\\adminhtml\\ui_component")," directory. For more information, see ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/ui-components/components/listing-grid/"},"UI Listing/Grid Component"),"."),(0,o.mdx)("h3",{id:"layouts"},"Layouts"),(0,o.mdx)("p",null,"You can extend and override layouts in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento\\CatalogStaging\\view\\adminhtml\\layout")," directory.\nFor more information about layouts, see the ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/guide/layouts/"},"Layout documentation"),"."),(0,o.mdx)("h3",{id:"events"},"Events"),(0,o.mdx)("p",null,"You can use the following events:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"catalog_category_prepare_save")," event in the ",(0,o.mdx)("inlineCode",{parentName:"li"},"\\Magento\\CatalogStaging\\Model\\Category\\Hydrator::hydrate()")," method. Parameters:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"category")," is a category to be saved (",(0,o.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Catalog\\Model\\Category")," class)."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"request")," is a request object with the ",(0,o.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Framework\\App\\RequestInterface")," interface."))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"controller_action_catalog_product_save_entity_after")," event in the ",(0,o.mdx)("inlineCode",{parentName:"li"},"\\Magento\\CatalogStaging\\Model\\Product\\Hydrator::hydrate()")," method. Parameters:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"controller")," is a hydrator object (",(0,o.mdx)("inlineCode",{parentName:"li"},"\\Magento\\CatalogStaging\\Model\\Product\\Hydrator"),")."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"product")," is a product object (",(0,o.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Catalog\\Model\\Product")," class.")))),(0,o.mdx)("h2",{id:"additional-information"},"Additional information"),(0,o.mdx)("p",null,"For more Magento 2 developer documentation, see ",(0,o.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com"},"Magento 2 Developer Documentation"),"."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-module-reference-beta-module-catalog-staging-md-8444fafc562913e69fb1.js.map