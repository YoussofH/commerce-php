"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[33219],{60025:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return p},default:function(){return i}});var t=n(87462),l=n(63366),c=(n(15007),n(64983)),r=n(91515),m=["components"],p={},d={_frontmatter:p},o=r.Z;function i(e){var a=e.components,n=(0,l.Z)(e,m);return(0,c.mdx)(o,(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,c.mdx)("p",null,"A ",(0,c.mdx)("em",{parentName:"p"},"cache type")," enables you to specify what is cached and enables merchants to clear that cache type using the Cache Management page in the Admin."),(0,c.mdx)("p",null,"The tag ",(0,c.mdx)("em",{parentName:"p"},"scope")," provides a mechanism for a cache type."),(0,c.mdx)("h2",{id:"cache-type-configuration"},"Cache type configuration"),(0,c.mdx)("p",null,"Declare a new cache type in the ",(0,c.mdx)("inlineCode",{parentName:"p"},"<module_dir>/etc/cache.xml")," file with the following attributes:"),(0,c.mdx)("table",null,(0,c.mdx)("thead",{parentName:"table"},(0,c.mdx)("tr",{parentName:"thead"},(0,c.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,c.mdx)("th",{parentName:"tr",align:null},"Required?"),(0,c.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,c.mdx)("tbody",{parentName:"table"},(0,c.mdx)("tr",{parentName:"tbody"},(0,c.mdx)("td",{parentName:"tr",align:null},(0,c.mdx)("inlineCode",{parentName:"td"},"name")),(0,c.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,c.mdx)("td",{parentName:"tr",align:null},"A unique cache type ID")),(0,c.mdx)("tr",{parentName:"tbody"},(0,c.mdx)("td",{parentName:"tr",align:null},(0,c.mdx)("inlineCode",{parentName:"td"},"translate")),(0,c.mdx)("td",{parentName:"tr",align:null},"No"),(0,c.mdx)("td",{parentName:"tr",align:null},'Parameters that will be translated on the "Cache Management" page')),(0,c.mdx)("tr",{parentName:"tbody"},(0,c.mdx)("td",{parentName:"tr",align:null},(0,c.mdx)("inlineCode",{parentName:"td"},"instance")),(0,c.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,c.mdx)("td",{parentName:"tr",align:null},"The cache type model class")))),(0,c.mdx)("p",null,"Also, cache type configuration have the following required parameters:"),(0,c.mdx)("table",null,(0,c.mdx)("thead",{parentName:"table"},(0,c.mdx)("tr",{parentName:"thead"},(0,c.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,c.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,c.mdx)("tbody",{parentName:"table"},(0,c.mdx)("tr",{parentName:"tbody"},(0,c.mdx)("td",{parentName:"tr",align:null},(0,c.mdx)("inlineCode",{parentName:"td"},"label")),(0,c.mdx)("td",{parentName:"tr",align:null},'The "Cache Type" field to be displayed on the ',(0,c.mdx)("inlineCode",{parentName:"td"},"System")," > ",(0,c.mdx)("inlineCode",{parentName:"td"},"Tools")," > ",(0,c.mdx)("inlineCode",{parentName:"td"},"Cache Management")," page.")),(0,c.mdx)("tr",{parentName:"tbody"},(0,c.mdx)("td",{parentName:"tr",align:null},(0,c.mdx)("inlineCode",{parentName:"td"},"description")),(0,c.mdx)("td",{parentName:"tr",align:null},'The "Description" field to be displayed on the ',(0,c.mdx)("inlineCode",{parentName:"td"},"System")," > ",(0,c.mdx)("inlineCode",{parentName:"td"},"Tools")," > ",(0,c.mdx)("inlineCode",{parentName:"td"},"Cache Management")," page.")))),(0,c.mdx)("p",null,"For example:"),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Cache/etc/cache.xsd">\n    <type name="%cache_type_id%" translate="label,description" instance="VendorName\\ModuleName\\Model\\Cache\\Type\\CacheType">\n        <label>Cache Type Label</label>\n        <description>Cache Type Description</description>\n    </type>\n</config>\n')),(0,c.mdx)("p",null,"You may declare multiple cache types."),(0,c.mdx)("h2",{id:"cache-type-model"},"Cache type model"),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace VendorName\\ModuleName\\Model\\Cache\\Type;\n\nuse Magento\\Framework\\App\\Cache\\Type\\FrontendPool;\nuse Magento\\Framework\\Cache\\Frontend\\Decorator\\TagScope;\n\n/**\n * System / Cache Management / Cache type \"Your Cache Type Label\"\n */\nclass CacheType extends TagScope\n{\n    /**\n     * Cache type code unique among all cache types\n     */\n    const TYPE_IDENTIFIER = '%cache_type_id%';\n\n    /**\n     * The tag name that limits the cache cleaning scope within a particular tag\n     */\n    const CACHE_TAG = '%CACHE_TYPE_TAG%';\n\n    /**\n     * @param FrontendPool $cacheFrontendPool\n     */\n    public function __construct(FrontendPool $cacheFrontendPool)\n    {\n        parent::__construct(\n            $cacheFrontendPool->get(self::TYPE_IDENTIFIER),\n            self::CACHE_TAG\n        );\n    }\n}\n")),(0,c.mdx)("p",null,"You must specify the following parameters:"),(0,c.mdx)("ul",null,(0,c.mdx)("li",{parentName:"ul"},(0,c.mdx)("inlineCode",{parentName:"li"},"VendorName\\ModuleName")," defines the name of a module that uses a cache type. A module can use several cache types and a cache type can be used in several modules."),(0,c.mdx)("li",{parentName:"ul"},(0,c.mdx)("inlineCode",{parentName:"li"},"%cache_type_id%")," defines the unique identifier of a cache type."),(0,c.mdx)("li",{parentName:"ul"},(0,c.mdx)("inlineCode",{parentName:"li"},"%CACHE_TYPE_TAG%")," defines the unique tag to be used in the cache type scoping.")),(0,c.mdx)("h2",{id:"store-data-in-a-custom-cache-type"},"Store data in a custom cache type"),(0,c.mdx)("p",null,"To store serialized data in a custom cache, follow these steps:"),(0,c.mdx)("ol",null,(0,c.mdx)("li",{parentName:"ol"},(0,c.mdx)("p",{parentName:"li"},"Pass the argument to the constructor ",(0,c.mdx)("inlineCode",{parentName:"p"},"Magento\\Framework\\App\\CacheInterface")," ",(0,c.mdx)("inlineCode",{parentName:"p"},"$cache")," of a required class (Repository, Model, Block, etc)."),(0,c.mdx)("pre",{parentName:"li"},(0,c.mdx)("code",{parentName:"pre",className:"language-php"},"/**\n * @param CacheInterface $cache\n * @param SerializerInterface $serializer\n */\npublic function __construct(CacheInterface $cache, SerializerInterface $serializer)\n{\n    $this->cache = $cache;\n    $this->serializer = $serializer;\n}\n"))),(0,c.mdx)("li",{parentName:"ol"},(0,c.mdx)("p",{parentName:"li"},"Store data in the cache."),(0,c.mdx)("pre",{parentName:"li"},(0,c.mdx)("code",{parentName:"pre",className:"language-php"},"$cacheKey  = \\VendorName\\ModuleName\\Model\\Cache\\Type\\CacheType::TYPE_IDENTIFIER;\n$cacheTag  = \\VendorName\\ModuleName\\Model\\Cache\\Type\\CacheType::CACHE_TAG;\n\n$storeData = $this->cache->save(\n    $this->serializer->serialize($cacheData),\n    $cacheKey,\n    [$cacheTag],\n    86400\n);\n")))),(0,c.mdx)("h2",{id:"retrieve-data-from-custom-cache-type"},"Retrieve data from custom cache type"),(0,c.mdx)("p",null,"Retrieve data from the cache with:"),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-php"},"$cacheKey  = \\VendorName\\ModuleName\\Model\\Cache\\Type\\CacheType::TYPE_IDENTIFIER;\n\n$data = $this->serializer->unserialize($this->cache->load($cacheKey));\n")),(0,c.mdx)("h2",{id:"invalidate-custom-cache-type"},"Invalidate custom cache type"),(0,c.mdx)("p",null,"To invalidate a custom cache type, follow these steps:"),(0,c.mdx)("ol",null,(0,c.mdx)("li",{parentName:"ol"},(0,c.mdx)("p",{parentName:"li"},"Pass the argument to the constructor ",(0,c.mdx)("inlineCode",{parentName:"p"},"Magento\\Framework\\App\\Cache\\TypeListInterface")," ",(0,c.mdx)("inlineCode",{parentName:"p"},"$typeList")," of a required class (Repository, Model, Block, etc)."),(0,c.mdx)("pre",{parentName:"li"},(0,c.mdx)("code",{parentName:"pre",className:"language-php"},"/**\n * @param TypeListInterface $typeList\n */\npublic function __construct(TypeListInterface $typeList)\n{\n    $this->typeList = $typeList;\n}\n"))),(0,c.mdx)("li",{parentName:"ol"},(0,c.mdx)("p",{parentName:"li"},"Invalidate the cache."),(0,c.mdx)("pre",{parentName:"li"},(0,c.mdx)("code",{parentName:"pre",className:"language-php"},"$cacheKey  = \\VendorName\\ModuleName\\Model\\Cache\\Type\\CacheType::TYPE_IDENTIFIER;\n\n$this->typeList->invalidate($cacheKey);\n")))),(0,c.mdx)("h2",{id:"flush-custom-cache-type"},"Flush custom cache type"),(0,c.mdx)("p",null,"The custom cache type can be flushed in the following ways:"),(0,c.mdx)("ul",null,(0,c.mdx)("li",{parentName:"ul"},"Go to System -> Cache Management and flush the custom cache type"),(0,c.mdx)("li",{parentName:"ul"},"Programmatically, using the TypeList.")),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-php"},"$cacheKey  = \\VendorName\\ModuleName\\Model\\Cache\\Type\\CacheType::TYPE_IDENTIFIER;\n\n$this->typeList->cleanType($cacheKey);\n")),(0,c.mdx)("h2",{id:"examples"},"Examples"),(0,c.mdx)("p",null,"A cache type ",(0,c.mdx)("inlineCode",{parentName:"p"},"translate")," is declared in the Magento_Translation module using the ",(0,c.mdx)("inlineCode",{parentName:"p"},"cache.xml")," configuration file."),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Cache/etc/cache.xsd">\n    <type name="translate" translate="label,description" instance="Magento\\Framework\\App\\Cache\\Type\\Translate">\n        <label>Translations</label>\n        <description>Translation files</description>\n    </type>\n</config>\n')),(0,c.mdx)("p",null,"Translate cache type model class is defined in ",(0,c.mdx)("inlineCode",{parentName:"p"},"Magento\\Framework\\App\\Cache\\Type\\Translate.php")," class. It must extend the ",(0,c.mdx)("inlineCode",{parentName:"p"},"Magento\\Framework\\Cache\\Frontend\\Decorator\\TagScope")," class."),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace Magento\\Framework\\App\\Cache\\Type;\n\nuse Magento\\Framework\\Cache\\Frontend\\Decorator\\TagScope;\n\n/**\n * System / Cache Management / Cache type \"Translations\"\n */\nclass Translate extends TagScope\n{\n    /**\n     * Cache type code unique among all cache types\n     */\n    const TYPE_IDENTIFIER = 'translate';\n\n    /**\n     * Cache tag used to distinguish the cache type from all other caches\n     */\n    const CACHE_TAG = 'TRANSLATE';\n\n    /**\n     * @param FrontendPool $cacheFrontendPool\n     */\n    public function __construct(FrontendPool $cacheFrontendPool)\n    {\n        parent::__construct($cacheFrontendPool->get(self::TYPE_IDENTIFIER), self::CACHE_TAG);\n    }\n}\n")))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-cache-partial-cache-type-md-c27eddda49fb6ae59542.js.map