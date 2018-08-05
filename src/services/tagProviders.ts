/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import {getHTML5TagProvider, getAngularTagProvider, getIonic4TagProvider, IHTMLTagProvider} from '../parser/htmlTags';
import {getRazorTagProvider} from '../parser/razorTags';

export let allTagProviders : IHTMLTagProvider[] = [
	getHTML5TagProvider(),
	getAngularTagProvider(),
	getIonic4TagProvider(),
	getRazorTagProvider()
];