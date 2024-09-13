"use strict";(self.webpackChunkmy_strapi_project=self.webpackChunkmy_strapi_project||[]).push([[6081],{38371:($e,te,c)=>{c.d(te,{A:()=>_e});var f=c(68093),v=c.n(f),M=c(87438),x=c.n(M),ve=c(42693),m=c.n(ve),ye=new URL(c(48242),c.b),xe=new URL(c(53691),c.b),Ce=new URL(c(42248),c.b),Se=new URL(c(24225),c.b),T=new URL(c(70911),c.b),Ee=new URL(c(97083),c.b),ze=new URL(c(90923),c.b),$=new URL(c(88436),c.b),re=new URL(c(81309),c.b),ie=new URL(c(15228),c.b),B=new URL(c(34084),c.b),Ae=new URL(c(43524),c.b),Be=new URL(c(87757),c.b),Le=new URL(c(7310),c.b),We=new URL(c(15599),c.b),Ge=new URL(c(98256),c.b),Ie=new URL(c(36921),c.b),Ne=new URL(c(37074),c.b),Xe=new URL(c(73490),c.b),z=new URL(c(29282),c.b),Me=new URL(c(83206),c.b),Z=new URL(c(63772),c.b),W=new URL(c(41510),c.b),Fe=new URL(c(16291),c.b),Ke=new URL(c(94656),c.b),ce=new URL(c(69767),c.b),ne=x()(v()),U=m()(ye),Re=m()(xe),ae=m()(Ce),He=m()(Se),Te=m()(T),le=m()(Ee),G=m()(ze),J=m()($),se=m()(re),de=m()(ie),De=m()(B),ke=m()(Ae),pe=m()(Be),A=m()(Le),Q=m()(We),q=m()(Ge),ee=m()(Ie),ge=m()(Ne),ue=m()(Xe),he=m()(z),O=m()(Me),be=m()(Z),X=m()(W),Oe=m()(Fe),me=m()(Ke),oe=m()(ce);ne.push([$e.id,`/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Reset */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Dialog -------------------------------------------------------------------------------- */

	--ck-color-dialog-background: 								var(--ck-custom-background);
	--ck-color-dialog-form-header-border: 						var(--ck-custom-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%);

	/* -- Generic colors ------------------------------------------------------------------------- */

	--ck-color-light-red:										hsl(0, 100%, 90%);
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}
/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;

	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}
/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}
.ck-reset_all .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}
.ck-reset_all iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}
.ck-reset_all textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}
.ck-reset_all textarea:not(.ck-reset_all-excluded *),
	.ck-reset_all input[type="text"]:not(.ck-reset_all-excluded *),
	.ck-reset_all input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}
.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *),
	.ck-reset_all input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	.ck-reset_all input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}
.ck-reset_all fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}
.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}

/* Components */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A helper to combine multiple shadows.
 */
/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
.ck.ck-autocomplete > .ck-search__results {
		border-radius: 0;
	}
.ck-rounded-corners .ck.ck-autocomplete > .ck-search__results, .ck.ck-autocomplete > .ck-search__results.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
	}
.ck.ck-autocomplete > .ck-search__results {
		box-shadow: var(--ck-drop-shadow), 0 0;

		max-height: 200px;
		overflow-y: auto;
		background: var(--ck-color-base-background);
		border: 1px solid var(--ck-color-dropdown-panel-border);
		min-width: auto;
	}
.ck.ck-autocomplete > .ck-search__results.ck-search__results_n {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-bottom: -1px;
		}
.ck.ck-autocomplete > .ck-search__results.ck-search__results_s {
			border-top-left-radius: 0;
			border-top-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-top: -1px;
		}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A visual style of focused element's border.
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A helper to combine multiple shadows.
 */
/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A class which indicates that an element holding it is disabled.
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
.ck.ck-button,
a.ck.ck-button {
	background: var(--ck-color-button-default-background);
	border-radius: 0;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;
}
.ck.ck-button:not(.ck-disabled):hover, a.ck.ck-button:not(.ck-disabled):hover {
			background: var(--ck-color-button-default-hover-background);
		}
.ck.ck-button:not(.ck-disabled):active, a.ck.ck-button:not(.ck-disabled):active {
			background: var(--ck-color-button-default-active-background);
		}
/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
.ck.ck-button.ck-disabled, a.ck.ck-button.ck-disabled {
		background: var(--ck-color-button-default-disabled-background);
	}
.ck-rounded-corners .ck.ck-button,
.ck-rounded-corners a.ck.ck-button,
.ck.ck-button.ck-rounded-corners,
a.ck.ck-button.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
}
@media (prefers-reduced-motion: reduce) {
.ck.ck-button,
a.ck.ck-button {
		transition: none;
}
	}
.ck.ck-button:active,
	a.ck.ck-button:active,
	.ck.ck-button:focus,
	a.ck.ck-button:focus {
		/* Disable native outline. */
		outline: none;
		border: var(--ck-focus-ring);
		box-shadow: var(--ck-focus-outer-shadow), 0 0;
	}
/* Allow icon coloring using the text "color" property. */
.ck.ck-button .ck-button__icon use,
		a.ck.ck-button .ck-button__icon use,
		.ck.ck-button .ck-button__icon use *,
		a.ck.ck-button .ck-button__icon use * {
			color: inherit;
		}
.ck.ck-button .ck-button__label, a.ck.ck-button .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;
	}
[dir="ltr"] .ck.ck-button .ck-button__label, [dir="ltr"] a.ck.ck-button .ck-button__label {
			text-align: left;
	}
[dir="rtl"] .ck.ck-button .ck-button__label, [dir="rtl"] a.ck.ck-button .ck-button__label {
			text-align: right;
	}
.ck.ck-button .ck-button__keystroke, a.ck.ck-button .ck-button__keystroke {
		color: inherit;
	}
[dir="ltr"] .ck.ck-button .ck-button__keystroke, [dir="ltr"] a.ck.ck-button .ck-button__keystroke {
			margin-left: var(--ck-spacing-large);
	}
[dir="rtl"] .ck.ck-button .ck-button__keystroke, [dir="rtl"] a.ck.ck-button .ck-button__keystroke {
			margin-right: var(--ck-spacing-large);
	}
.ck.ck-button .ck-button__keystroke, a.ck.ck-button .ck-button__keystroke {

		opacity: .5;
	}
/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
.ck.ck-button.ck-disabled:active,
		a.ck.ck-button.ck-disabled:active,
		.ck.ck-button.ck-disabled:focus,
		a.ck.ck-button.ck-disabled:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			box-shadow: var(--ck-focus-disabled-outer-shadow), 0 0;
		}
.ck.ck-button.ck-disabled .ck-button__icon, a.ck.ck-button.ck-disabled .ck-button__icon {
			opacity: var(--ck-disabled-opacity);
		}
/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
.ck.ck-button.ck-disabled .ck-button__label, a.ck.ck-button.ck-disabled .ck-button__label {
			opacity: var(--ck-disabled-opacity);
		}
.ck.ck-button.ck-disabled .ck-button__keystroke, a.ck.ck-button.ck-disabled .ck-button__keystroke {
			opacity: .3;
		}
.ck.ck-button.ck-button_with-text, a.ck.ck-button.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
	}
[dir="ltr"] .ck.ck-button.ck-button_with-text .ck-button__icon, [dir="ltr"] a.ck.ck-button.ck-button_with-text .ck-button__icon {
				margin-right: var(--ck-spacing-medium);
		}
[dir="rtl"] .ck.ck-button.ck-button_with-text .ck-button__icon, [dir="rtl"] a.ck.ck-button.ck-button_with-text .ck-button__icon {
				margin-left: var(--ck-spacing-medium);
		}
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-button.ck-button_with-keystroke .ck-button__label, a.ck.ck-button.ck-button_with-keystroke .ck-button__label {
			flex-grow: 1;
		}
/* A style of the button which is currently on, e.g. its feature is active. */
.ck.ck-button.ck-on, a.ck.ck-button.ck-on {
		background: var(--ck-color-button-on-background);

		color: var(--ck-color-button-on-color);
	}
.ck.ck-button.ck-on:not(.ck-disabled):hover, a.ck.ck-button.ck-on:not(.ck-disabled):hover {
			background: var(--ck-color-button-on-hover-background);
		}
.ck.ck-button.ck-on:not(.ck-disabled):active, a.ck.ck-button.ck-on:not(.ck-disabled):active {
			background: var(--ck-color-button-on-active-background);
		}
/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
.ck.ck-button.ck-on.ck-disabled, a.ck.ck-button.ck-on.ck-disabled {
		background: var(--ck-color-button-on-disabled-background);
	}
.ck.ck-button.ck-button-save, a.ck.ck-button.ck-button-save {
		color: var(--ck-color-button-save);
	}
.ck.ck-button.ck-button-cancel, a.ck.ck-button.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	background: var(--ck-color-button-action-background);

	color: var(--ck-color-button-action-text);
}
.ck.ck-button-action:not(.ck-disabled):hover, a.ck.ck-button-action:not(.ck-disabled):hover {
			background: var(--ck-color-button-action-hover-background);
		}
.ck.ck-button-action:not(.ck-disabled):active, a.ck.ck-button-action:not(.ck-disabled):active {
			background: var(--ck-color-button-action-active-background);
		}
/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
.ck.ck-button-action.ck-disabled, a.ck.ck-button-action.ck-disabled {
		background: var(--ck-color-button-action-disabled-background);
	}
.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A class which indicates that an element holding it is disabled.
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating\u2013point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}
/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
.ck.ck-button.ck-switchbutton, .ck.ck-button.ck-switchbutton:hover, .ck.ck-button.ck-switchbutton:focus, .ck.ck-button.ck-switchbutton:active, .ck.ck-button.ck-switchbutton.ck-on:hover, .ck.ck-button.ck-switchbutton.ck-on:focus, .ck.ck-button.ck-switchbutton.ck-on:active {
		color: inherit;
		background: transparent;
	}
[dir="ltr"] .ck.ck-button.ck-switchbutton .ck-button__label {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
	}
[dir="rtl"] .ck.ck-button.ck-switchbutton .ck-button__label {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
	}
.ck.ck-button.ck-switchbutton .ck-button__toggle {
		border-radius: 0;
	}
.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle, .ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
	}
[dir="ltr"] .ck.ck-button.ck-switchbutton .ck-button__toggle {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
	}
[dir="rtl"] .ck.ck-button.ck-switchbutton .ck-button__toggle {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
	}
.ck.ck-button.ck-switchbutton .ck-button__toggle {

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);
	}
.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner {
			border-radius: 0;
		}
.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner, .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
				border-radius: calc(.5 * var(--ck-border-radius));
		}
.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner {

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}
@media (prefers-reduced-motion: reduce) {
.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner {
				transition: none;
		}
			}
.ck.ck-button.ck-switchbutton .ck-button__toggle:hover {
			background: var(--ck-color-switch-button-off-hover-background);
		}
.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle {
		opacity: var(--ck-disabled-opacity);
	}
/* Overriding default .ck-button:focus styles + an outline around the toogle */
.ck.ck-button.ck-switchbutton:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;
	}
.ck.ck-button.ck-switchbutton:focus .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);
		}
.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}
/*
				* Move the toggle switch to the right. It will be animated.
				*/
[dir="ltr"] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner {
					transform: translateX( var( --ck-switch-button-translation ) );
			}
[dir="rtl"] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
			}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
.ck.ck-button.ck-list-item-button {
	padding: var(--ck-spacing-tiny) calc(2 * var(--ck-spacing-standard));
}
.ck.ck-button.ck-list-item-button,
	.ck.ck-button.ck-list-item-button.ck-on {
		background: var(--ck-color-list-background);
		color: var(--ck-color-text);
	}
[dir="ltr"] .ck.ck-button.ck-list-item-button:has(.ck-list-item-button__check-holder) {
			padding-left: var(--ck-spacing-small);
	}
[dir="rtl"] .ck.ck-button.ck-list-item-button:has(.ck-list-item-button__check-holder) {
			padding-right: var(--ck-spacing-small);
	}
/*
	 * \`.ck-on\` class and background styling is overridden for \`ck-button\` in many places.
	 * This is a workaround to make sure that the background is not overridden and uses similar
	 * selector specificity as the other overrides.
	 */
.ck.ck-button.ck-list-item-button:hover:not(.ck-disabled),
	.ck.ck-button.ck-list-item-button.ck-button.ck-on:hover,
	.ck.ck-button.ck-list-item-button.ck-on:not(.ck-list-item-button_toggleable),
	.ck.ck-button.ck-list-item-button.ck-on:hover {
		background: var(--ck-color-list-button-hover-background);
	}
.ck.ck-button.ck-list-item-button:hover:not(.ck-disabled):not(.ck-disabled), .ck.ck-button.ck-list-item-button.ck-button.ck-on:hover:not(.ck-disabled), .ck.ck-button.ck-list-item-button.ck-on:not(.ck-list-item-button_toggleable):not(.ck-disabled), .ck.ck-button.ck-list-item-button.ck-on:hover:not(.ck-disabled) {
			color: var(--ck-color-text);
		}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}
.ck.ck-collapsible > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		border-radius: 0;
		color: inherit;
	}
.ck.ck-collapsible > .ck.ck-button:focus {
			background: transparent;
		}
.ck.ck-collapsible > .ck.ck-button:active, .ck.ck-collapsible > .ck.ck-button:not(:focus), .ck.ck-collapsible > .ck.ck-button:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}
.ck.ck-collapsible > .ck.ck-button > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
.ck.ck-collapsible > .ck-collapsible__children {
		padding: var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large);
	}
.ck.ck-collapsible.ck-collapsible_collapsed > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}
.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}
.ck.ck-color-grid__tile {
	transition: .2s ease box-shadow;
}
@media (forced-colors: none) {
		.ck.ck-color-grid__tile {
		width: var(--ck-color-grid-tile-size);
		height: var(--ck-color-grid-tile-size);
		min-width: var(--ck-color-grid-tile-size);
		min-height: var(--ck-color-grid-tile-size);
		padding: 0;
		border: 0;
		}

		.ck.ck-color-grid__tile.ck-on,
		.ck.ck-color-grid__tile:focus:not( .ck-disabled ),
		.ck.ck-color-grid__tile:hover:not( .ck-disabled ) {
			/* Disable the default .ck-button's border ring. */
			border: 0;
		}

		.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered {
			box-shadow: 0 0 0 1px var(--ck-color-base-border);
		}

		.ck.ck-color-grid__tile.ck-on {
			box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);
		}

		.ck.ck-color-grid__tile:focus:not( .ck-disabled ),
		.ck.ck-color-grid__tile:hover:not( .ck-disabled ) {
			box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
		}
	}
/*
	 * In high contrast mode, the colors are replaced with text labels.
	 * See https://github.com/ckeditor/ckeditor5/issues/14907.
	 */
@media (forced-colors: active) {
		.ck.ck-color-grid__tile {
		width: unset;
		height: unset;
		min-width: unset;
		min-height: unset;
		padding: 0 var(--ck-spacing-small);
		}

		.ck.ck-color-grid__tile .ck-button__label {
			display: inline-block;
		}
	}
@media (prefers-reduced-motion: reduce) {
.ck.ck-color-grid__tile {
		transition: none;
}
	}
.ck.ck-color-grid__tile.ck-disabled {
		cursor: unset;
		transition: unset;
	}
.ck.ck-color-grid__tile .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}
.ck.ck-color-grid__tile.ck-on .ck.ck-icon {
			display: block;
		}
.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/* View fragment with color grids. */
.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color,
		.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker {
			width: 100%;
		}
.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker {
			padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}
.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}
[dir="ltr"] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon {
					margin-right: var(--ck-spacing-standard);
			}
[dir="rtl"] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon {
					margin-left: var(--ck-spacing-standard);
			}
.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label {
			font-weight: unset;
		}
/* View fragment with a color picker. */
.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker {
			padding: 8px;
		}
.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker {
				height: 100px;
				min-width: 180px;
			}
.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation) {
					border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;
				}
.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue) {
					border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
				}
.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer),
				.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer) {
					width: 15px;
					height: 15px;
				}
.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar {
			padding: 0 8px 8px;
		}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A helper to combine multiple shadows.
 */
/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-dialog-overlay-background-color: hsla( 0, 0%, 0%, .5 );
	--ck-dialog-drop-shadow: 0px 0px 6px 2px hsl(0deg 0% 0% / 15%);
	--ck-dialog-max-width: 100vw;
	--ck-dialog-max-height: 90vh;
	--ck-color-dialog-background: var(--ck-color-base-background);
	--ck-color-dialog-form-header-border: var(--ck-color-base-border);
}
.ck.ck-dialog-overlay {
	animation: ck-dialog-fade-in .3s;
	background: var(--ck-dialog-overlay-background-color);
	z-index: var(--ck-z-dialog);
}
.ck.ck-dialog {
	border-radius: 0;
}
.ck-rounded-corners .ck.ck-dialog, .ck.ck-dialog.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
}
.ck.ck-dialog {
	box-shadow: var(--ck-drop-shadow), 0 0;

	--ck-drop-shadow: var(--ck-dialog-drop-shadow);

	background: var(--ck-color-dialog-background);
	max-height: var(--ck-dialog-max-height);
	max-width: var(--ck-dialog-max-width);
	border: 1px solid var(--ck-color-base-border);
}
.ck.ck-dialog .ck.ck-form__header {
		border-bottom: 1px solid var(--ck-color-dialog-form-header-border);
	}
@keyframes ck-dialog-fade-in {
	0% {
		background: hsla( 0, 0%, 0%, 0 );
	}

	100% {
		background: var(--ck-dialog-overlay-background-color);
	}
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
.ck.ck-dialog .ck.ck-dialog__actions {
		padding: var(--ck-spacing-large);
	}
.ck.ck-dialog .ck.ck-dialog__actions > * + * {
			margin-left: var(--ck-spacing-large);
		}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A class which indicates that an element holding it is disabled.
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A helper to combine multiple shadows.
 */
/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}
.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;
}
.ck.ck-dropdown .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}
[dir="ltr"] .ck.ck-dropdown .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
[dir="rtl"] .ck.ck-dropdown .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow {
		opacity: var(--ck-disabled-opacity);
	}
[dir="ltr"] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
[dir="rtl"] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
/* #23 */
.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}
/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label {
			opacity: var(--ck-disabled-opacity);
		}
/* https://github.com/ckeditor/ckeditor5/issues/816 */
.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}
.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}
/* https://github.com/ckeditor/ckeditor5/issues/8699 */
.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,
		.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active {
			box-shadow: none;
		}
.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus, .ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus {
				box-shadow: var(--ck-focus-outer-shadow), 0 0;
			}
.ck.ck-dropdown__panel {
	border-radius: 0;
}
.ck-rounded-corners .ck.ck-dropdown__panel, .ck.ck-dropdown__panel.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
}
.ck.ck-dropdown__panel {
	box-shadow: var(--ck-drop-shadow), 0 0;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
}
.ck.ck-dropdown__panel.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}
.ck.ck-dropdown__panel.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}
.ck.ck-dropdown__panel.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}
.ck.ck-dropdown__panel.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}
.ck.ck-dropdown__panel:focus {
		outline: none;
	}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
.ck.ck-dropdown > .ck-dropdown__panel > .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	border-radius: 0;
}
.ck-rounded-corners .ck.ck-dropdown > .ck-dropdown__panel > .ck-list, .ck.ck-dropdown > .ck-dropdown__panel > .ck-list.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		border-top-left-radius: 0;
}
/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
.ck.ck-dropdown > .ck-dropdown__panel > .ck-list .ck-list__item:first-child > .ck-button {
			border-radius: 0;
		}
.ck-rounded-corners .ck.ck-dropdown > .ck-dropdown__panel > .ck-list .ck-list__item:first-child > .ck-button, .ck.ck-dropdown > .ck-dropdown__panel > .ck-list .ck-list__item:first-child > .ck-button.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
		}
.ck.ck-dropdown > .ck-dropdown__panel > .ck-list .ck-list__item:last-child > .ck-button {
			border-radius: 0;
		}
.ck-rounded-corners .ck.ck-dropdown > .ck-dropdown__panel > .ck-list .ck-list__item:last-child > .ck-button, .ck.ck-dropdown > .ck-dropdown__panel > .ck-list .ck-list__item:last-child > .ck-button.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
				border-top-left-radius: 0;
				border-top-right-radius: 0;
		}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}
/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
[dir="ltr"] .ck.ck-splitbutton:hover > .ck-splitbutton__action,
	[dir="ltr"] .ck.ck-splitbutton.ck-splitbutton_open > .ck-splitbutton__action {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
	}
[dir="rtl"] .ck.ck-splitbutton:hover > .ck-splitbutton__action,
	[dir="rtl"] .ck.ck-splitbutton.ck-splitbutton_open > .ck-splitbutton__action {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
	}
.ck.ck-splitbutton > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;
	}
[dir="ltr"] .ck.ck-splitbutton > .ck-splitbutton__arrow {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
	}
[dir="rtl"] .ck.ck-splitbutton > .ck-splitbutton__arrow {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
	}
.ck.ck-splitbutton > .ck-splitbutton__arrow svg {
			width: var(--ck-dropdown-arrow-size);
		}
/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
.ck.ck-splitbutton > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}
/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
/* When the split button hovered as a whole, not as individual buttons. */
.ck.ck-splitbutton.ck-splitbutton_open > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover), .ck.ck-splitbutton:hover > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}
/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
.ck.ck-splitbutton.ck-splitbutton_open > .ck-splitbutton__arrow:not(.ck-disabled)::after, .ck.ck-splitbutton:hover > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}
/* Make sure the divider between the buttons looks fine when the button is focused */
.ck.ck-splitbutton.ck-splitbutton_open > .ck-splitbutton__arrow:focus::after, .ck.ck-splitbutton:hover > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}
[dir="ltr"] .ck.ck-splitbutton.ck-splitbutton_open > .ck-splitbutton__arrow:not(.ck-disabled)::after, [dir="ltr"] .ck.ck-splitbutton:hover > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
[dir="rtl"] .ck.ck-splitbutton.ck-splitbutton_open > .ck-splitbutton__arrow:not(.ck-disabled)::after, [dir="rtl"] .ck.ck-splitbutton:hover > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
.ck.ck-splitbutton.ck-splitbutton_open {
		border-radius: 0;
	}
.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open, .ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
	}
.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open > .ck-splitbutton__action, .ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}
.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open > .ck-splitbutton__arrow, .ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A class which indicates that an element holding it is disabled.
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * All menu buttons.
 */
.ck.ck-button.ck-dropdown-menu-list__nested-menu__button {
	width: 100%;
	padding: var(--ck-spacing-tiny) calc(2 * var(--ck-spacing-standard));
	border-radius: 0;
}
.ck.ck-button.ck-dropdown-menu-list__nested-menu__button:focus {
		border-color: transparent;
		box-shadow: none;
	}
.ck.ck-button.ck-dropdown-menu-list__nested-menu__button:focus:not(.ck-on) {
			background: var(--ck-color-button-default-hover-background);
		}
.ck.ck-button.ck-dropdown-menu-list__nested-menu__button > .ck-button__label {
		flex-grow: 1;
		overflow: hidden;
		text-overflow: ellipsis;
	}
.ck.ck-button.ck-dropdown-menu-list__nested-menu__button.ck-disabled > .ck-button__label {
		opacity: var(--ck-disabled-opacity);
	}
/* Spacing in buttons that miss the icon. */
.ck.ck-button.ck-dropdown-menu-list__nested-menu__button.ck-icon-spacing:not(:has(.ck-button__icon)) > .ck-button__label {
		margin-left: calc(var(--ck-icon-size) - var(--ck-spacing-small));
	}
.ck.ck-button.ck-dropdown-menu-list__nested-menu__button > .ck-dropdown-menu-list__nested-menu__button__arrow {
		width: var(--ck-dropdown-arrow-size);
	}
[dir="ltr"] .ck.ck-button.ck-dropdown-menu-list__nested-menu__button > .ck-dropdown-menu-list__nested-menu__button__arrow {
			transform: rotate(-90deg);

			/* Nudge the arrow gently to the right because its center of gravity is to the left */
			margin-right: calc(-1 * var(--ck-spacing-small));
	}
[dir="rtl"] .ck.ck-button.ck-dropdown-menu-list__nested-menu__button > .ck-dropdown-menu-list__nested-menu__button__arrow {
			transform: rotate(90deg);

			/* Nudge the arrow gently to the left because its center of gravity is to the right (after rotation). */
			margin-left: calc(-1 * var(--ck-spacing-small));
	}
.ck.ck-button.ck-dropdown-menu-list__nested-menu__button.ck-disabled > .ck-dropdown-menu-list__nested-menu__button__arrow {
		opacity: var(--ck-disabled-opacity);
	}
[dir="ltr"] .ck.ck-button.ck-dropdown-menu-list__nested-menu__button:not(.ck-button_with-text) {
			padding-left: var(--ck-spacing-small);
		}
[dir="ltr"] .ck.ck-button.ck-dropdown-menu-list__nested-menu__button > .ck-dropdown-menu-list__nested-menu__button__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
[dir="rtl"] .ck.ck-button.ck-dropdown-menu-list__nested-menu__button:not(.ck-button_with-text) {
			padding-right: var(--ck-spacing-small);
		}
[dir="rtl"] .ck.ck-button.ck-dropdown-menu-list__nested-menu__button > .ck-dropdown-menu-list__nested-menu__button__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-dropdown-menu-menu-item-min-width: 18em;
}
.ck.ck-dropdown-menu-list__nested-menu__item {
	min-width: var(--ck-dropdown-menu-menu-item-min-width);
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * List item buttons.
 */
.ck-button.ck-dropdown-menu-list__nested-menu__item__button {
	border-radius: 0;
}
.ck-button.ck-dropdown-menu-list__nested-menu__item__button > .ck-spinner-container,
	.ck-button.ck-dropdown-menu-list__nested-menu__item__button > .ck-spinner-container .ck-spinner {
		/* These styles correspond to .ck-icon so that the spinner seamlessly replaces the icon. */
		--ck-toolbar-spinner-size: 20px;
	}
.ck-button.ck-dropdown-menu-list__nested-menu__item__button > .ck-spinner-container {
		/* These margins are the same as for .ck-icon. */
		margin-left: calc(-1 * var(--ck-spacing-small));
		margin-right: var(--ck-spacing-small);
	}
/*
	 * Hovered items automatically get focused. Default focus styles look odd
	 * while moving across a huge list of items so let's get rid of them
	 */
.ck-button.ck-dropdown-menu-list__nested-menu__item__button:focus {
		border-color: transparent;
		box-shadow: none;
	}
.ck-button.ck-dropdown-menu-list__nested-menu__item__button:focus:not(.ck-on) {
			background: var(--ck-color-button-default-hover-background);
		}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A helper to combine multiple shadows.
 */
/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
:root {
	--ck-dropdown-menu-menu-panel-max-width: 75vw;
}
.ck.ck-dropdown-menu__nested-menu__panel {
	box-shadow: var(--ck-drop-shadow), 0 0;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;
	height: fit-content;
	max-width: var(--ck-dropdown-menu-menu-panel-max-width);

	/* Reset balloon styling */
}
.ck.ck-dropdown-menu__nested-menu__panel::after,
	.ck.ck-dropdown-menu__nested-menu__panel::before {
		display: none;
	}
/* Corner border radius consistent with the button. */
.ck.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_es,
	.ck.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_se {
		border-top-left-radius: 0;
	}
.ck.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_ws,
	.ck.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_sw {
		border-top-right-radius: 0;
	}
.ck.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_en,
	.ck.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_ne {
		border-bottom-left-radius: 0;
	}
.ck.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_wn,
	.ck.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_nw {
		border-bottom-right-radius: 0;
	}
.ck.ck-dropdown-menu__nested-menu__panel:focus {
		outline: none;
	}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A visual style of focused element's border.
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A helper to combine multiple shadows.
 */
/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
:root {
	--ck-accessibility-help-dialog-max-width: 600px;
	--ck-accessibility-help-dialog-max-height: 400px;
	--ck-accessibility-help-dialog-border-color: hsl(220, 6%, 81%);
	--ck-accessibility-help-dialog-code-background-color: hsl(0deg 0% 92.94%);
	--ck-accessibility-help-dialog-kbd-shadow-color: hsl(0deg 0% 61%);
}
.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content {
	padding: var(--ck-spacing-large);
	max-width: var(--ck-accessibility-help-dialog-max-width);
	max-height: var(--ck-accessibility-help-dialog-max-height);
	overflow: auto;
	user-select: text;

	border: 1px solid transparent;
}
.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content:focus {
		/* Disable native outline. */
		outline: none;
		border: var(--ck-focus-ring);
		box-shadow: var(--ck-focus-outer-shadow), 0 0;
	}
.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content * {
		white-space: normal;
	}
/* Hide the main label of the content container. */
.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content .ck-label {
		display: none;
	}
.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3 {
		font-weight: bold;
		font-size: 1.2em;
	}
.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4 {
		font-weight: bold;
		font-size: 1em;
	}
.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content p,
	.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3,
	.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4,
	.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content table {
		margin: 1em 0;
	}
.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl {
		display: grid;
		grid-template-columns: 2fr 1fr;
		border-top: 1px solid var(--ck-accessibility-help-dialog-border-color);
		border-bottom: none;
	}
.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt, .ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd {
			border-bottom: 1px solid var(--ck-accessibility-help-dialog-border-color);
			padding: .4em 0;
		}
.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt {
			grid-column-start: 1;
		}
.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd {
			grid-column-start: 2;
			text-align: right;
		}
.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd, .ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code {
		display: inline-block;
		background: var(--ck-accessibility-help-dialog-code-background-color);
		padding: .4em;
		vertical-align: middle;
		line-height: 1;
		border-radius: 2px;
		text-align: center;
		font-size: .9em;
	}
.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code {
		font-family: monospace;
	}
.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd {
		min-width: 1.8em;
		box-shadow: 0px 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);
		margin: 0 1px;
	}
.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd + kbd {
			margin-left: 2px;
		}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A class which indicates that an element holding it is disabled.
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A helper to combine multiple shadows.
 */
/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A visual style of focused element's border.
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}
.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	border-radius: 0;
}
.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable), .ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable) {
		border-radius: var(--ck-border-radius);
}
.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable) {
		/* Disable native outline. */
		outline: none;
		border: var(--ck-focus-ring);
		box-shadow: var(--ck-inner-shadow), 0 0;
	}
.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;
}
.ck.ck-editor__editable_inline[dir="ltr"] {
		text-align: left;
	}
.ck.ck-editor__editable_inline[dir="rtl"] {
		text-align: right;
	}
/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
.ck.ck-editor__editable_inline > *:first-child {
		margin-top: var(--ck-spacing-large);
	}
/* https://github.com/ckeditor/ckeditor5/issues/847 */
.ck.ck-editor__editable_inline > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}
/* https://github.com/ckeditor/ckeditor5/issues/6517 */
.ck.ck-editor__editable_inline.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"]::after {
		border-bottom-color: var(--ck-color-panel-background);
	}
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"]::after {
		border-top-color: var(--ck-color-panel-background);
	}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-form-header-height: 44px;
}
.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);
}
[dir="ltr"] .ck.ck-form__header > .ck-icon {
			margin-right: var(--ck-spacing-medium);
	}
[dir="rtl"] .ck.ck-form__header > .ck-icon {
			margin-left: var(--ck-spacing-medium);
	}
.ck.ck-form__header .ck-form__header__label {
		--ck-font-size-base: 15px;
		font-weight: bold;
	}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
	--ck-icon-font-size: .8333350694em;
}
.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: var(--ck-icon-font-size);

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;
}
.ck.ck-icon * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}
/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
.ck.ck-icon.ck-icon_inherit-color {
		color: inherit;
	}
.ck.ck-icon.ck-icon_inherit-color * {
			color: inherit;
		}
.ck.ck-icon.ck-icon_inherit-color *:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A visual style of focused element's border.
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A helper to combine multiple shadows.
 */
/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}
.ck.ck-input {
	border-radius: 0;
}
.ck-rounded-corners .ck.ck-input, .ck.ck-input.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
}
.ck.ck-input {

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
.ck.ck-input {
		transition: none;
}
	}
.ck.ck-input:focus {
		/* Disable native outline. */
		outline: none;
		border: var(--ck-focus-ring);
		box-shadow: var(--ck-focus-outer-shadow), 0 0;
	}
.ck.ck-input[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);
	}
.ck.ck-input[readonly]:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			box-shadow: var(--ck-focus-disabled-outer-shadow), 0 0;
		}
.ck.ck-input.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;
	}
@media (prefers-reduced-motion: reduce) {
.ck.ck-input.ck-error {
			animation: none;
	}
		}
.ck.ck-input.ck-error:focus {
			box-shadow: var(--ck-focus-error-outer-shadow), 0 0;
		}
@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
.ck.ck-label {
	font-weight: bold;
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}
.ck.ck-labeled-field-view {
	border-radius: 0;
}
.ck-rounded-corners .ck.ck-labeled-field-view, .ck.ck-labeled-field-view.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
}
.ck.ck-labeled-field-view > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;
	}
.ck.ck-labeled-field-view > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			top: 0px;
		}
[dir="ltr"] .ck.ck-labeled-field-view > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
				left: 0px;
				transform-origin: 0 0;
				/* By default, display the label scaled down above the field. */
				transform: translate(var(--ck-spacing-medium), -6px) scale(.75);
		}
[dir="rtl"] .ck.ck-labeled-field-view > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
				right: 0px;
				transform-origin: 100% 0;
				transform: translate(calc(-1 * var(--ck-spacing-medium)), -6px) scale(.75);
		}
.ck.ck-labeled-field-view > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {

			pointer-events: none;

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
@media (prefers-reduced-motion: reduce) {
.ck.ck-labeled-field-view > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
				transition: none;
		}
			}
.ck.ck-labeled-field-view.ck-error > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}
.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
.ck.ck-labeled-field-view .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;
	}
.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
/* Disabled fields and fields that have no focus should fade out. */
.ck.ck-labeled-field-view.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}
/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
/* stylelint-disable-next-line no-descending-specificity */
[dir="ltr"] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	[dir="ltr"] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
	}
[dir="rtl"] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	[dir="rtl"] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
	}
.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}
/*------ DropdownView integration ----------------------------------------------------------------------------------- */
/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
.ck.ck-labeled-field-view > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}
/* When the dropdown is "empty", the labeled field label replaces its label. */
.ck.ck-labeled-field-view.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}
/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
.ck.ck-labeled-input .ck-labeled-input__status {
	font-size: var(--ck-font-size-small);
	margin-top: var(--ck-spacing-small);

	/* Let the info wrap to the next line to avoid stretching the layout horizontally.
	The status could be very long. */
	white-space: normal;
}
.ck.ck-labeled-input .ck-labeled-input__status_error {
	color: var(--ck-color-base-error);
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A class which indicates that an element holding it is disabled.
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A helper to combine multiple shadows.
 */
/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
.ck.ck-list {
	border-radius: 0;
}
.ck-rounded-corners .ck.ck-list, .ck.ck-list.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
}
.ck.ck-list {

	list-style-type: none;
	background: var(--ck-color-list-background);

	/* A spacing at the beginning and end of the list */
	padding: var(--ck-spacing-small) 0;
}
.ck.ck-list__item {
	cursor: default;

	/* Almost as wide as menu bar items. */
	min-width: 15em;
}
.ck.ck-list__item > .ck-button:not(.ck-list-item-button) {
		padding: var(--ck-spacing-tiny) calc(2 * var(--ck-spacing-standard));
		min-height: unset;
		width: 100%;
		border-radius: 0;
	}
[dir="ltr"] .ck.ck-list__item > .ck-button:not(.ck-list-item-button) {
			text-align: left;
	}
[dir="rtl"] .ck.ck-list__item > .ck-button:not(.ck-list-item-button) {
			text-align: right;
	}
.ck.ck-list__item > .ck-button:not(.ck-list-item-button) .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(var(--ck-line-height-base) * var(--ck-font-size-base));
		}
.ck.ck-list__item > .ck-button:not(.ck-list-item-button):active {
			box-shadow: none;
		}
.ck.ck-list__item > .ck-button.ck-on:not(.ck-list-item-button) {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);
		}
.ck.ck-list__item > .ck-button.ck-on:not(.ck-list-item-button):active {
				box-shadow: none;
			}
.ck.ck-list__item > .ck-button.ck-on:not(.ck-list-item-button):hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}
.ck.ck-list__item > .ck-button.ck-on:not(.ck-list-item-button):focus:not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
.ck.ck-list__item > .ck-button:not(.ck-list-item-button):hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
.ck.ck-list__item > .ck-button.ck-switchbutton.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;
		}
.ck.ck-list__item > .ck-button.ck-switchbutton.ck-on:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
.ck-list .ck-list__group {
	padding-top: var(--ck-spacing-medium);

	/* Lists come with an inner vertical padding. Don't duplicate it. */
}
.ck-list .ck-list__group:first-child {
		padding-top: 0;
	}
/* The group should have a border when it's not the first item. */
*:not(.ck-hidden) ~ .ck-list .ck-list__group {
		border-top: 1px solid var(--ck-color-base-border);
	}
.ck-list .ck-list__group > .ck-label {
		font-size: 11px;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-large) 0;
	}
.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);

	/* Give the separator some air */
	margin: var(--ck-spacing-small) 0;
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
.ck.ck-menu-bar {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	background: var(--ck-color-base-background);
	padding: var(--ck-spacing-small);
	gap: var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);
	width: 100%;
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
.ck.ck-menu-bar__menu {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;
}
.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level {
		max-width: 100%;
	}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A class which indicates that an element holding it is disabled.
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
	 * All menu buttons.
	 */
.ck.ck-menu-bar__menu > .ck-menu-bar__menu__button {
		width: 100%;
	}
.ck.ck-menu-bar__menu > .ck-menu-bar__menu__button > .ck-button__label {
			flex-grow: 1;
			overflow: hidden;
			text-overflow: ellipsis;
		}
.ck.ck-menu-bar__menu > .ck-menu-bar__menu__button.ck-disabled > .ck-button__label {
			opacity: var(--ck-disabled-opacity);
		}
[dir="ltr"] .ck.ck-menu-bar__menu > .ck-menu-bar__menu__button:not(.ck-button_with-text) {
				padding-left: var(--ck-spacing-small);
			}
[dir="rtl"] .ck.ck-menu-bar__menu > .ck-menu-bar__menu__button:not(.ck-button_with-text) {
				padding-right: var(--ck-spacing-small);
			}
/*
	 * Top-level menu buttons only.
	 */
.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__button {
		padding: var(--ck-spacing-small) var(--ck-spacing-medium);
		min-height: unset;
	}
.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__button .ck-button__label {
			width: unset;
			line-height: unset;
		}
.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__button.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}
.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__button .ck-icon {
			display: none;
		}
/*
	 * Sub-menu buttons.
	 */
.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button {
		border-radius: 0;
	}
.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button > .ck-menu-bar__menu__button__arrow {
			width: var(--ck-dropdown-arrow-size);
		}
[dir="ltr"] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button > .ck-menu-bar__menu__button__arrow {
				transform: rotate(-90deg);

				/* A space to accommodate the triangle. */
				margin-left: var(--ck-spacing-standard);

				/* Nudge the arrow gently to the right because its center of gravity is to the left */
				margin-right: calc(-1 * var(--ck-spacing-small));
		}
[dir="rtl"] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button > .ck-menu-bar__menu__button__arrow {
				transform: rotate(90deg);

				left: var(--ck-spacing-standard);

				/* A space to accommodate the triangle. */
				margin-right: var(--ck-spacing-small);

				/* Nudge the arrow gently to the left because its center of gravity is to the right (after rotation). */
				margin-left: calc(-1 * var(--ck-spacing-small));
		}
.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button.ck-disabled > .ck-menu-bar__menu__button__arrow {
			opacity: var(--ck-disabled-opacity);
		}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-menu-bar-menu-item-min-width: 18em;
}
.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item {
	min-width: var(--ck-menu-bar-menu-item-min-width);
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
	 * List item buttons.
	 */
.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button {
		border-radius: 0;
	}
.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button > .ck-spinner-container,
		.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button > .ck-spinner-container .ck-spinner {
			/* These styles correspond to .ck-icon so that the spinner seamlessly replaces the icon. */
			--ck-toolbar-spinner-size: 20px;
		}
.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button > .ck-spinner-container {
			/* This ensures margins corresponding to the .ck-icon. */
			font-size: var(--ck-icon-font-size);
		}
[dir="ltr"] .ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button > .ck-spinner-container {
				margin-right: var(--ck-spacing-medium);
		}
[dir="rtl"] .ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button > .ck-spinner-container {
				margin-left: var(--ck-spacing-medium);
		}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A helper to combine multiple shadows.
 */
/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A visual style of focused element's border.
 */
:root {
	--ck-menu-bar-menu-panel-max-width: 75vw;
}
.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	border-radius: 0;
}
.ck-rounded-corners .ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel, .ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
}
.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	box-shadow: var(--ck-drop-shadow), 0 0;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;
	height: fit-content;
	max-width: var(--ck-menu-bar-menu-panel-max-width);

	/* Corner border radius consistent with the button. */
}
.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es,
	.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se {
		border-top-left-radius: 0;
	}
.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws,
	.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw {
		border-top-right-radius: 0;
	}
.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,
	.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne {
		border-bottom-left-radius: 0;
	}
.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn,
	.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw {
		border-bottom-right-radius: 0;
	}
.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel:focus {
		outline: none;
	}
.ck.ck-menu-bar .ck-list-item-button:focus,
		.ck.ck-menu-bar .ck-list-item-button:active {
			border-color: transparent;
			box-shadow: none;
		}
.ck.ck-menu-bar.ck-menu-bar_focus-border-enabled .ck-list-item-button:focus,
		.ck.ck-menu-bar.ck-menu-bar_focus-border-enabled .ck-list-item-button:active {
			/* Fix truncated shadows due to rendering order. */
			position: relative;
			z-index: 2;

			/* Disable native outline. */

			outline: none;

			border: var(--ck-focus-ring);
			box-shadow: var(--ck-focus-outer-shadow), 0 0;
		}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A helper to combine multiple shadows.
 */
/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}
.ck.ck-balloon-panel {
	border-radius: 0;
}
.ck-rounded-corners .ck.ck-balloon-panel, .ck.ck-balloon-panel.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
}
.ck.ck-balloon-panel {
	box-shadow: var(--ck-drop-shadow), 0 0;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);
}
.ck.ck-balloon-panel.ck-balloon-panel_with-arrow::before,
		.ck.ck-balloon-panel.ck-balloon-panel_with-arrow::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
.ck.ck-balloon-panel[class*="arrow_n"]::before,
		.ck.ck-balloon-panel[class*="arrow_n"]::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}
.ck.ck-balloon-panel[class*="arrow_n"]::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}
.ck.ck-balloon-panel[class*="arrow_n"]::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
.ck.ck-balloon-panel[class*="arrow_s"]::before,
		.ck.ck-balloon-panel[class*="arrow_s"]::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}
.ck.ck-balloon-panel[class*="arrow_s"]::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}
.ck.ck-balloon-panel[class*="arrow_s"]::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
.ck.ck-balloon-panel[class*="arrow_e"]::before,
		.ck.ck-balloon-panel[class*="arrow_e"]::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}
.ck.ck-balloon-panel[class*="arrow_e"]::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}
.ck.ck-balloon-panel[class*="arrow_e"]::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
.ck.ck-balloon-panel[class*="arrow_w"]::before,
		.ck.ck-balloon-panel[class*="arrow_w"]::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}
.ck.ck-balloon-panel[class*="arrow_w"]::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}
.ck.ck-balloon-panel[class*="arrow_w"]::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
.ck.ck-balloon-panel.ck-balloon-panel_arrow_n::before,
		.ck.ck-balloon-panel.ck-balloon-panel_arrow_n::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw::before,
		.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne::before,
		.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
.ck.ck-balloon-panel.ck-balloon-panel_arrow_s::before,
		.ck.ck-balloon-panel.ck-balloon-panel_arrow_s::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw::before,
		.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
.ck.ck-balloon-panel.ck-balloon-panel_arrow_se::before,
		.ck.ck-balloon-panel.ck-balloon-panel_arrow_se::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme::before,
		.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw::before,
		.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme::before,
		.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw::before,
		.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
.ck.ck-balloon-panel.ck-balloon-panel_arrow_e::before,
		.ck.ck-balloon-panel.ck-balloon-panel_arrow_e::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
.ck.ck-balloon-panel.ck-balloon-panel_arrow_w::before,
		.ck.ck-balloon-panel.ck-balloon-panel_arrow_w::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
}
.ck .ck-balloon-rotator__navigation > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}
/* Gives counter more breath than buttons. */
.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
/* Disable default annotation shadow inside rotator with fake panels. */
.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A helper to combine multiple shadows.
 */
/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}
/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	box-shadow: var(--ck-drop-shadow), 0 0;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}
.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}
.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}
/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A helper to combine multiple shadows.
 */
/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
.ck.ck-sticky-panel .ck-sticky-panel__content_sticky {
		box-shadow: var(--ck-drop-shadow), 0 0;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}
.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);
}
.ck.ck-responsive-form:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}
[dir="ltr"] .ck.ck-responsive-form > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
[dir="rtl"] .ck.ck-responsive-form > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
@media screen and (max-width: 600px) {
.ck.ck-responsive-form {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));
}

		.ck.ck-responsive-form .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;
		}

			.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text,
			.ck.ck-responsive-form .ck-labeled-field-view .ck-input-number {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error {
				white-space: normal;
			}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
			.ck.ck-responsive-form > .ck-button:nth-last-child(2)::after {
				border-right: 1px solid var(--ck-color-base-border);
			}

		.ck.ck-responsive-form > .ck-button:nth-last-child(1),
		.ck.ck-responsive-form > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;
		}

			.ck.ck-responsive-form > .ck-button:nth-last-child(1):not(:focus), .ck.ck-responsive-form > .ck-button:nth-last-child(2):not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

		[dir="ltr"] .ck.ck-responsive-form > .ck-button:nth-last-child(1),
		[dir="ltr"] .ck.ck-responsive-form > .ck-button:nth-last-child(2) {
				margin-left: 0;
		}

		[dir="rtl"] .ck.ck-responsive-form > .ck-button:nth-last-child(1),
		[dir="rtl"] .ck.ck-responsive-form > .ck-button:nth-last-child(2) {
				margin-left: 0;
		}

				[dir="rtl"] .ck.ck-responsive-form > .ck-button:nth-last-child(1):last-of-type, [dir="rtl"] .ck.ck-responsive-form > .ck-button:nth-last-child(2):last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
	}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-search-field-view-horizontal-spacing: calc(var(--ck-icon-size) + var(--ck-spacing-medium));
}
.ck.ck-search > .ck-labeled-field-view .ck-input {
			width: 100%;
		}
.ck.ck-search > .ck-labeled-field-view.ck-search__query_with-icon {
			--ck-labeled-field-label-default-position-x: var(--ck-search-field-view-horizontal-spacing);
		}
.ck.ck-search > .ck-labeled-field-view.ck-search__query_with-icon > .ck-labeled-field-view__input-wrapper > .ck-icon {
				opacity: .5;
				pointer-events: none;
			}
.ck.ck-search > .ck-labeled-field-view.ck-search__query_with-icon .ck-input {
				width: 100%;
			}
[dir="ltr"] .ck.ck-search > .ck-labeled-field-view.ck-search__query_with-icon .ck-input {
					padding-left: var(--ck-search-field-view-horizontal-spacing);
			}
[dir="rtl"] .ck.ck-search > .ck-labeled-field-view.ck-search__query_with-icon .ck-input:not(.ck-input-text_empty) {
						padding-left: var(--ck-search-field-view-horizontal-spacing);
					}
.ck.ck-search > .ck-labeled-field-view.ck-search__query_with-reset {
			--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-search-field-view-horizontal-spacing);
		}
.ck.ck-search > .ck-labeled-field-view.ck-search__query_with-reset.ck-labeled-field-view_empty {
				--ck-labeled-field-empty-unfocused-max-width: 100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium);
			}
.ck.ck-search > .ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset {
				min-width: auto;
				min-height: auto;

				background: none;
				opacity: .5;
				padding: 0;
			}
[dir="ltr"] .ck.ck-search > .ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset {
					right: var(--ck-spacing-medium);
			}
[dir="rtl"] .ck.ck-search > .ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset {
					left: var(--ck-spacing-medium);
			}
.ck.ck-search > .ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset:hover {
					opacity: 1;
				}
.ck.ck-search > .ck-labeled-field-view.ck-search__query_with-reset .ck-input {
				width: 100%;
			}
[dir="ltr"] .ck.ck-search > .ck-labeled-field-view.ck-search__query_with-reset .ck-input:not(.ck-input-text_empty) {
						padding-right: var(--ck-search-field-view-horizontal-spacing);
					}
[dir="rtl"] .ck.ck-search > .ck-labeled-field-view.ck-search__query_with-reset .ck-input {
					padding-right: var(--ck-search-field-view-horizontal-spacing);
			}
.ck.ck-search > .ck-search__results {
		min-width: 100%;
	}
.ck.ck-search > .ck-search__results > .ck-search__info {
			width: 100%;
			padding: var(--ck-spacing-medium) var(--ck-spacing-large);
		}
.ck.ck-search > .ck-search__results > .ck-search__info * {
				white-space: normal;
			}
.ck.ck-search > .ck-search__results > .ck-search__info > span:first-child {
				font-weight: bold;
			}
.ck.ck-search > .ck-search__results > .ck-search__info > span:last-child {
				margin-top: var(--ck-spacing-medium);
			}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-toolbar-spinner-size: 18px;
}
.ck.ck-spinner-container {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	animation: 1.5s infinite ck-spinner-rotate linear;
}
@media (prefers-reduced-motion: reduce) {
.ck.ck-spinner-container {
		animation-duration: 3s;
}
	}
.ck.ck-spinner {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	border-radius: 50%;
	border: 2px solid var(--ck-color-text);
	border-top-color: transparent;
}
@keyframes ck-spinner-rotate {
	to {
		transform: rotate(360deg)
	}
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * This fixes a problem in Firefox when the initial height of the complement does not match the number of rows.
 * This bug is especially visible when rows=1.
 */
.ck-textarea {
	overflow-x: hidden
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}
.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
.ck.ck-toolbar {
	border-radius: 0;
}
.ck-rounded-corners .ck.ck-toolbar, .ck.ck-toolbar.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
}
.ck.ck-toolbar {

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);
}
.ck.ck-toolbar .ck.ck-toolbar__separator {
		height: var(--ck-icon-size);
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}
.ck.ck-toolbar .ck-toolbar__line-break {
		height: 0;
	}
.ck.ck-toolbar > .ck-toolbar__items > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}
/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
.ck.ck-toolbar > .ck-toolbar__items:empty + .ck.ck-toolbar__separator {
			display: none;
		}
.ck.ck-toolbar > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	.ck.ck-toolbar > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}
.ck.ck-toolbar.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
	}
.ck.ck-toolbar.ck-toolbar_vertical > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
.ck.ck-toolbar.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;
	}
.ck.ck-toolbar.ck-toolbar_compact > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
		}
.ck.ck-toolbar.ck-toolbar_compact > .ck-toolbar__items > *:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
.ck.ck-toolbar > .ck.ck-toolbar__grouped-dropdown > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
/* A drop-down containing the nested toolbar with configured items. */
/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown > .ck-dropdown__panel {
			min-width: auto;
		}
.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
.ck.ck-toolbar:focus {
		outline: none;
	}
.ck-toolbar-container .ck.ck-toolbar {
		border: 0;
}
/* stylelint-disable */
/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar > .ck-toolbar__items > .ck, .ck.ck-toolbar[dir="rtl"] > .ck-toolbar__items > .ck {
		margin-right: 0;
	}
[dir="rtl"] .ck.ck-toolbar:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck, .ck.ck-toolbar[dir="rtl"]:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}
[dir="rtl"] .ck.ck-toolbar > .ck-toolbar__items > .ck:last-child, .ck.ck-toolbar[dir="rtl"] > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}
/* No rounded corners on the right side of the first child. */
[dir="rtl"] .ck.ck-toolbar.ck-toolbar_compact > .ck-toolbar__items > .ck:first-child, .ck.ck-toolbar.ck-toolbar_compact[dir="rtl"] > .ck-toolbar__items > .ck:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
/* No rounded corners on the left side of the last child. */
[dir="rtl"] .ck.ck-toolbar.ck-toolbar_compact > .ck-toolbar__items > .ck:last-child, .ck.ck-toolbar.ck-toolbar_compact[dir="rtl"] > .ck-toolbar__items > .ck:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
/* Separate the the separator form the grouping dropdown when some items are grouped. */
[dir="rtl"] .ck.ck-toolbar > .ck.ck-toolbar__separator, .ck.ck-toolbar[dir="rtl"] > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}
/* Some spacing between the items and the separator before the grouped items dropdown. */
[dir="rtl"] .ck.ck-toolbar.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child), .ck.ck-toolbar.ck-toolbar_grouping[dir="rtl"] > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar > .ck-toolbar__items > .ck:last-child, .ck.ck-toolbar[dir="ltr"] > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}
/* No rounded corners on the right side of the first child. */
[dir="ltr"] .ck.ck-toolbar.ck-toolbar_compact > .ck-toolbar__items > .ck:first-child, .ck.ck-toolbar.ck-toolbar_compact[dir="ltr"] > .ck-toolbar__items > .ck:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
/* No rounded corners on the left side of the last child. */
[dir="ltr"] .ck.ck-toolbar.ck-toolbar_compact > .ck-toolbar__items > .ck:last-child, .ck.ck-toolbar.ck-toolbar_compact[dir="ltr"] > .ck-toolbar__items > .ck:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
/* Separate the the separator form the grouping dropdown when some items are grouped. */
[dir="ltr"] .ck.ck-toolbar > .ck.ck-toolbar__separator, .ck.ck-toolbar[dir="ltr"] > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}
/* Some spacing between the items and the separator before the grouped items dropdown. */
[dir="ltr"] .ck.ck-toolbar.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child), .ck.ck-toolbar.ck-toolbar_grouping[dir="ltr"] > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
/* stylelint-enable */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-tooltip-text-padding: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	/* Reset balloon panel styles */
	box-shadow: none;
}
.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}
.ck.ck-balloon-panel.ck-tooltip.ck-tooltip_multi-line .ck-tooltip__text {
		white-space: break-spaces;
		display: inline-block;
		padding: var(--ck-tooltip-text-padding) 0;
		max-width: 200px;
	}
/* Hide the default shadow of the .ck-balloon-panel tip */
.ck.ck-balloon-panel.ck-tooltip::before {
		display: none;
	}

/* Editor */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content {
			border-radius: 0;
		}
.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content, .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
		}
.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content {

			border: 1px solid var(--ck-color-base-border);
			border-bottom-width: 0;
		}
.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-sticky-panel__content_sticky {
				border-bottom-width: 1px;
			}
.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-menu-bar {
				border: 0;
				border-bottom: 1px solid var(--ck-color-base-border);
			}
.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-toolbar {
				border: 0;
			}
/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	border-radius: 0;
}
.ck-rounded-corners .ck.ck-editor__main > .ck-editor__editable, .ck.ck-editor__main > .ck-editor__editable.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		border-top-left-radius: 0;
		border-top-right-radius: 0;
}
.ck.ck-editor__main > .ck-editor__editable:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}

/* Plugins */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border);
}
/*
	 * Vertical drop target (in text).
	 */
.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
		}
.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span::after {
				content: '';
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
/*
	 * Styles of the widget that it a drop target.
	 */
.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}
/*
	 * Styles of the widget being dragged (its preview).
	 */
.ck.ck-editor__editable .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
.ck.ck-clipboard-drop-target-line {
	height: 0;
	border: 1px solid var(--ck-clipboard-drop-target-color);
	background: var(--ck-clipboard-drop-target-color);
	margin-top: -1px;
}
.ck.ck-clipboard-drop-target-line::before {
		content: '';
		position: absolute;
		top: calc(-.5 * var(--ck-clipboard-drop-target-dot-width));
		width: 0;
		height: 0;
		border-style: solid;
	}
[dir="ltr"] .ck.ck-clipboard-drop-target-line::before {
			left: -1px;

			border-width: calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height);
			border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
	}
[dir="rtl"] .ck.ck-clipboard-drop-target-line::before {
			right: -1px;

			border-width:calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0;
			border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
	}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-color-code-block-label-background: hsl(0, 0%, 46%);
}
.ck.ck-editor__editable pre[data-language]::after {
	top: -1px;
	right: 10px;
	background: var(--ck-color-code-block-label-background);

	font-size: 10px;
	font-family: var(--ck-font-face);
	line-height: 16px;
	padding: var(--ck-spacing-tiny) var(--ck-spacing-medium);
	color: hsl(0, 0%, 100%);
	white-space: nowrap;
}
.ck.ck-code-block-dropdown .ck-dropdown__panel {
	/* There could be dozens of languages available. Use scroll to prevent a 10e6px dropdown. */
	max-height: 250px;
	overflow-y: auto;
	overflow-x: hidden;
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/* See ckeditor/ckeditor5#936. */
@media (forced-colors: active) {
		.ck.ck-placeholder, .ck .ck-placeholder {
		/*
		 * This is needed for Edge on Windows to use the right color for the placeholder content (::before).
		 * See https://github.com/ckeditor/ckeditor5/issues/14907.
		 */
		forced-color-adjust: preserve-parent-color;
		}
	}
.ck.ck-placeholder::before, .ck .ck-placeholder::before {
		cursor: text;
	}
@media (forced-colors: none) {
		.ck.ck-placeholder::before, .ck .ck-placeholder::before {
			color: var(--ck-color-engine-placeholder-text);
		}
	}
@media (forced-colors: active) {
		.ck.ck-placeholder::before, .ck .ck-placeholder::before {
			/*
			 * In the high contrast mode there is no telling between regular and placeholder text. Using
			 * italic text to address that issue. See https://github.com/ckeditor/ckeditor5/issues/14907.
			 */
			font-style: italic;

			/*
			 * Without this margin, the caret will not show up and blink when the user puts the selection
			 * in the placeholder (Edge on Windows). See https://github.com/ckeditor/ckeditor5/issues/14907.
			 */
			margin-left: 1px;
		}
	}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
.ck.ck-find-and-replace-form {
	width: 400px;

	/*
	 * The <form> needs tabindex="-1" for proper Esc handling after being clicked
	 * but the side effect is that this creates a nasty focus outline in some browsers.
	 */
}
.ck.ck-find-and-replace-form:focus {
		outline: none;
	}
/* Generic styles for the form inputs and actions. */
.ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs,
	.ck.ck-find-and-replace-form .ck-find-and-replace-form__actions {
		flex: 1 1 auto;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		align-content: stretch;

		padding: var(--ck-spacing-large);
		margin: 0;

	}
.ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs > .ck-button, .ck.ck-find-and-replace-form .ck-find-and-replace-form__actions > .ck-button {
			flex: 0 0 auto;
		}
[dir="ltr"] .ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs > * + *, [dir="ltr"] .ck.ck-find-and-replace-form .ck-find-and-replace-form__actions > * + * {
				margin-left: var(--ck-spacing-standard);
			}
[dir="rtl"] .ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs > * + *, [dir="rtl"] .ck.ck-find-and-replace-form .ck-find-and-replace-form__actions > * + * {
				margin-right: var(--ck-spacing-standard);
			}
.ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs .ck-labeled-field-view, .ck.ck-find-and-replace-form .ck-find-and-replace-form__actions .ck-labeled-field-view {
			flex: 1 1 auto;
		}
.ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs .ck-labeled-field-view .ck-input, .ck.ck-find-and-replace-form .ck-find-and-replace-form__actions .ck-labeled-field-view .ck-input {
				width: 100%;
				min-width: 50px;
			}
/* Styles specific for inputs area. */
.ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs {
		/* To display all controls in line when there's an error under the input */
		align-items: flex-start;
	}
.ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs > .ck-button-prev > .ck-icon {
			transform: rotate(90deg);
		}
.ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs > .ck-button-next > .ck-icon {
			transform: rotate(-90deg);
		}
.ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs .ck-results-counter {
			top: 50%;
			transform: translateY(-50%);
		}
[dir="ltr"] .ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs .ck-results-counter {
				right: var(--ck-spacing-standard);
		}
[dir="rtl"] .ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs .ck-results-counter {
				left: var(--ck-spacing-standard);
		}
.ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs .ck-results-counter {

			color: var(--ck-color-base-border);
		}
.ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs > .ck-labeled-field-replace {
			flex: 0 0 100%;
			padding-top: var(--ck-spacing-standard);
		}
[dir="ltr"] .ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs > .ck-labeled-field-replace {
				margin-left: 0;
		}
[dir="rtl"] .ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs > .ck-labeled-field-replace {
				margin-right: 0;
		}
/* Styles specific for actions area. */
.ck.ck-find-and-replace-form .ck-find-and-replace-form__actions {
		flex-wrap: wrap;
		justify-content: flex-end;
		margin-top: calc( -1 * var(--ck-spacing-large) );
	}
.ck.ck-find-and-replace-form .ck-find-and-replace-form__actions > .ck-button-find {
			font-weight: bold;

			/* Beef the find button up a little. It's the main action button in the form */
		}
.ck.ck-find-and-replace-form .ck-find-and-replace-form__actions > .ck-button-find .ck-button__label {
				padding-left: var(--ck-spacing-large);
				padding-right: var(--ck-spacing-large);
			}
.ck.ck-find-and-replace-form .ck-switchbutton {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
	}
@media screen and (max-width: 600px) {
	.ck.ck-find-and-replace-form {
		width: 300px;

		/* Don't let the form overflow from the dialog (https://github.com/cksource/ckeditor5-commercial/issues/5913) */
		max-width: 100%;

		/* Styles specific for inputs area. */
	}
		.ck.ck-find-and-replace-form.ck-find-and-replace-form__input {
			flex-wrap: wrap;
		}

			.ck.ck-find-and-replace-form.ck-find-and-replace-form__input .ck-labeled-field-view {
				flex: 1 0 auto;
				width: 100%;
				margin-bottom: var(--ck-spacing-standard);
			}

			.ck.ck-find-and-replace-form.ck-find-and-replace-form__input > .ck-button {
				text-align: center;
			}

				.ck.ck-find-and-replace-form.ck-find-and-replace-form__input > .ck-button:first-of-type {
					flex: 1 1 auto;
				}

				[dir="ltr"] .ck.ck-find-and-replace-form.ck-find-and-replace-form__input > .ck-button:first-of-type {
						margin-left: 0;
				}

				[dir="rtl"] .ck.ck-find-and-replace-form.ck-find-and-replace-form__input > .ck-button:first-of-type {
						margin-right: 0;
				}

					.ck.ck-find-and-replace-form.ck-find-and-replace-form__input > .ck-button:first-of-type .ck-button__label {
						width: 100%;
						text-align: center;
					}

		/* Styles specific for actions area. */
		.ck.ck-find-and-replace-form.ck-find-and-replace-form__actions > :not(.ck-labeled-field-view) {
			flex-wrap: wrap;
			flex: 1 1 auto;
		}

			.ck.ck-find-and-replace-form.ck-find-and-replace-form__actions > :not(.ck-labeled-field-view) > .ck-button {
				text-align: center;
			}

				.ck.ck-find-and-replace-form.ck-find-and-replace-form__actions > :not(.ck-labeled-field-view) > .ck-button:first-of-type {
					flex: 1 1 auto;
				}

				[dir="ltr"] .ck.ck-find-and-replace-form.ck-find-and-replace-form__actions > :not(.ck-labeled-field-view) > .ck-button:first-of-type {
						margin-left: 0;
				}

				[dir="rtl"] .ck.ck-find-and-replace-form.ck-find-and-replace-form__actions > :not(.ck-labeled-field-view) > .ck-button:first-of-type {
						margin-right: 0;
				}

				.ck.ck-find-and-replace-form.ck-find-and-replace-form__actions > :not(.ck-labeled-field-view) > .ck-button .ck-button__label {
					width: 100%;
					text-align: center;
				}
	}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label {
		width: 8em;
	}
.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Note: This file should contain the wireframe styles only. But since there are no such styles,
 * it acts as a message to the builder telling that it should look for the corresponding styles
 * **in the theme** when compiling the editor.
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-html-embed-content-width: calc(100% - 1.5 * var(--ck-icon-size));
	--ck-html-embed-source-height: 10em;
	--ck-html-embed-unfocused-outline-width: 1px;
	--ck-html-embed-content-min-height: calc(var(--ck-icon-size) + var(--ck-spacing-standard));

	--ck-html-embed-source-disabled-background: var(--ck-color-base-foreground);
	--ck-html-embed-source-disabled-color: hsl(0deg 0% 45%);
}
/* The feature container. */
.ck-widget.raw-html-embed {
	font-size: var(--ck-font-size-base);
	background-color: var(--ck-color-base-foreground);
}
.ck-widget.raw-html-embed:not(.ck-widget_selected):not(:hover) {
		outline: var(--ck-html-embed-unfocused-outline-width) dashed var(--ck-color-widget-blurred-border);
	}
/* HTML embed widget itself should respect UI language direction */
.ck-widget.raw-html-embed[dir="ltr"] {
		text-align: left;
	}
.ck-widget.raw-html-embed[dir="rtl"] {
		text-align: right;
	}
/* ----- Embed label in the upper left corner ----------------------------------------------- */
.ck-widget.raw-html-embed::before {
		content: attr(data-html-embed-label);
		top: calc(-1 * var(--ck-html-embed-unfocused-outline-width));
		left: var(--ck-spacing-standard);
		background: hsl(0deg 0% 60%);
		transition: background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);
		padding: calc(var(--ck-spacing-tiny) + var(--ck-html-embed-unfocused-outline-width)) var(--ck-spacing-small) var(--ck-spacing-tiny);
		border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
		color: var(--ck-color-base-background);
		font-size: var(--ck-font-size-tiny);
		font-family: var(--ck-font-face);
	}
.ck-widget.raw-html-embed[dir="rtl"]::before {
		left: auto;
		right: var(--ck-spacing-standard);
	}
/* Make space for label but it only collides in LTR languages */
.ck-widget.raw-html-embed[dir="ltr"] .ck-widget__type-around .ck-widget__type-around__button.ck-widget__type-around__button_before {
		margin-left: 50px;
	}
.ck.ck-editor__editable.ck-blurred .ck-widget.raw-html-embed.ck-widget_selected::before {
		top: 0px;
		padding: var(--ck-spacing-tiny) var(--ck-spacing-small);
}
.ck.ck-editor__editable:not(.ck-blurred) .ck-widget.raw-html-embed.ck-widget_selected::before {
		top: 0;
		padding: var(--ck-spacing-tiny) var(--ck-spacing-small);
		background: var(--ck-color-focus-border);
}
.ck.ck-editor__editable .ck-widget.raw-html-embed:not(.ck-widget_selected):hover::before {
		top: 0px;
		padding: var(--ck-spacing-tiny) var(--ck-spacing-small);
}
/* ----- Emebed internals --------------------------------------------------------------------- */
.ck-widget.raw-html-embed .raw-html-embed__content-wrapper {
		padding: var(--ck-spacing-standard);
	}
/* The switch mode button wrapper. */
.ck-widget.raw-html-embed .raw-html-embed__buttons-wrapper {
		top: var(--ck-spacing-standard);
		right: var(--ck-spacing-standard);
	}
.ck-widget.raw-html-embed .raw-html-embed__buttons-wrapper .ck-button.raw-html-embed__save-button {
			color: var(--ck-color-button-save);
		}
.ck-widget.raw-html-embed .raw-html-embed__buttons-wrapper .ck-button.raw-html-embed__cancel-button {
			color: var(--ck-color-button-cancel);
		}
.ck-widget.raw-html-embed .raw-html-embed__buttons-wrapper .ck-button:not(:first-child) {
			margin-top: var(--ck-spacing-small);
		}
.ck-widget.raw-html-embed[dir="rtl"] .raw-html-embed__buttons-wrapper {
		left: var(--ck-spacing-standard);
		right: auto;
	}
/* The edit source element. */
.ck-widget.raw-html-embed .raw-html-embed__source {
		box-sizing: border-box;
		height: var(--ck-html-embed-source-height);
		width: var(--ck-html-embed-content-width);
		resize: none;
		min-width: 0;
		padding: var(--ck-spacing-standard);

		font-family: monospace;
		tab-size: 4;
		white-space: pre-wrap;
		font-size: var(--ck-font-size-base); /* Safari needs this. */

		/* HTML code is direction\u2013agnostic. */
		text-align: left;
		direction: ltr;
	}
.ck-widget.raw-html-embed .raw-html-embed__source[disabled] {
			background: var(--ck-html-embed-source-disabled-background);
			color: var(--ck-html-embed-source-disabled-color);

			/* Safari needs this for the proper text color in disabled input (https://github.com/ckeditor/ckeditor5/issues/8320). */
			-webkit-text-fill-color: var(--ck-html-embed-source-disabled-color);
			opacity: 1;
		}
/* The preview data container. */
.ck-widget.raw-html-embed .raw-html-embed__preview {
		min-height: var(--ck-html-embed-content-min-height);
		width: var(--ck-html-embed-content-width);

		/* Disable all mouse interaction as long as the editor is not read\u2013only. */
	}
.ck-editor__editable:not(.ck-read-only) .ck-widget.raw-html-embed .raw-html-embed__preview {
			pointer-events: none;
	}
.ck-widget.raw-html-embed .raw-html-embed__preview-content {
		box-sizing: border-box;
		background-color: var(--ck-color-base-foreground);
	}
.ck-widget.raw-html-embed .raw-html-embed__preview-content > * {
			margin-left: auto;
			margin-right: auto;
		}
.ck-widget.raw-html-embed .raw-html-embed__preview-placeholder {
		color: var(--ck-html-embed-source-disabled-color)
	}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-image-insert-insert-by-url-width: 250px;
}
.ck.ck-image-insert-url {
	--ck-input-width: 100%;
}
.ck.ck-image-insert-url .ck-image-insert-url__action-row {
		grid-column-gap: var(--ck-spacing-large);
		margin-top: var(--ck-spacing-large);
	}
.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-save,
		.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-cancel {
			justify-content: center;
			min-width: auto;
		}
.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
.ck.ck-image-insert-form > .ck.ck-button {
		display: block;
		width: 100%;
	}
[dir="ltr"] .ck.ck-image-insert-form > .ck.ck-button {
			text-align: left;
	}
[dir="rtl"] .ck.ck-image-insert-form > .ck.ck-button {
			text-align: right;
	}
.ck.ck-image-insert-form > .ck.ck-collapsible {

		min-width: var(--ck-image-insert-insert-by-url-width);
	}
.ck.ck-image-insert-form > .ck.ck-collapsible:not(:first-child) {
			border-top: 1px solid var(--ck-color-base-border);
		}
.ck.ck-image-insert-form > .ck.ck-collapsible:not(:last-child) {
			border-bottom: 1px solid var(--ck-color-base-border);
		}
/* This is the case when there are no other integrations configured than insert by URL */
.ck.ck-image-insert-form > .ck.ck-image-insert-url {
		min-width: var(--ck-image-insert-insert-by-url-width);
		padding: var(--ck-spacing-large);
	}
.ck.ck-image-insert-form:focus {
		outline: none;
	}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}
.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
}
.ck-image-upload-complete-icon::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
@media (prefers-reduced-motion: reduce) {
.ck-image-upload-complete-icon {
		animation-duration: 0ms;
}

		.ck-image-upload-complete-icon::after {
			animation: none;
			opacity: 1;
			width: 0.3em;
			height: 0.45em;
		}
	}
@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}
@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}
@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}
.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;
}
.ck .ck-image-upload-placeholder.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}
.ck .ck-image-upload-placeholder img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;
}
.ck .ck-upload-placeholder-loader::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/* Showing animation. */
.ck.ck-editor__editable .image.ck-appear, .ck.ck-editor__editable .image-inline.ck-appear {
			animation: fadeIn 700ms;
		}
@media (prefers-reduced-motion: reduce) {
.ck.ck-editor__editable .image.ck-appear, .ck.ck-editor__editable .image-inline.ck-appear {
				opacity: 1;
				animation: none;
		}
			}
/* Upload progress bar. */
.ck.ck-editor__editable .image .ck-progress-bar,
	.ck.ck-editor__editable .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
}
.ck .ck-link_selected span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}
/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * Makes element unselectable.
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A visual style of focused element's border.
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A helper to combine multiple shadows.
 */
/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
.ck.ck-link-actions .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;
	}
.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;
		}
.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover {
				text-decoration: underline;
			}
.ck.ck-link-actions .ck-button.ck-link-actions__preview,
		.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover,
		.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,
		.ck.ck-link-actions .ck-button.ck-link-actions__preview:active {
			background: none;
		}
.ck.ck-link-actions .ck-button.ck-link-actions__preview:active {
			box-shadow: none;
		}
.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label {
				text-decoration: underline;
			}
[dir="ltr"] .ck.ck-link-actions .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
[dir="rtl"] .ck.ck-link-actions .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
@media screen and (max-width: 600px) {
		.ck.ck-link-actions .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;
		}

			.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}

		[dir="ltr"] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview) {
				margin-left: 0;
		}

		[dir="rtl"] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview) {
				margin-left: 0;
		}
	}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);
}
.ck.ck-link-form_layout-vertical .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);
	}
.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text {
			min-width: 0;
			width: 100%;
		}
.ck.ck-link-form_layout-vertical > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;
	}
.ck.ck-link-form_layout-vertical > .ck-button:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}
[dir="ltr"] .ck.ck-link-form_layout-vertical > .ck-button {
			margin-left: 0;
	}
[dir="rtl"] .ck.ck-link-form_layout-vertical > .ck-button {
			margin-left: 0;
	}
[dir="rtl"] .ck.ck-link-form_layout-vertical > .ck-button:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
.ck.ck-link-form_layout-vertical .ck.ck-list {
		margin: 0 var(--ck-spacing-large);
	}
.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;
		}
.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover {
				background: none;
			}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}
/* Linked image indicator */
.ck.ck-editor__editable figure.image > a::after, .ck.ck-editor__editable a span.image-inline::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url(${U});
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/* When there are no list styles and there is no collapsible. */
.ck.ck-list-properties.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);
	}
.ck.ck-list-properties.ck-list-properties_without-styles > * {
			min-width: 14em;
		}
.ck.ck-list-properties.ck-list-properties_without-styles > * + * {
				margin-top: var(--ck-spacing-standard);
			}
/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
.ck.ck-list-properties.ck-list-properties_with-numbered-properties > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}
/* When list styles are rendered and property fields are in a collapsible. */
.ck.ck-list-properties.ck-list-properties_with-numbered-properties > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);
		}
.ck.ck-list-properties.ck-list-properties_with-numbered-properties > .ck-collapsible > .ck-collapsible__children > * {
					width: 100%;
				}
.ck.ck-list-properties.ck-list-properties_with-numbered-properties > .ck-collapsible > .ck-collapsible__children > * + * {
						margin-top: var(--ck-spacing-standard);
					}
.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}
.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));
	}
.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active, .ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-list-style-button-size: 44px;
}
.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);
}
.ck.ck-list-styles-list .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;
	}
.ck.ck-list-styles-list .ck-button .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}
.ck-media__wrapper {
	margin: 0 auto;
}
.ck-media__wrapper .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);
	}
.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;
		}
.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon {
				width: 100%;
				height: 100%;
			}
.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;
		}
.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
.ck-media__wrapper[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}
.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(${Re});
	}
.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);
	}
.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon {
			background-image: url(${ae});
		}
.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);
		}
.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover {
				color: hsl(0, 0%, 100%);
			}
.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));
	}
.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon {
			background-image: url(${He});
		}
/* stylelint-disable-next-line no-descending-specificity */
.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);
		}
.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover {
				color: hsl(0, 0%, 100%);
			}
.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );
	}
.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon {
			background-image: url(${Te});
		}
.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);
		}
.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover {
				color: hsl(0, 0%, 100%);
			}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-color-mention-background: hsla(341, 100%, 30%, 0.1);
	--ck-color-mention-text: hsl(341, 100%, 30%);
}
.ck-content .mention {
	background: var(--ck-color-mention-background);
	color: var(--ck-color-mention-text);
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-color-restricted-editing-exception-background: hsla(31, 100%, 65%, .2);
	--ck-color-restricted-editing-exception-hover-background: hsla(31, 100%, 65%, .35);
	--ck-color-restricted-editing-exception-brackets: hsla(31, 100%, 40%, .4);
	--ck-color-restricted-editing-selected-exception-background: hsla(31, 100%, 65%, .5);
	--ck-color-restricted-editing-selected-exception-brackets: hsla(31, 100%, 40%, .6);
}
.ck-editor__editable .restricted-editing-exception {
	transition: .2s ease-in-out background;
	background-color: var(--ck-color-restricted-editing-exception-background);
	border: 1px solid;
	border-image: linear-gradient(
		to right,
		var(--ck-color-restricted-editing-exception-brackets) 0%,
		var(--ck-color-restricted-editing-exception-brackets) 5px,
		hsla(0, 0%, 0%, 0) 6px,
		hsla(0, 0%, 0%, 0) calc(100% - 6px),
		var(--ck-color-restricted-editing-exception-brackets) calc(100% - 5px),
		var(--ck-color-restricted-editing-exception-brackets) 100%
	) 1;
}
@media (prefers-reduced-motion: reduce) {
.ck-editor__editable .restricted-editing-exception {
		transition: none;
}
	}
.ck-editor__editable .restricted-editing-exception.restricted-editing-exception_selected {
		background-color: var(--ck-color-restricted-editing-selected-exception-background);
		border-image: linear-gradient(
			to right,
			var(--ck-color-restricted-editing-selected-exception-brackets) 0%,
			var(--ck-color-restricted-editing-selected-exception-brackets) 5px,
			var(--ck-color-restricted-editing-selected-exception-brackets) calc(100% - 5px),
			var(--ck-color-restricted-editing-selected-exception-brackets) 100%
		) 1;
	}
.ck-editor__editable .restricted-editing-exception.restricted-editing-exception_collapsed {
		/* Empty exception should have the same width as exception with at least 1 char */
		padding-left: 1ch;
	}
.ck-restricted-editing_mode_restricted {
	cursor: default;

	/* We also have to override all elements inside the restricted editable to prevent cursor switching between default and text
	during the pointer movement. */
}
.ck-restricted-editing_mode_restricted * {
		cursor: default;
	}
.ck-restricted-editing_mode_restricted .restricted-editing-exception {
		cursor: text;
	}
.ck-restricted-editing_mode_restricted .restricted-editing-exception * {
			cursor: text;
		}
.ck-restricted-editing_mode_restricted .restricted-editing-exception:hover {
			background: var(--ck-color-restricted-editing-exception-hover-background);
		}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
:root {
	--ck-character-grid-tile-size: 24px;
}
.ck.ck-character-grid {
	overflow-y: auto;
	overflow-x: hidden;
}
.ck.ck-character-grid .ck-character-grid__tiles {
		grid-template-columns: repeat(auto-fill, minmax(var(--ck-character-grid-tile-size), 1fr));
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);
		grid-gap: var(--ck-spacing-standard);
	}
.ck.ck-character-grid .ck-character-grid__tile {
		width: var(--ck-character-grid-tile-size);
		height: var(--ck-character-grid-tile-size);
		min-width: var(--ck-character-grid-tile-size);
		min-height: var(--ck-character-grid-tile-size);
		font-size: 1.5em;
		padding: 0;
		transition: .2s ease box-shadow;
		border: 0;
	}
@media (prefers-reduced-motion: reduce) {
.ck.ck-character-grid .ck-character-grid__tile {
			transition: none;
	}
		}
.ck.ck-character-grid .ck-character-grid__tile:focus:not( .ck-disabled ),
		.ck.ck-character-grid .ck-character-grid__tile:hover:not( .ck-disabled ) {
			/* Disable the default .ck-button's border ring. */
			border: 0;
			box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
		}
/* Make sure the glyph is rendered in the center of the button */
.ck.ck-character-grid .ck-character-grid__tile .ck-button__label {
			line-height: var(--ck-character-grid-tile-size);
			width: 100%;
			text-align: center;
		}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
.ck.ck-character-info {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	border-top: 1px solid var(--ck-color-base-border);
}
.ck.ck-character-info > * {
		text-transform: uppercase;
		font-size: var(--ck-font-size-small);
	}
.ck.ck-character-info .ck-character-info__name {
		max-width: 280px;
		text-overflow: ellipsis;
		overflow: hidden;
	}
.ck.ck-character-info .ck-character-info__code {
		opacity: .6;
	}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
.ck.ck-special-characters-navigation > .ck-label {
		max-width: 160px;
		text-overflow: ellipsis;
		overflow: hidden;
	}
.ck.ck-special-characters-navigation > .ck-dropdown .ck-dropdown__panel {
		/* There could be dozens of categories available. Use scroll to prevent a 10e6px dropdown. */
		max-height: 250px;
		overflow-y: auto;
		overflow-x: hidden;
	}
@media screen and (max-width: 600px) {
.ck.ck-special-characters-navigation {
		max-width: 190px;
}

		.ck.ck-special-characters-navigation > .ck-form__header__label {
			text-overflow: ellipsis;
			overflow: hidden;
		}
	}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
.ck.ck-dropdown.ck-style-dropdown.ck-style-dropdown_multiple-active > .ck-button > .ck-button__label {
	font-style: italic;
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-style-panel-button-width: 120px;
	--ck-style-panel-button-height: 80px;
	--ck-style-panel-button-label-background: hsl(0, 0%, 94.1%);
	--ck-style-panel-button-hover-label-background: hsl(0, 0%, 92.1%);
	--ck-style-panel-button-hover-border-color: hsl(0, 0%, 70%);
}
.ck.ck-style-panel .ck-style-grid {
	row-gap: var(--ck-spacing-large);
	column-gap: var(--ck-spacing-large);
}
.ck.ck-style-panel .ck-style-grid .ck-style-grid__button {
		--ck-color-button-default-hover-background: var(--ck-color-base-background);
		--ck-color-button-default-active-background: var(--ck-color-base-background);

		padding: 0;
		width: var(--ck-style-panel-button-width);
		height: var(--ck-style-panel-button-height);

		/* Let default .ck-button :focus styles apply */
	}
.ck.ck-style-panel .ck-style-grid .ck-style-grid__button:not(:focus) {
			border: 1px solid var(--ck-color-base-border);
		}
.ck.ck-style-panel .ck-style-grid .ck-style-grid__button .ck-button__label {
			height: 22px;
			line-height: 22px;
			width: 100%;
			padding: 0 var(--ck-spacing-medium);
			overflow: hidden;
			text-overflow: ellipsis;
			flex-shrink: 0;
		}
.ck.ck-style-panel .ck-style-grid .ck-style-grid__button .ck-style-grid__button__preview {
			width: 100%;
			overflow: hidden;
			opacity: .9;

			padding: var(--ck-spacing-medium);
			background: var(--ck-color-base-background);
			border: 2px solid var(--ck-color-base-background);
		}
.ck.ck-style-panel .ck-style-grid .ck-style-grid__button.ck-disabled {
			--ck-color-button-default-disabled-background: var(--ck-color-base-foreground);

			/* Let default .ck-button :focus styles apply */
		}
.ck.ck-style-panel .ck-style-grid .ck-style-grid__button.ck-disabled:not(:focus) {
				border-color: var(--ck-style-panel-button-label-background);
			}
.ck.ck-style-panel .ck-style-grid .ck-style-grid__button.ck-disabled .ck-style-grid__button__preview {
				opacity: .4;

				border-color: var(--ck-color-base-foreground);
				filter: saturate(.3);
			}
.ck.ck-style-panel .ck-style-grid .ck-style-grid__button.ck-on {
			border-color: var(--ck-color-base-active);
		}
.ck.ck-style-panel .ck-style-grid .ck-style-grid__button.ck-on .ck-button__label {
				box-shadow: 0 -1px 0 var(--ck-color-base-active);
				z-index: 1; /* Stay on top of the preview with the shadow. */
			}
.ck.ck-style-panel .ck-style-grid .ck-style-grid__button.ck-on:hover {
				border-color: var(--ck-color-base-active-focus);
			}
.ck.ck-style-panel .ck-style-grid .ck-style-grid__button:not(.ck-on) .ck-button__label {
				background: var(--ck-style-panel-button-label-background);
			}
.ck.ck-style-panel .ck-style-grid .ck-style-grid__button:not(.ck-on):hover .ck-button__label {
				background: var(--ck-style-panel-button-hover-label-background);
			}
.ck.ck-style-panel .ck-style-grid .ck-style-grid__button:hover:not(.ck-disabled):not(.ck-on) {
			border-color: var(--ck-style-panel-button-hover-border-color);
		}
.ck.ck-style-panel .ck-style-grid .ck-style-grid__button:hover:not(.ck-disabled):not(.ck-on) .ck-style-grid__button__preview {
				opacity: 1;
			}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
.ck.ck-style-panel .ck-style-panel__style-group > .ck-label {
		margin: var(--ck-spacing-large) 0;
	}
.ck.ck-style-panel .ck-style-panel__style-group:first-child > .ck-label {
			margin-top: 0;
		}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-style-panel-max-height: 470px;
}
.ck.ck-style-panel {
	padding: var(--ck-spacing-large);
	overflow-y: auto;
	max-height: var(--ck-style-panel-max-height);
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
[dir="ltr"] .ck.ck-input-color > .ck.ck-input-text {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
	}
[dir="rtl"] .ck.ck-input-color > .ck.ck-input-text {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
	}
/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
.ck.ck-input-color > .ck.ck-input-text:focus {
			z-index: 0;
		}
.ck.ck-input-color > .ck.ck-dropdown > .ck.ck-button.ck-input-color__button {
			padding: 0;
		}
[dir="ltr"] .ck.ck-input-color > .ck.ck-dropdown > .ck.ck-button.ck-input-color__button {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
		}
[dir="ltr"] .ck.ck-input-color > .ck.ck-dropdown > .ck.ck-button.ck-input-color__button:not(:focus) {
					border-left: 1px solid transparent;
				}
[dir="rtl"] .ck.ck-input-color > .ck.ck-dropdown > .ck.ck-button.ck-input-color__button {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
		}
[dir="rtl"] .ck.ck-input-color > .ck.ck-dropdown > .ck.ck-button.ck-input-color__button:not(:focus) {
					border-right: 1px solid transparent;
				}
.ck.ck-input-color > .ck.ck-dropdown > .ck.ck-button.ck-input-color__button.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}
.ck.ck-input-color > .ck.ck-dropdown > .ck.ck-button.ck-input-color__button > .ck.ck-input-color__button__preview {
				border-radius: 0;
			}
.ck-rounded-corners .ck.ck-input-color > .ck.ck-dropdown > .ck.ck-button.ck-input-color__button > .ck.ck-input-color__button__preview, .ck.ck-input-color > .ck.ck-dropdown > .ck.ck-button.ck-input-color__button > .ck.ck-input-color__button__preview.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
			}
.ck.ck-input-color > .ck.ck-dropdown > .ck.ck-button.ck-input-color__button > .ck.ck-input-color__button__preview {

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);
			}
.ck.ck-input-color > .ck.ck-dropdown > .ck.ck-button.ck-input-color__button > .ck.ck-input-color__button__preview > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
.ck.ck-input-color .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}
[dir="ltr"] .ck.ck-input-color .ck.ck-input-color__remove-color {
			border-top-right-radius: 0;
	}
[dir="rtl"] .ck.ck-input-color .ck.ck-input-color__remove-color {
			border-top-left-radius: 0;
	}
.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);
		}
[dir="rtl"] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
		}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);
}
.ck.ck-form:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}
.ck.ck-form .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}
.ck.ck-form .ck.ck-dropdown {
		min-width: 100%;
	}
.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}
.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label {
				width: 100%;
			}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
}
[dir="ltr"] .ck.ck-form__row > *:not(.ck-label) + * {
				margin-left: var(--ck-spacing-large);
		}
[dir="rtl"] .ck.ck-form__row > *:not(.ck-label) + * {
				margin-right: var(--ck-spacing-large);
		}
.ck.ck-form__row > .ck-label {
		width: 100%;
		min-width: 100%;
	}
.ck.ck-form__row.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);
	}
.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}
.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}
.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}
.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;
}
@media (prefers-reduced-motion: reduce) {
.ck .ck-insert-table-dropdown-grid-box {
		transition: none;
}
	}
.ck .ck-insert-table-dropdown-grid-box:focus {
		box-shadow: none;
	}
.ck .ck-insert-table-dropdown-grid-box.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
.ck.ck-table-cell-properties-form {
	width: 320px;
}
.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}
.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-color-selector-focused-cell-background: hsla(212, 90%, 80%, .3);
}
/**
		 * While setting outline is fine, the border should not be modified here
		 * because it overrides the default table cell border color which is not expected.
		 * So do not use \`@mixin ck-focus-ring;\` here, or any other border styles.
		 * See more: https://github.com/ckeditor/ckeditor5/issues/16979
		 */
.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		.ck-widget.table td.ck-editor__nested-editable:focus,
		.ck-widget.table th.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-selector-focused-cell-background);
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}
.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,
			.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row {
			padding: 0;
		}
.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width,
			.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height {
				margin: 0
			}
.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
.ck.ck-table-form .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);
	}
.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status {
			border-radius: 0;
		}
.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status, .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		}
.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status {

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			animation: ck-table-form-labeled-view-status-appear .15s ease both;

			/* The arrow pointing towards the field. */
		}
.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}
@media (prefers-reduced-motion: reduce) {
.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status {
				animation: none;
		}
			}
/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
.ck.ck-table-properties-form {
	width: 320px;
}
.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;
		}
.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items > * {
					width: 40px;
				}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}
.ck.ck-editor__editable .table table td.ck-editor__editable_selected,
	.ck.ck-editor__editable .table table th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
	}
.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after, .ck.ck-editor__editable .table table th.ck-editor__editable_selected:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}
.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,
		.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,
		.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,
		.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus {
			background-color: transparent;
		}
/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget, .ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget {
			outline: unset;
		}
.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget > .ck-widget__selection-handle, .ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget > .ck-widget__selection-handle {
				display: none;
			}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A visual style of focused element's border.
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A helper to combine multiple shadows.
 */
/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}
.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);
}
@media (prefers-reduced-motion: reduce) {
.ck .ck-widget {
		transition: none;
}
	}
.ck .ck-widget.ck-widget_selected,
	.ck .ck-widget.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}
.ck .ck-widget:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
}
.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,
	.ck .ck-editor__nested-editable:focus {
		box-shadow: var(--ck-inner-shadow), 0 0;
	}
@media (forced-colors: none) {
		.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused, .ck .ck-editor__nested-editable:focus {
			background-color: var(--ck-color-widget-editable-focus-background);
		}
	}
/**
		 * Focus border should not be applied to table cells because it overrides the default table cell border color.
		 * In other words - in some scenarios, the part of the table cell border has focus color style, which is not expected behavior
		 * because it should be the same as the table cell border color.
		 */
.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused:not(td, th), .ck .ck-editor__nested-editable:focus:not(td, th) {
			/* Disable native outline. */
			outline: none;
			border: var(--ck-focus-ring);
		}
.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;
	}
@media (prefers-reduced-motion: reduce) {
.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
			transition: none;
	}
		}
.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
		}
.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
@media (prefers-reduced-motion: reduce) {
.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator {
					transition: none;
			}
				}
/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
.ck .ck-widget.ck-widget_with-selection-handle:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}
/* Show the selection handler when the widget is selected, but not for nested widgets. */
.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected > .ck-widget__selection-handle, .ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
		}
.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected > .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator, .ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover > .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}
/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;
}
.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}
.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,
		.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,
	.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);
	}
.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle > .ck-widget__selection-handle,
			.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover > .ck-widget__selection-handle,
			.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle > .ck-widget__selection-handle:hover,
			.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}
.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}
.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);
}
.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}
.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}
.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}
/*
	 * Styles of the type around buttons
	 */
.ck .ck-widget .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		opacity: 0;

		pointer-events: none;
	}
@media (prefers-reduced-motion: reduce) {
.ck .ck-widget .ck-widget__type-around__button {
			transition: none;
	}
		}
.ck .ck-widget .ck-widget__type-around__button svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;
		}
@media (prefers-reduced-motion: reduce) {
.ck .ck-widget .ck-widget__type-around__button svg {
				transition: none;
		}
			}
.ck .ck-widget .ck-widget__type-around__button svg * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}
.ck .ck-widget .ck-widget__type-around__button svg line {
				stroke-dasharray: 7;
			}
.ck .ck-widget .ck-widget__type-around__button:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
		}
.ck .ck-widget .ck-widget__type-around__button:hover svg polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}
.ck .ck-widget .ck-widget__type-around__button:hover svg line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
@media (prefers-reduced-motion: reduce) {
.ck .ck-widget .ck-widget__type-around__button:hover {
				animation: none;
		}
					.ck .ck-widget .ck-widget__type-around__button:hover svg polyline {
						animation: none;
					}

					.ck .ck-widget .ck-widget__type-around__button:hover svg line {
						animation: none;
					}
			}
/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
.ck .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button, .ck .ck-widget:hover > .ck-widget__type-around > .ck-widget__type-around__button {
			opacity: 1;
			pointer-events: auto;
		}
/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
.ck .ck-widget:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}
/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
.ck .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	.ck .ck-widget > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);
	}
.ck .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button::after, .ck .ck-widget > .ck-widget__type-around > .ck-widget__type-around__button:hover::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
.ck .ck-widget.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}
/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
.ck .ck-widget .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}
/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before,
		.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover, .ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}
/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
.ck .ck-widget.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__button, .ck .ck-widget.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__button {
			opacity: 0;
			pointer-events: none;
		}
/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected > .ck-widget__selection-handle, .ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected > .ck-widget__selection-handle, .ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover > .ck-widget__selection-handle, .ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover > .ck-widget__selection-handle {
					opacity: 0
				}
/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer, .ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}
/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button, .ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover > .ck-widget__type-around > .ck-widget__type-around__button {
				opacity: 0;
				pointer-events: none;
			}
/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);
}
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) svg * {
		stroke: hsl(0,0%,60%);
	}
@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}
@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}
@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}
@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Based on default CKBox theme colors */
	--ck-image-processing-highlight-color: hsl(220, 10%, 98%);
	--ck-image-processing-background-color: hsl(220, 10%, 90%);
}

.ck.ck-editor__editable .image.image-processing {
			position: relative;
		}

.ck.ck-editor__editable .image.image-processing:before {
				content: '';

				position: absolute;
				top: 0;
				left: 0;
				z-index: 1;

				height: 100%;
				width: 100%;

				background: linear-gradient(
					90deg,
					var(--ck-image-processing-background-color),
					var(--ck-image-processing-highlight-color),
					var(--ck-image-processing-background-color)
				);
				background-size: 200% 100%;

				animation: ck-image-processing-animation 2s linear infinite;
			}

.ck.ck-editor__editable .image.image-processing img {
				height: 100%;
			}

@keyframes ck-image-processing-animation {
	0% {
		background-position: 200% 0;
	}
	100% {
		background-position: -200% 0;
	}
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
	 * Vertical drop target (in text).
	 */

.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;
	}

.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span {
			position: absolute;
			width: 0;
		}

/*
	 * Styles of the widget being dragged (its preview).
	 */

.ck.ck-editor__editable .ck-widget:-webkit-drag > .ck-widget__selection-handle {
			display: none;
		}

.ck.ck-editor__editable .ck-widget:-webkit-drag > .ck-widget__type-around {
			display: none;
		}

.ck.ck-clipboard-drop-target-line {
	position: absolute;
	pointer-events: none;
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content pre {
	padding: 1em;
	color: hsl(0, 0%, 20.8%);
	background: hsla(0, 0%, 78%, 0.3);
	border: 1px solid hsl(0, 0%, 77%);
	border-radius: 2px;

	/* Code block are language direction\u2013agnostic. */
	text-align: left;
	direction: ltr;

	tab-size: 4;
	white-space: pre-wrap;

	/* Don't inherit the style, e.g. when in a block quote. */
	font-style: normal;

	/* Don't let the code be squashed e.g. when in a table cell. */
	min-width: 200px;
}

.ck-content pre code {
		background: unset;
		padding: 0;
		border-radius: 0;
	}

.ck.ck-editor__editable pre {
	position: relative;
}

.ck.ck-editor__editable pre[data-language]::after {
		content: attr(data-language);
		position: absolute;
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;
}

.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-panel);
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar {
	border: none;
	border-bottom: 1px solid var(--ck-color-toolbar-border);
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;
}
.ck.ck-placeholder::before, .ck .ck-placeholder::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder::before {
		display: none;
	}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-find-result {
	background: var(--ck-color-highlight-background);
	color: var(--ck-color-text);
}

.ck-find-result_selected {
	background: hsl(29, 100%, 60%);
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-find-and-replace-form {
	max-width: 100%;
}

.ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs, .ck.ck-find-and-replace-form .ck-find-and-replace-form__actions {
		display: flex;

		/* The inputs area styles */
	}

.ck.ck-find-and-replace-form .ck-find-and-replace-form__inputs.ck-find-and-replace-form__inputs .ck-results-counter, .ck.ck-find-and-replace-form .ck-find-and-replace-form__actions.ck-find-and-replace-form__inputs .ck-results-counter {
			position: absolute;
		}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* The values should be synchronized with the "FONT_SIZE_PRESET_UNITS" object in the "/src/fontsize/utils.js" file. */

/* Styles should be prefixed with the \`.ck-content\` class.
See https://github.com/ckeditor/ckeditor5/issues/6636 */
.ck-content .text-tiny {
		font-size: .7em;
	}
.ck-content .text-small {
		font-size: .85em;
	}
.ck-content .text-big {
		font-size: 1.4em;
	}
.ck-content .text-huge {
		font-size: 1.8em;
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 .ck-button__label {
	font-size: 20px;
}

.ck.ck-heading_heading2 .ck-button__label {
	font-size: 17px;
}

.ck.ck-heading_heading3 .ck-button__label {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-highlight-marker-yellow: hsl(60, 97%, 73%);
	--ck-highlight-marker-green: hsl(120, 93%, 68%);
	--ck-highlight-marker-pink: hsl(345, 96%, 73%);
	--ck-highlight-marker-blue: hsl(201, 97%, 72%);
	--ck-highlight-pen-red: hsl(0, 85%, 49%);
	--ck-highlight-pen-green: hsl(112, 100%, 27%);
}

.ck-content .marker-yellow {
		background-color: var(--ck-highlight-marker-yellow);
	}
.ck-content .marker-green {
		background-color: var(--ck-highlight-marker-green);
	}
.ck-content .marker-pink {
		background-color: var(--ck-highlight-marker-pink);
	}
.ck-content .marker-blue {
		background-color: var(--ck-highlight-marker-blue);
	}

.ck-content .pen-red {
		color: var(--ck-highlight-pen-red);

		/* Override default yellow background of \`<mark>\` from user agent stylesheet */
		background-color: transparent;
	}
.ck-content .pen-green {
		color: var(--ck-highlight-pen-green);

		/* Override default yellow background of \`<mark>\` from user agent stylesheet */
		background-color: transparent;
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */


.ck-editor__editable .ck-horizontal-line {
	/* Necessary to render properly next to floated objects, e.g. side image case. */
	display: flow-root;
}

.ck-content hr {
	margin: 15px 0;
	height: 4px;
	background: hsl(0, 0%, 87%);
	border: 0;
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* The feature container. */
.ck-widget.raw-html-embed {
	/* Give the embed some air. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	position: relative;
	display: flow-root;

	/* Give the html embed some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (https://github.com/ckeditor/ckeditor5/issues/8331) */
	min-width: 15em;

	/* Don't inherit the style, e.g. when in a block quote. */
	font-style: normal;

	/* ----- Emebed label in the upper left corner ----------------------------------------------- */
}
.ck-widget.raw-html-embed::before {
		position: absolute;

		/* Make sure the content does not cover the label. */
		z-index: 1;
	}
/* ----- Emebed internals --------------------------------------------------------------------- */
/* The switch mode button wrapper. */
.ck-widget.raw-html-embed .raw-html-embed__buttons-wrapper {
		position: absolute;
		display: flex;
		flex-direction: column;
	}
.ck-widget.raw-html-embed .raw-html-embed__preview {
		position: relative;
		overflow: hidden;
		display: flex;
	}
.ck-widget.raw-html-embed .raw-html-embed__preview-content {
		width: 100%;
		position: relative;
		margin: auto;

		/* Gives spacing to the small renderable elements, so they always cover the placeholder. */
		display: table;
		border-collapse: separate;
		border-spacing: 7px;
	}
.ck-widget.raw-html-embed .raw-html-embed__preview-placeholder {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;

		display: flex;
		align-items: center;
		justify-content: center;
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-html-object-embed-unfocused-outline-width: 1px;
}

.ck-widget.html-object-embed {
	font-size: var(--ck-font-size-base);
	background-color: var(--ck-color-base-foreground);
	padding: var(--ck-spacing-small);
	/* Leave space for label */
	padding-top: calc(var(--ck-font-size-tiny) + var(--ck-spacing-large));
	min-width: calc(76px + var(--ck-spacing-standard));
}

.ck-widget.html-object-embed:not(.ck-widget_selected):not(:hover) {
		outline: var(--ck-html-object-embed-unfocused-outline-width) dashed var(--ck-color-widget-blurred-border);
	}

.ck-widget.html-object-embed::before {
		font-weight: normal;
		font-style: normal;
		position: absolute;
		content: attr(data-html-object-embed-label);
		top: 0;
		left: var(--ck-spacing-standard);
		background: hsl(0deg 0% 60%);
		transition: background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);
		padding: calc(var(--ck-spacing-tiny) + var(--ck-html-object-embed-unfocused-outline-width)) var(--ck-spacing-small) var(--ck-spacing-tiny);
		border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
		color: var(--ck-color-base-background);
		font-size: var(--ck-font-size-tiny);
		font-family: var(--ck-font-face);
	}

/* Make space for label. */

.ck-widget.html-object-embed .ck-widget__type-around .ck-widget__type-around__button.ck-widget__type-around__button_before {
		margin-left: 50px;
	}

.ck-widget.html-object-embed .html-object-embed__content {
		/* Disable user interaction with embed content */
		pointer-events: none;
	}

div.ck-widget.html-object-embed {
	margin: 1em auto;
}

span.ck-widget.html-object-embed {
	display: inline-block;
}


/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;

	/* Improve placeholder rendering in high-constrast mode (https://github.com/ckeditor/ckeditor5/issues/14907). */
}
@media (forced-colors: active) {
.ck-content .image > figcaption {
		background-color: unset;
		color: unset;
}
	}

/* Editing styles */
@media (forced-colors: none) {
		.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
		animation: ck-image-caption-highlight .6s ease-out;
		}
	}
@media (prefers-reduced-motion: reduce) {
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
		animation: none;
}
	}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-url {
	width: 400px;
	padding: var(--ck-spacing-large) var(--ck-spacing-large) 0;
}

.ck.ck-image-insert-url .ck-image-insert-url__action-row {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Preserve aspect ratio of the resized image after introducing image height attribute. */
.ck-content img.image_resized {
	height: auto;
}

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;
}

.ck-content .image.image_resized img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

.ck-content .image.image_resized > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}

/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */

.ck.ck-editor__editable td .image-inline.image_resized img, .ck.ck-editor__editable th .image-inline.image_resized img {
			max-width: 100%;
		}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-custom-resize-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: flex-start;
}

.ck.ck-image-custom-resize-form .ck-labeled-field-view {
		display: inline-block;
	}

.ck.ck-image-custom-resize-form .ck-label {
		display: none;
	}

@media screen and (max-width: 600px) {

.ck.ck-image-custom-resize-form {
		flex-wrap: wrap;
}

		.ck.ck-image-custom-resize-form .ck-labeled-field-view {
			flex-basis: 100%;
		}

		.ck.ck-image-custom-resize-form .ck-button {
			flex-basis: 50%;
		}
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

/* See: https://github.com/ckeditor/ckeditor5/issues/16317 */

/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
		confirming successful application of the style if image width exceeds the editor's size.
		See https://github.com/ckeditor/ckeditor5/issues/9342 */

.ck-content .image.image-style-block-align-left,
		.ck-content .image.image-style-block-align-right {
			max-width: calc(100% - var(--ck-image-style-spacing));
		}

/* Allows displaying multiple floating images in the same line.
		See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */

.ck-content .image.image-style-align-left,
		.ck-content .image.image-style-align-right {
			clear: none;
		}

.ck-content .image.image-style-side {
			float: right;
			margin-left: var(--ck-image-style-spacing);
			max-width: 50%;
		}

.ck-content .image.image-style-align-left {
			float: left;
			margin-right: var(--ck-image-style-spacing);
		}

.ck-content .image.image-style-align-right {
			float: right;
			margin-left: var(--ck-image-style-spacing);
		}

.ck-content .image.image-style-block-align-right {
			margin-right: 0;
			margin-left: auto;
		}

.ck-content .image.image-style-block-align-left {
			margin-left: 0;
			margin-right: auto;
		}

.ck-content .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

.ck-content .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

.ck-content .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */

.ck-content p + .image.image-style-align-left,
	.ck-content p + .image.image-style-align-right,
	.ck-content p + .image.image-style-side {
		margin-top: 0;
	}

.ck-content .image-inline.image-style-align-left,
		.ck-content .image-inline.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

.ck-content .image-inline.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

.ck-content .image-inline.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}

/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */

.ck.ck-splitbutton.ck-splitbutton_flatten:hover > .ck-splitbutton__action:not(.ck-disabled),
			.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open > .ck-splitbutton__action:not(.ck-disabled),
			.ck.ck-splitbutton.ck-splitbutton_flatten:hover > .ck-splitbutton__arrow:not(.ck-disabled),
			.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open > .ck-splitbutton__arrow:not(.ck-disabled),
			.ck.ck-splitbutton.ck-splitbutton_flatten:hover > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover),
			.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);
			}

.ck.ck-splitbutton.ck-splitbutton_flatten:hover > .ck-splitbutton__action:not(.ck-disabled)::after, .ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open > .ck-splitbutton__action:not(.ck-disabled)::after, .ck.ck-splitbutton.ck-splitbutton_flatten:hover > .ck-splitbutton__arrow:not(.ck-disabled)::after, .ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open > .ck-splitbutton__arrow:not(.ck-disabled)::after, .ck.ck-splitbutton.ck-splitbutton_flatten:hover > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover)::after, .ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover)::after {
					display: none;
				}

.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover > .ck-splitbutton__action:not(.ck-disabled),
			.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover > .ck-splitbutton__arrow:not(.ck-disabled),
			.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
}

.ck.ck-text-alternative-form .ck-labeled-field-view {
		display: inline-block;
	}

.ck.ck-text-alternative-form .ck-label {
		display: none;
	}

@media screen and (max-width: 600px) {

.ck.ck-text-alternative-form {
		flex-wrap: wrap;
}

		.ck.ck-text-alternative-form .ck-labeled-field-view {
			flex-basis: 100%;
		}

		.ck.ck-text-alternative-form .ck-button {
			flex-basis: 50%;
		}
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable .image,
	.ck.ck-editor__editable .image-inline {
		position: relative;
	}

/* Upload progress bar. */

.ck.ck-editor__editable .image .ck-progress-bar,
	.ck.ck-editor__editable .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;
}

.ck-image-upload-complete-icon::after {
		content: "";
		position: absolute;
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;
}

.ck .ck-upload-placeholder-loader::before {
		content: '';
		position: relative;
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;
	}

.ck-content .image img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%;

			/* Keep proportions of the block image if the height is set and the image is wider than the editor width.
			See https://github.com/ckeditor/ckeditor5/issues/14542. */
			height: auto;
		}

.ck-content .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
	}

.ck-content .image-inline picture {
			display: flex;
		}

/* When the picture is present, it must act like a resizable img. */

.ck-content .image-inline picture,
		.ck-content .image-inline img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}

/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */

.ck.ck-editor__editable .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */

.ck.ck-editor__editable .image {
		z-index: 1;

		/*
		 * Make sure the selected image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
	}

.ck.ck-editor__editable .image.ck-widget_selected {
			z-index: 2;
		}

/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */

.ck.ck-editor__editable .image-inline {
		z-index: 1;

		/*
		 * Make sure the selected inline image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
	}

.ck.ck-editor__editable .image-inline.ck-widget_selected {
			z-index: 2;

			/*
			 * Make sure the native browser selection style is not displayed.
			 * Inline image widgets have their own styles for the selected state and
			 * leaving this up to the browser is asking for a visual collision.
			 */
		}

.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection {
				display: none;
			}

/* Keep proportions of the inline image if the height is set and the image is wider than the editor width.
	See https://github.com/ckeditor/ckeditor5/issues/14542. */

.ck.ck-editor__editable .image-inline img {
		height: auto;
	}

/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */

.ck.ck-editor__editable td .image-inline img, .ck.ck-editor__editable th .image-inline img {
			max-width: none;
		}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable img.image_placeholder {
		background-size: 100% 100%;
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-link-form {
	display: flex;
	align-items: flex-start;
}

.ck.ck-link-form .ck-label {
		display: none;
	}

@media screen and (max-width: 600px) {

.ck.ck-link-form {
		flex-wrap: wrap;
}

		.ck.ck-link-form .ck-labeled-field-view {
			flex-basis: 100%;
		}

		.ck.ck-link-form .ck-button {
			flex-basis: 50%;
		}
	}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
}
.ck.ck-link-form_layout-vertical .ck-button.ck-button-save,
		.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
}

.ck.ck-link-actions .ck-link-actions__preview {
		display: inline-block;
	}

.ck.ck-link-actions .ck-link-actions__preview .ck-button__label {
			overflow: hidden;
		}

@media screen and (max-width: 600px) {

.ck.ck-link-actions {
		flex-wrap: wrap;
}

		.ck.ck-link-actions .ck-link-actions__preview {
			flex-basis: 100%;
		}

		.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Linked image indicator */

.ck.ck-editor__editable figure.image > a::after, .ck.ck-editor__editable a span.image-inline::after {
			display: block;
			position: absolute;
		}


/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;
}

.ck-content ol ol {
		list-style-type: lower-latin;
	}

.ck-content ol ol ol {
			list-style-type: lower-roman;
		}

.ck-content ol ol ol ol {
				list-style-type: upper-latin;
			}

.ck-content ol ol ol ol ol {
					list-style-type: upper-roman;
				}

.ck-content ul {
	list-style-type: disc;
}

.ck-content ul ul {
		list-style-type: circle;
	}

.ck-content ul ul ul {
			list-style-type: square;
		}

.ck-content ul ul ul ul {
				list-style-type: square;
			}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

/*
 * To-do list content styles.
 */
.ck-content .todo-list {
	list-style: none;
}
.ck-content .todo-list li {
		position: relative;
		margin-bottom: 5px;
	}
.ck-content .todo-list li .todo-list {
			margin-top: 5px;
		}
.ck-content .todo-list .todo-list__label > input {
			-webkit-appearance: none;
			display: inline-block;
			position: relative;
			width: var(--ck-todo-list-checkmark-size);
			height: var(--ck-todo-list-checkmark-size);
			vertical-align: middle;
			/* Needed on iOS */
			border: 0;
			/* LTR styles */
			left: -25px;
			margin-right: -15px;
			right: 0;
			margin-left: 0;
			/* RTL styles */
		}
.ck-content[dir=rtl] .todo-list .todo-list__label > input {
		left: 0;
		margin-right: 0;
		right: -25px;
		margin-left: -15px;
		}
.ck-content .todo-list .todo-list__label > input::before {
		display: block;
		position: absolute;
		box-sizing: border-box;
		content: '';
		width: 100%;
		height: 100%;
		border: 1px solid hsl(0, 0%, 20%);
		border-radius: 2px;
		transition: 250ms ease-in-out box-shadow;
	}
@media (prefers-reduced-motion: reduce) {
.ck-content .todo-list .todo-list__label > input::before {
			transition: none;
	}
		}
.ck-content .todo-list .todo-list__label > input::after {
		display: block;
		position: absolute;
		box-sizing: content-box;
		pointer-events: none;
		content: '';

		/* Calculate tick position, size and border-width proportional to the checkmark size. */
		left: calc( var(--ck-todo-list-checkmark-size) / 3 );
		top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
		border-style: solid;
		border-color: transparent;
		border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
		transform: rotate(45deg);
	}
.ck-content .todo-list .todo-list__label > input[checked]::before {
			background: hsl(126, 64%, 41%);
			border-color: hsl(126, 64%, 41%);
		}
.ck-content .todo-list .todo-list__label > input[checked]::after {
			border-color: hsl(0, 0%, 100%);
		}
.ck-content .todo-list .todo-list__label .todo-list__label__description {
			vertical-align: middle;
		}
.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox] {
			position: absolute;
		}

/*
 * To-do list editing view styles.
 */
/*
	 * To-do list should be interactive only during the editing
	 * (https://github.com/ckeditor/ckeditor5/issues/2090).
	 */
.ck-editor__editable.ck-content .todo-list .todo-list__label > input,
	.ck-editor__editable.ck-content .todo-list .todo-list__label > span[contenteditable=false] > input {
		cursor: pointer;
	}
.ck-editor__editable.ck-content .todo-list .todo-list__label > input:hover::before, .ck-editor__editable.ck-content .todo-list .todo-list__label > span[contenteditable=false] > input:hover::before {
			box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
		}
/*
	 * Document Lists - editing view has an additional span around checkbox.
	 */
.ck-editor__editable.ck-content .todo-list .todo-list__label > span[contenteditable=false] > input {
		-webkit-appearance: none;
		display: inline-block;
		position: relative;
		width: var(--ck-todo-list-checkmark-size);
		height: var(--ck-todo-list-checkmark-size);
		vertical-align: middle;
		/* Needed on iOS */
		border: 0;
		/* LTR styles */
		left: -25px;
		margin-right: -15px;
		right: 0;
		margin-left: 0;
		/* RTL styles */
	}
.ck-editor__editable.ck-content[dir=rtl] .todo-list .todo-list__label > span[contenteditable=false] > input {
		left: 0;
		margin-right: 0;
		right: -25px;
		margin-left: -15px;
	}
.ck-editor__editable.ck-content .todo-list .todo-list__label > span[contenteditable=false] > input::before {
		display: block;
		position: absolute;
		box-sizing: border-box;
		content: '';
		width: 100%;
		height: 100%;
		border: 1px solid hsl(0, 0%, 20%);
		border-radius: 2px;
		transition: 250ms ease-in-out box-shadow;
	}
@media (prefers-reduced-motion: reduce) {
.ck-editor__editable.ck-content .todo-list .todo-list__label > span[contenteditable=false] > input::before {
			transition: none;
	}
		}
.ck-editor__editable.ck-content .todo-list .todo-list__label > span[contenteditable=false] > input::after {
		display: block;
		position: absolute;
		box-sizing: content-box;
		pointer-events: none;
		content: '';

		/* Calculate tick position, size and border-width proportional to the checkmark size. */
		left: calc( var(--ck-todo-list-checkmark-size) / 3 );
		top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
		border-style: solid;
		border-color: transparent;
		border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
		transform: rotate(45deg);
	}
.ck-editor__editable.ck-content .todo-list .todo-list__label > span[contenteditable=false] > input[checked]::before {
			background: hsl(126, 64%, 41%);
			border-color: hsl(126, 64%, 41%);
		}
.ck-editor__editable.ck-content .todo-list .todo-list__label > span[contenteditable=false] > input[checked]::after {
			border-color: hsl(0, 0%, 100%);
		}
.ck-editor__editable.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox] {
			position: absolute;
		}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;
		}

.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}

.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *, .ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *, .ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *, .ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *, .ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *, .ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *, .ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon * {
			display: none;
		}

/* Disable all mouse interaction as long as the editor is not read\u2013only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-vertical-form .ck-button::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

.ck-vertical-form .ck-button:focus::after {
		display: none;
	}

@media screen and (max-width: 600px) {
			.ck.ck-responsive-form .ck-button::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			.ck.ck-responsive-form .ck-button:focus::after {
				display: none;
			}
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;
	width: 400px;
}

.ck.ck-media-form .ck-labeled-field-view {
		display: inline-block;
		width: 100%;
	}

.ck.ck-media-form .ck-label {
		display: none;
	}

.ck.ck-media-form .ck-input {
		width: 100%;
	}

@media screen and (max-width: 600px) {

.ck.ck-media-form {
		flex-wrap: wrap;
}

		.ck.ck-media-form .ck-labeled-field-view {
			flex-basis: 100%;
		}

		.ck.ck-media-form .ck-button {
			flex-basis: 50%;
		}
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-mention-list-max-height: 300px;
}

.ck.ck-mentions {
	max-height: var(--ck-mention-list-max-height);

	overflow-y: auto;

	/* Prevent unnecessary horizontal scrollbar in Safari
	https://github.com/ckeditor/ckeditor5-mention/issues/41 */
	overflow-x: hidden;

	overscroll-behavior: contain;

	/* Prevent unnecessary vertical scrollbar in Safari
	https://github.com/ckeditor/ckeditor5-mention/issues/41 */
}

.ck.ck-mentions > .ck-list__item {
		overflow: hidden;
		flex-shrink: 0;
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-minimap-tracker-background: 208, 0%, 51%;
	--ck-color-minimap-iframe-outline: hsl(0deg 0% 75%);
	--ck-color-minimap-iframe-shadow: hsl(0deg 0% 0% / 11%);
	--ck-color-minimap-progress-background: hsl(0,0%,40%);
}

.ck.ck-minimap {
	position: absolute;
	user-select: none;
	background: var(--ck-color-base-background);
}

.ck.ck-minimap,
	.ck.ck-minimap iframe {
		width: 100%;
		height: 100%;
	}

.ck.ck-minimap iframe {
		border: 0;
		pointer-events: none;
		position: relative;
		outline: 1px solid var(--ck-color-minimap-iframe-outline);
		box-shadow: 0 2px 5px var(--ck-color-minimap-iframe-shadow);
		margin: 0;
	}

.ck.ck-minimap .ck.ck-minimap__position-tracker {
		position: absolute;
		width: 100%;
		top: 0;
		background: hsla( var(--ck-color-minimap-tracker-background), .2 );
		z-index: 1;
		transition: background 100ms ease-in-out;
	}

@media (prefers-reduced-motion: reduce) {

.ck.ck-minimap .ck.ck-minimap__position-tracker {
			transition: none;
	}
		}

.ck.ck-minimap .ck.ck-minimap__position-tracker:hover {
			background:hsla( var(--ck-color-minimap-tracker-background), .3 );
		}

.ck.ck-minimap .ck.ck-minimap__position-tracker.ck-minimap__position-tracker_dragging,
		.ck.ck-minimap .ck.ck-minimap__position-tracker.ck-minimap__position-tracker_dragging:hover {
			background:hsla( var(--ck-color-minimap-tracker-background), .4 );
		}

.ck.ck-minimap .ck.ck-minimap__position-tracker.ck-minimap__position-tracker_dragging::after, .ck.ck-minimap .ck.ck-minimap__position-tracker.ck-minimap__position-tracker_dragging:hover::after {
				opacity: 1;
			}

.ck.ck-minimap .ck.ck-minimap__position-tracker::after {
			content: attr(data-progress) "%";
			position: absolute;
			top: 5px;
			right: 5px;
			background: var(--ck-color-minimap-progress-background);
			color: var(--ck-color-base-background);
			border: 1px solid var(--ck-color-base-background);
			padding: 2px 4px;
			font-size: 10px;
			border-radius: 3px;
			opacity: 0;
			transition: opacity 100ms ease-in-out;
		}

@media (prefers-reduced-motion: reduce) {

.ck.ck-minimap .ck.ck-minimap__position-tracker::after {
				transition: none;
		}
			}


/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .page-break {
	position: relative;
	clear: both;
	padding: 5px 0;
	display: flex;
	align-items: center;
	justify-content: center;
}

.ck-content .page-break::after {
		content: '';
		position: absolute;
		border-bottom: 2px dashed hsl(0, 0%, 77%);
		width: 100%;
	}

.ck-content .page-break__label {
	position: relative;
	z-index: 1;
	padding: .3em .6em;
	display: block;
	text-transform: uppercase;
	border: 1px solid hsl(0, 0%, 77%);
	border-radius: 2px;
	font-family: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;
	font-size: 0.75em;
	font-weight: bold;
	color: hsl(0, 0%, 20%);
	background: hsl(0, 0%, 100%);
	box-shadow: 2px 2px 1px hsla(0, 0%, 0%, 0.15);

	/* Disable the possibility to select the label text by the user. */
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

/* Do not show the page break element inside the print preview window. */
@media print {
	.ck-content .page-break {
		padding: 0;
	}

		.ck-content .page-break::after {
			display: none;
		}

	/*
	 * From time to time placing page-break directly after a block element with margin causes appending a new blank page in pagination mode.
	 * Removing margin-bottom from the block element fixes that issue and the margin is not being moved to the next blank page.
	 *
	 * Keep this in sync with the pagination plugins.
	 */
	.ck-content *:has(+ .page-break) {
		margin-bottom: 0;
	}
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-show-blocks-border-color: hsl(0, 0%, 46%);
}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) address {
		background-repeat: no-repeat;
		padding-top: 15px;
		/* Fix for Multi-root editor
	https://github.com/ckeditor/ckeditor5/issues/15969 */
	}

[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) address {
		background-image: url(${le});
		background-position: 1px 1px;
	}

[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) address {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>ADDRESS</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) address:not(.ck-widget_selected):not(.ck-widget:hover) {
		outline: 1px dashed var(--ck-show-blocks-border-color);
	}

[dir="ltr"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) address {
		background-image: url(${le});
		background-position: 1px 1px;
	}

[dir="rtl"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) address {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>ADDRESS</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) aside {
		background-repeat: no-repeat;
		padding-top: 15px;
		/* Fix for Multi-root editor
	https://github.com/ckeditor/ckeditor5/issues/15969 */
	}

[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) aside {
		background-image: url(${G});
		background-position: 1px 1px;
	}

[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) aside {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>ASIDE</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) aside:not(.ck-widget_selected):not(.ck-widget:hover) {
		outline: 1px dashed var(--ck-show-blocks-border-color);
	}

[dir="ltr"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) aside {
		background-image: url(${G});
		background-position: 1px 1px;
	}

[dir="rtl"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) aside {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>ASIDE</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) blockquote {
		background-repeat: no-repeat;
		padding-top: 15px;
		/* Fix for Multi-root editor
	https://github.com/ckeditor/ckeditor5/issues/15969 */
	}

[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) blockquote {
		background-image: url(${J});
		background-position: 1px 1px;
	}

[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) blockquote {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>BLOCKQUOTE</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) blockquote:not(.ck-widget_selected):not(.ck-widget:hover) {
		outline: 1px dashed var(--ck-show-blocks-border-color);
	}

[dir="ltr"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) blockquote {
		background-image: url(${J});
		background-position: 1px 1px;
	}

[dir="rtl"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) blockquote {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>BLOCKQUOTE</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) details {
		background-repeat: no-repeat;
		padding-top: 15px;
		/* Fix for Multi-root editor
	https://github.com/ckeditor/ckeditor5/issues/15969 */
	}

[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) details {
		background-image: url(${se});
		background-position: 1px 1px;
	}

[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) details {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>DETAILS</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) details:not(.ck-widget_selected):not(.ck-widget:hover) {
		outline: 1px dashed var(--ck-show-blocks-border-color);
	}

[dir="ltr"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) details {
		background-image: url(${se});
		background-position: 1px 1px;
	}

[dir="rtl"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) details {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>DETAILS</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) div:not(.ck-widget, .ck-widget *) {
		background-repeat: no-repeat;
		padding-top: 15px;
		/* Fix for Multi-root editor
	https://github.com/ckeditor/ckeditor5/issues/15969 */
	}

[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) div:not(.ck-widget, .ck-widget *) {
		background-image: url(${de});
		background-position: 1px 1px;
	}

[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) div:not(.ck-widget, .ck-widget *) {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>DIV</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) div:not(.ck-widget, .ck-widget *):not(.ck-widget_selected):not(.ck-widget:hover) {
		outline: 1px dashed var(--ck-show-blocks-border-color);
	}

[dir="ltr"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) div:not(.ck-widget, .ck-widget *) {
		background-image: url(${de});
		background-position: 1px 1px;
	}

[dir="rtl"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) div:not(.ck-widget, .ck-widget *) {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>DIV</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) footer {
		background-repeat: no-repeat;
		padding-top: 15px;
		/* Fix for Multi-root editor
	https://github.com/ckeditor/ckeditor5/issues/15969 */
	}

[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) footer {
		background-image: url(${De});
		background-position: 1px 1px;
	}

[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) footer {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>FOOTER</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) footer:not(.ck-widget_selected):not(.ck-widget:hover) {
		outline: 1px dashed var(--ck-show-blocks-border-color);
	}

[dir="ltr"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) footer {
		background-image: url(${De});
		background-position: 1px 1px;
	}

[dir="rtl"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) footer {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>FOOTER</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h1 {
		background-repeat: no-repeat;
		padding-top: 15px;
		/* Fix for Multi-root editor
	https://github.com/ckeditor/ckeditor5/issues/15969 */
	}

[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h1 {
		background-image: url(${ke});
		background-position: 1px 1px;
	}

[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h1 {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H1</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h1:not(.ck-widget_selected):not(.ck-widget:hover) {
		outline: 1px dashed var(--ck-show-blocks-border-color);
	}

[dir="ltr"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h1 {
		background-image: url(${ke});
		background-position: 1px 1px;
	}

[dir="rtl"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h1 {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H1</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h2 {
		background-repeat: no-repeat;
		padding-top: 15px;
		/* Fix for Multi-root editor
	https://github.com/ckeditor/ckeditor5/issues/15969 */
	}

[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h2 {
		background-image: url(${pe});
		background-position: 1px 1px;
	}

[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h2 {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H2</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h2:not(.ck-widget_selected):not(.ck-widget:hover) {
		outline: 1px dashed var(--ck-show-blocks-border-color);
	}

[dir="ltr"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h2 {
		background-image: url(${pe});
		background-position: 1px 1px;
	}

[dir="rtl"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h2 {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H2</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h3 {
		background-repeat: no-repeat;
		padding-top: 15px;
		/* Fix for Multi-root editor
	https://github.com/ckeditor/ckeditor5/issues/15969 */
	}

[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h3 {
		background-image: url(${A});
		background-position: 1px 1px;
	}

[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h3 {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H3</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h3:not(.ck-widget_selected):not(.ck-widget:hover) {
		outline: 1px dashed var(--ck-show-blocks-border-color);
	}

[dir="ltr"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h3 {
		background-image: url(${A});
		background-position: 1px 1px;
	}

[dir="rtl"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h3 {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H3</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h4 {
		background-repeat: no-repeat;
		padding-top: 15px;
		/* Fix for Multi-root editor
	https://github.com/ckeditor/ckeditor5/issues/15969 */
	}

[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h4 {
		background-image: url(${Q});
		background-position: 1px 1px;
	}

[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h4 {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H4</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h4:not(.ck-widget_selected):not(.ck-widget:hover) {
		outline: 1px dashed var(--ck-show-blocks-border-color);
	}

[dir="ltr"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h4 {
		background-image: url(${Q});
		background-position: 1px 1px;
	}

[dir="rtl"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h4 {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H4</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h5 {
		background-repeat: no-repeat;
		padding-top: 15px;
		/* Fix for Multi-root editor
	https://github.com/ckeditor/ckeditor5/issues/15969 */
	}

[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h5 {
		background-image: url(${q});
		background-position: 1px 1px;
	}

[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h5 {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H5</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h5:not(.ck-widget_selected):not(.ck-widget:hover) {
		outline: 1px dashed var(--ck-show-blocks-border-color);
	}

[dir="ltr"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h5 {
		background-image: url(${q});
		background-position: 1px 1px;
	}

[dir="rtl"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h5 {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H5</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h6 {
		background-repeat: no-repeat;
		padding-top: 15px;
		/* Fix for Multi-root editor
	https://github.com/ckeditor/ckeditor5/issues/15969 */
	}

[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h6 {
		background-image: url(${ee});
		background-position: 1px 1px;
	}

[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h6 {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H6</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h6:not(.ck-widget_selected):not(.ck-widget:hover) {
		outline: 1px dashed var(--ck-show-blocks-border-color);
	}

[dir="ltr"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h6 {
		background-image: url(${ee});
		background-position: 1px 1px;
	}

[dir="rtl"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) h6 {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>H6</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) header {
		background-repeat: no-repeat;
		padding-top: 15px;
		/* Fix for Multi-root editor
	https://github.com/ckeditor/ckeditor5/issues/15969 */
	}

[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) header {
		background-image: url(${ge});
		background-position: 1px 1px;
	}

[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) header {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>HEADER</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) header:not(.ck-widget_selected):not(.ck-widget:hover) {
		outline: 1px dashed var(--ck-show-blocks-border-color);
	}

[dir="ltr"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) header {
		background-image: url(${ge});
		background-position: 1px 1px;
	}

[dir="rtl"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) header {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>HEADER</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) main {
		background-repeat: no-repeat;
		padding-top: 15px;
		/* Fix for Multi-root editor
	https://github.com/ckeditor/ckeditor5/issues/15969 */
	}

[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) main {
		background-image: url(${ue});
		background-position: 1px 1px;
	}

[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) main {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>MAIN</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) main:not(.ck-widget_selected):not(.ck-widget:hover) {
		outline: 1px dashed var(--ck-show-blocks-border-color);
	}

[dir="ltr"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) main {
		background-image: url(${ue});
		background-position: 1px 1px;
	}

[dir="rtl"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) main {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>MAIN</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) nav {
		background-repeat: no-repeat;
		padding-top: 15px;
		/* Fix for Multi-root editor
	https://github.com/ckeditor/ckeditor5/issues/15969 */
	}

[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) nav {
		background-image: url(${he});
		background-position: 1px 1px;
	}

[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) nav {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>NAV</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) nav:not(.ck-widget_selected):not(.ck-widget:hover) {
		outline: 1px dashed var(--ck-show-blocks-border-color);
	}

[dir="ltr"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) nav {
		background-image: url(${he});
		background-position: 1px 1px;
	}

[dir="rtl"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) nav {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>NAV</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) pre {
		background-repeat: no-repeat;
		padding-top: 15px;
		/* Fix for Multi-root editor
	https://github.com/ckeditor/ckeditor5/issues/15969 */
	}

[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) pre {
		background-image: url(${O});
		background-position: 1px 1px;
	}

[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) pre {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>PRE</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) pre:not(.ck-widget_selected):not(.ck-widget:hover) {
		outline: 1px dashed var(--ck-show-blocks-border-color);
	}

[dir="ltr"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) pre {
		background-image: url(${O});
		background-position: 1px 1px;
	}

[dir="rtl"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) pre {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>PRE</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) ol {
		background-repeat: no-repeat;
		padding-top: 15px;
		/* Fix for Multi-root editor
	https://github.com/ckeditor/ckeditor5/issues/15969 */
	}

[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) ol {
		background-image: url(${be});
		background-position: 1px 1px;
	}

[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) ol {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>OL</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) ol:not(.ck-widget_selected):not(.ck-widget:hover) {
		outline: 1px dashed var(--ck-show-blocks-border-color);
	}

[dir="ltr"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) ol {
		background-image: url(${be});
		background-position: 1px 1px;
	}

[dir="rtl"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) ol {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>OL</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) ul {
		background-repeat: no-repeat;
		padding-top: 15px;
		/* Fix for Multi-root editor
	https://github.com/ckeditor/ckeditor5/issues/15969 */
	}

[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) ul {
		background-image: url(${X});
		background-position: 1px 1px;
	}

[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) ul {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>UL</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) ul:not(.ck-widget_selected):not(.ck-widget:hover) {
		outline: 1px dashed var(--ck-show-blocks-border-color);
	}

[dir="ltr"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) ul {
		background-image: url(${X});
		background-position: 1px 1px;
	}

[dir="rtl"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) ul {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>UL</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) p {
		background-repeat: no-repeat;
		padding-top: 15px;
		/* Fix for Multi-root editor
	https://github.com/ckeditor/ckeditor5/issues/15969 */
	}

[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) p {
		background-image: url(${Oe});
		background-position: 1px 1px;
	}

[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) p {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>P</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) p:not(.ck-widget_selected):not(.ck-widget:hover) {
		outline: 1px dashed var(--ck-show-blocks-border-color);
	}

[dir="ltr"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) p {
		background-image: url(${Oe});
		background-position: 1px 1px;
	}

[dir="rtl"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) p {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>P</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) section {
		background-repeat: no-repeat;
		padding-top: 15px;
		/* Fix for Multi-root editor
	https://github.com/ckeditor/ckeditor5/issues/15969 */
	}

[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) section {
		background-image: url(${me});
		background-position: 1px 1px;
	}

[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) section {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>SECTION</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) section:not(.ck-widget_selected):not(.ck-widget:hover) {
		outline: 1px dashed var(--ck-show-blocks-border-color);
	}

[dir="ltr"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) section {
		background-image: url(${me});
		background-position: 1px 1px;
	}

[dir="rtl"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) section {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>SECTION</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) :where(figure.image, figure.table) figcaption {
		background-repeat: no-repeat;
		padding-top: 15px;
		/* Fix for Multi-root editor
	https://github.com/ckeditor/ckeditor5/issues/15969 */
	}

[dir=ltr] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) :where(figure.image, figure.table) figcaption {
		background-image: url(${oe});
		background-position: 1px 1px;
	}

[dir=rtl] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) :where(figure.image, figure.table) figcaption {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>FIGCAPTION</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

.ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) :where(figure.image, figure.table) figcaption:not(.ck-widget_selected):not(.ck-widget:hover) {
		outline: 1px dashed var(--ck-show-blocks-border-color);
	}

[dir="ltr"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) :where(figure.image, figure.table) figcaption {
		background-image: url(${oe});
		background-position: 1px 1px;
	}

[dir="rtl"] .ck.ck-editor__editable.ck-editor__editable_inline.ck-show-blocks:not(.ck-widget) :where(figure.image, figure.table) figcaption {
		background-image: url("data:image/svg+xml;utf8,<svg width='120' height='12' xmlns='http://www.w3.org/2000/svg' ><text style='paint-order:stroke fill; clip-path: inset(-3px); transform:translate(-2px, 0)' stroke='%23EAEAEA' stroke-width='13' dominant-baseline='middle' fill='black' x='100%' text-anchor='end' y='7' font-size='9px' font-family='Consolas, %22Lucida Console%22, %22Lucida Sans Typewriter%22, %22DejaVu Sans Mono%22, %22Bitstream Vera Sans Mono%22, %22Liberation Mono%22, Monaco, %22Courier New%22, Courier, monospace'>FIGCAPTION</text></svg>");
		background-position: calc(100% - 1px) 1px;
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A visual style of focused element's border.
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A helper to combine multiple shadows.
 */
/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */

.ck-source-editing-area {
	position: relative;
	overflow: hidden;
}

.ck-source-editing-area::after,
.ck-source-editing-area textarea {
	padding: var(--ck-spacing-large);
	margin: 0;
	border: 1px solid transparent;
	line-height: var(--ck-line-height-base);
	font-size: var(--ck-font-size-normal);
	font-family: monospace;
	white-space: pre-wrap;
}

.ck-source-editing-area::after {
	content: attr(data-value) " ";
	visibility: hidden;
	display: block;
}

.ck-source-editing-area textarea {
	position: absolute;
	width: 100%;
	height: 100%;
	resize: none;
	outline: none;
	overflow: hidden;
	box-sizing: border-box;

	border-color: var(--ck-color-base-border);

	border-radius: 0;
}

.ck-rounded-corners .ck-source-editing-area textarea, .ck-source-editing-area textarea.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		border-top-left-radius: 0;
		border-top-right-radius: 0;
}

.ck-source-editing-area textarea:not([readonly]):focus {
		/* Disable native outline. */
		outline: none;
		border: var(--ck-focus-ring);
		box-shadow: var(--ck-inner-shadow), 0 0;
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-character-grid {
	max-width: 100%;
}

.ck.ck-character-grid .ck-character-grid__tiles {
		display: grid;
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-character-info {
	display: flex;
	justify-content: space-between;
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * Note: This file should contain the wireframe styles only. But since there are no such styles,
 * it acts as a message to the builder telling that it should look for the corresponding styles
 * **in the theme** when compiling the editor.
 */

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-special-characters > .ck-dialog__content > div {
		width: 350px;
		max-width: 100%;
		height: 100%;

		display: grid;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr auto;
	}

.ck.ck-special-characters > .ck-dialog__content > div > .ck-character-categories {
			grid-area: 1 / 1 / 2 / 2;
			padding: var(--ck-spacing-medium) var(--ck-spacing-large);
		}

.ck.ck-special-characters > .ck-dialog__content > div > .ck-character-categories > .ck-labeled-field-view {
				padding-top: var(--ck-spacing-standard);
				width: 100%;
			}

.ck.ck-special-characters > .ck-dialog__content > div > .ck-character-categories > .ck-labeled-field-view .ck.ck-labeled-field-view__status {
					background: var(--ck-color-base-error);
					color: var(--ck-color-base-background);
					padding: var(--ck-spacing-small) var(--ck-spacing-medium);
					min-width: var(--ck-table-properties-min-error-width);
					text-align: center;

					animation: ck-table-form-labeled-view-status-appear .15s ease both;

					/* The arrow pointing towards the field. */
				}

.ck.ck-special-characters > .ck-dialog__content > div > .ck-character-categories > .ck-labeled-field-view .ck.ck-labeled-field-view__status::after {
						border-color: transparent transparent var(--ck-color-base-error) transparent;
						border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
						border-style: solid;
					}

@media (prefers-reduced-motion: reduce) {

.ck.ck-special-characters > .ck-dialog__content > div > .ck-character-categories > .ck-labeled-field-view .ck.ck-labeled-field-view__status {
						animation: none;
				}
					}

/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */

.ck.ck-special-characters > .ck-dialog__content > div > .ck-character-categories > .ck-labeled-field-view .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
					display: none;
				}

.ck.ck-special-characters > .ck-dialog__content > div > .ck-character-categories > .ck-labeled-field-view > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}

.ck.ck-special-characters > .ck-dialog__content > div > .ck-character-categories .ck-dropdown {
				display: block;
				width: 100%;
			}

.ck.ck-special-characters > .ck-dialog__content > div > .ck-character-categories .ck-dropdown > button:not(:focus) {
						border: 1px solid var(--ck-color-base-border);
					}

.ck.ck-special-characters > .ck-dialog__content > div > .ck-character-categories .ck-dropdown > button > span {
						width: 100%;
					}

.ck.ck-special-characters > .ck-dialog__content > div > .ck-character-grid {
			grid-area: 2 / 1 / 3 / 2;
			max-height: 200px;
		}

.ck.ck-special-characters > .ck-dialog__content > div > .ck-character-info {
			grid-area: 3 / 1 / 4 / 2;
		}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-style-panel-columns: 3;
}

.ck.ck-style-panel .ck-style-grid {
	display: grid;
	grid-template-columns: repeat(var(--ck-style-panel-columns),auto);
	justify-content: start;
}

.ck.ck-style-panel .ck-style-grid .ck-style-grid__button {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}

.ck.ck-style-panel .ck-style-grid .ck-style-grid__button .ck-style-grid__button__preview {
			display: flex;
			align-content: center;
			justify-content: flex-start;
			align-items: center;
			flex-grow: 1;
			flex-basis: 100%;
		}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;
}

.ck-content .table table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);
	}

.ck-content .table table td,
		.ck-content .table table th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

.ck-content .table table th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}

/**
 * Expanding the table to the full height of the parent container is necessary because tables
 * are rendered inside <figure> elements, which is kinda buggy in table height calculation.
 * While setting \`height: 100%\` fixes the issue in the editing mode described here:
 * https://github.com/ckeditor/ckeditor5/issues/6186
 *
 * it's causing another issue with the table height in the print preview mode here:
 * https://github.com/ckeditor/ckeditor5/issues/16856
 *
 * For now, resetting the height to \`initial\` in the print mode works as a workaround.
 */
@media print {
	.ck-content .table table {
		height: initial;
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
}

.ck.ck-form__row > *:not(.ck-label) {
		flex-grow: 1;
	}

.ck.ck-form__row.ck-table-form__action-row .ck-button-save,
		.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel {
			justify-content: center;
		}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;
		}

.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button {
					flex-grow: 1;
				}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;
}

.ck.ck-input-color > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

.ck.ck-input-color > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
	}

.ck.ck-input-color > div.ck.ck-dropdown > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}

.ck.ck-input-color .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;
	}

.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;
		}

.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form .ck-form__row.ck-table-form__border-row {
			flex-wrap: wrap;
		}

.ck.ck-table-form .ck-form__row.ck-table-form__background-row {
			flex-wrap: wrap;
		}

.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;
		}

.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;
			}

.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown {
					flex-grow: 0;
				}

.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator {
				flex-grow: 0;
			}

.ck.ck-table-form .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;
	}

.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
		}

.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;
		}

.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-caption-background: hsl(0, 0%, 97%);
	--ck-color-selector-caption-text: hsl(0, 0%, 20%);
	--ck-color-selector-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-selector-caption-text);
	background-color: var(--ck-color-selector-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;

	/* Improve placeholder rendering in high-constrast mode (https://github.com/ckeditor/ckeditor5/issues/14907). */
}
@media (forced-colors: active) {
		.ck-content .table > figcaption {
		background-color: unset;
		color: unset;
		}
	}

/* Editing styles */
@media (forced-colors: none) {
		.ck.ck-editor__editable .table > figcaption.table__caption_highlighted {
			animation: ck-table-caption-highlight .6s ease-out;
		}
	}
.ck.ck-editor__editable .table > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-selector-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-selector-caption-background);
	}
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	/* To prevent text overflowing beyond its cell when columns are resized by resize handler
	(https://github.com/ckeditor/ckeditor5/pull/14379#issuecomment-1589460978). */
	overflow-wrap: break-word;
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	top: 0;
	bottom: 0;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-selector-column-resizer-hover);
	opacity: 0.25;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */

.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-z-default: 1;
	--ck-z-panel: calc( var(--ck-z-default) + 999 );
	--ck-z-dialog: 9999;
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
:root {
	--ck-powered-by-line-height: 10px;
	--ck-powered-by-padding-vertical: 2px;
	--ck-powered-by-padding-horizontal: 4px;
	--ck-powered-by-text-color: hsl(0, 0%, 31%);
	--ck-powered-by-border-radius: var(--ck-border-radius);
	--ck-powered-by-background: hsl(0, 0%, 100%);
	--ck-powered-by-border-color: var(--ck-color-focus-border);
}
.ck.ck-balloon-panel.ck-powered-by-balloon {
	--ck-border-radius: var(--ck-powered-by-border-radius);

	box-shadow: none;
	background: var(--ck-powered-by-background);
	min-height: unset;
	z-index: calc( var(--ck-z-panel) - 1 );
}
.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by {
		line-height: var(--ck-powered-by-line-height);
	}
.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a {
			cursor: pointer;
			display: flex;
			align-items: center;
			opacity: .66;
			filter: grayscale(80%);
			line-height: var(--ck-powered-by-line-height);
			padding: var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal);
		}
.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label {
			font-size: 7.5px;
			letter-spacing: -.2px;
			padding-left: 2px;
			text-transform: uppercase;
			font-weight: bold;
			margin-right: 4px;
			cursor: pointer;
			line-height: normal;
			color: var(--ck-powered-by-text-color);

		}
.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon {
			display: block;
			cursor: pointer;
		}
.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a {
				filter: grayscale(0%);
				opacity: 1;
			}
.ck.ck-balloon-panel.ck-powered-by-balloon[class*="position_inside"] {
		border-color: transparent;
	}
.ck.ck-balloon-panel.ck-powered-by-balloon[class*="position_border"] {
		border: var(--ck-focus-ring);
		border-color: var(--ck-powered-by-border-color);
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button,
a.ck.ck-button {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;

	position: relative;
	display: inline-flex;
	align-items: center;
}

[dir="ltr"] .ck.ck-button,
[dir="ltr"] a.ck.ck-button {
		justify-content: left;
}

[dir="rtl"] .ck.ck-button,
[dir="rtl"] a.ck.ck-button {
		justify-content: right;
}

.ck.ck-button .ck-button__label, a.ck.ck-button .ck-button__label {
		display: none;
	}

.ck.ck-button.ck-button_with-text .ck-button__label, a.ck.ck-button.ck-button_with-text .ck-button__label {
			display: inline-block;
		}

/* Center the icon horizontally in a button without text. */

.ck.ck-button:not(.ck-button_with-text),  a.ck.ck-button:not(.ck-button_with-text)  {
		justify-content: center;
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton .ck-button__toggle {
		display: block;
	}

.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner {
			display: block;
		}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-item-button {
	min-height: unset;
	width: 100%;
	border-radius: 0;
}

[dir="ltr"] .ck.ck-list-item-button {
		text-align: left;
}

[dir="rtl"] .ck.ck-list-item-button {
		text-align: right;
}

[dir="ltr"] .ck.ck-list-item-button.ck-list-item-button_toggleable {
			padding-left: var(--ck-spacing-small);
	}

[dir="rtl"] .ck.ck-list-item-button.ck-list-item-button_toggleable {
			padding-right: var(--ck-spacing-small);
	}

.ck.ck-list-item-button .ck-list-item-button__check-holder {
		display: inline-flex;
		width: .9em;
		height: .9em;
	}

[dir="ltr"] .ck.ck-list-item-button .ck-list-item-button__check-holder {
			margin-right: var(--ck-spacing-small);
	}

[dir="rtl"] .ck.ck-list-item-button .ck-list-item-button__check-holder {
			margin-left: var(--ck-spacing-small);
	}

.ck.ck-list-item-button .ck-list-item-button__check-icon {
		height: 100%;
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed > .ck-collapsible__children {
		display: none;
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.color-picker-hex-input {
	width: max-content;
}

.color-picker-hex-input .ck.ck-input {
		min-width: unset;
	}

.ck.ck-color-picker__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	margin: var(--ck-spacing-large) 0 0;
	width: unset;
}

.ck.ck-color-picker__row .ck.ck-labeled-field-view {
		padding-top: unset;
	}

.ck.ck-color-picker__row .ck.ck-input-text {
		width: unset;
	}

.ck.ck-color-picker__row .ck-color-picker__hash-view {
		padding-top: var(--ck-spacing-tiny);
		padding-right: var(--ck-spacing-medium);
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* View fragment with color grids. */

.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color,
		.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker {
			display: flex;
			align-items: center;
		}

[dir="rtl"] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color,
		[dir="rtl"] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker {
				justify-content: flex-start;
		}

/* View fragment with a color picker. */

.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
		}

.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save,
			.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel {
				flex: 1
			}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog .ck.ck-dialog__actions {
		display: flex;
		justify-content: flex-end;
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog-overlay {
	user-select: none;
	overscroll-behavior: none;

	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;
}

.ck.ck-dialog-overlay.ck-dialog-overlay__transparent {
		pointer-events: none;
		animation: none;
		background: none;
	}

.ck.ck-dialog {
	overscroll-behavior: none;
	width: fit-content;
	position: absolute;
}

.ck.ck-dialog .ck.ck-form__header  {
		flex-shrink: 0;
	}

.ck.ck-dialog .ck.ck-form__header .ck-form__header__label {
			cursor: grab;
		}

.ck.ck-dialog-overlay.ck-dialog-overlay__transparent .ck.ck-dialog {
		pointer-events: all;
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;
}

.ck.ck-dropdown .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

/* Dropdown button should span horizontally, e.g. in vertical toolbars */

.ck.ck-dropdown .ck-button.ck-dropdown__button {
		width: 100%;
	}

.ck.ck-dropdown .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-panel);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;
	}

.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible {
			display: inline-block;
		}

.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,
		.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,
		.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,
		.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,
		.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme {
			bottom: 100%;
		}

.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,
		.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw,
		.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,
		.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,
		.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,
		.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se {
			left: 0px;
		}

.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,
		.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw {
			right: 0px;
		}

.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,
		.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,
		.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,
		.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-panel) + 1 );
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;
}

.ck.ck-splitbutton .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}


/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel .ck-button:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dropdown-menu-list__nested-menu__button > .ck-dropdown-menu-list__nested-menu__button__arrow {
	pointer-events: none;
	z-index: var(--ck-z-default);
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dropdown-menu__nested-menu__panel {
	position: absolute;
	max-height: 314px; /* With the default settings, this is equal to 10 menu items. */
	overflow-y: auto;
	z-index: calc(var(--ck-z-panel) + 1);
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dropdown-menu-list__nested-menu {
	display: block;
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-aria-live-announcer {
	position: absolute;
	left: -10000px;
	top: -10000px;
}

.ck.ck-aria-live-region-list {
	list-style-type: none;
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
}

.ck.ck-form__header h2.ck-form__header__label {
		flex-grow: 1;
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

.ck.ck-labeled-field-view .ck.ck-label {
		display: block;
		position: absolute;
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */

.ck.ck-list {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;

	display: flex;
	flex-direction: column;
}

.ck.ck-list .ck-list__item,
	.ck.ck-list .ck-list__separator {
		display: block;
	}

/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */

.ck.ck-list .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-panel);
}

.ck.ck-balloon-panel.ck-balloon-panel_with-arrow::before,
		.ck.ck-balloon-panel.ck-balloon-panel_with-arrow::after {
			content: "";
			position: absolute;
		}

.ck.ck-balloon-panel.ck-balloon-panel_with-arrow::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

.ck.ck-balloon-panel.ck-balloon-panel_with-arrow::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}

.ck.ck-balloon-panel[class*="arrow_n"]::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

.ck.ck-balloon-panel[class*="arrow_n"]::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}

.ck.ck-balloon-panel[class*="arrow_s"]::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

.ck.ck-balloon-panel[class*="arrow_s"]::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}

.ck.ck-balloon-panel.ck-balloon-panel_visible {
		display: block;
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-panel) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-panel); /* #315 */
		position: fixed;
		top: 0;
	}

.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-autocomplete {
	position: relative;
}

.ck.ck-autocomplete > .ck-search__results {
		position: absolute;
		z-index: var(--ck-z-panel);
	}

.ck.ck-autocomplete > .ck-search__results.ck-search__results_n {
			bottom: 100%;
		}

.ck.ck-autocomplete > .ck-search__results.ck-search__results_s {
			top: 100%;
			bottom: auto;
		}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-search > .ck-labeled-field-view > .ck-labeled-field-view__input-wrapper > .ck-icon {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}

[dir="ltr"] .ck.ck-search > .ck-labeled-field-view > .ck-labeled-field-view__input-wrapper > .ck-icon {
				left: var(--ck-spacing-medium);
		}

[dir="rtl"] .ck.ck-search > .ck-labeled-field-view > .ck-labeled-field-view__input-wrapper > .ck-icon {
				right: var(--ck-spacing-medium);
		}

.ck.ck-search > .ck-labeled-field-view .ck-search__reset {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}

.ck.ck-search > .ck-search__results > .ck-search__info > span:first-child {
				display: block;
			}

/* Hide the filtered view when nothing was found */

.ck.ck-search > .ck-search__results > .ck-search__info:not(.ck-hidden) ~ * {
				display: none;
			}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-highlighted-text mark {
	background: var(--ck-color-highlight-background);
	vertical-align: initial;
	font-weight: inherit;
	line-height: inherit;
	font-size: inherit;
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */

.ck.ck-balloon-panel.ck-tooltip {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;

	z-index: calc( var(--ck-z-dialog) + 100 );
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	display: block;
	position: relative;
}

.ck.ck-spinner {
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	margin: 0 auto;
	transform: translateY(-50%);
	z-index: 1;
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */

.ck.ck-toolbar {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;
}

.ck.ck-toolbar > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

.ck.ck-toolbar .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
	}

.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,
		.ck.ck-toolbar .ck.ck-toolbar__separator:last-child {
			display: none;
		}

.ck.ck-toolbar .ck-toolbar__line-break {
		flex-basis: 100%;
	}

.ck.ck-toolbar.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

.ck.ck-toolbar.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

.ck.ck-toolbar.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

.ck.ck-toolbar > .ck.ck-toolbar__grouped-dropdown > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu > .ck-menu-bar__menu__button > .ck-menu-bar__menu__button__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-max-width: 75vw;
	--ck-menu-bar-nested-menu-horizontal-offset: 5px;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	z-index: var(--ck-z-panel);
	max-width: var(--ck-menu-bar-menu-max-width);
	position: absolute;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,
	.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw {
		bottom: 100%;
	}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se,
	.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw {
		top: 100%;
		bottom: auto;
	}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,
	.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se {
		left: 0px;
	}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,
	.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw {
		right: 0px;
	}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es,
	.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en {
		left: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es {
		top: 0px;
	}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en {
		bottom: 0px;
	}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws,
	.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn {
		right: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws {
		top: 0px;
	}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn {
		bottom: 0px;
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	display: block;
	position: relative;
}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
		position: absolute;
	}

.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}

/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */

.ck .ck-widget.ck-widget_with-selection-handle:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

/* Show the selection handle when the widget is selected, but not for nested widgets. */

.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);
}

.ck .ck-size-view.ck-orientation-top-left,
	.ck .ck-size-view.ck-orientation-top-right,
	.ck .ck-size-view.ck-orientation-bottom-right,
	.ck .ck-size-view.ck-orientation-bottom-left,
	.ck .ck-size-view.ck-orientation-above-center {
		position: absolute;
	}

.ck .ck-size-view.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

.ck .ck-size-view.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

.ck .ck-size-view.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

.ck .ck-size-view.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

/* Class applied if the widget is too small to contain the size label */

.ck .ck-size-view.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected > .ck-widget__resizer {
		display: block;
	}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;
}

.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left,
	.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right,
	.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}

/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
	 * Styles of the type around buttons
	 */

.ck .ck-widget .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);
	}

.ck .ck-widget .ck-widget__type-around__button svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}

/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */

.ck .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button::after, .ck .ck-widget > .ck-widget__type-around > .ck-widget__type-around__button:hover::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}

/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */

.ck .ck-widget > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */

.ck .ck-widget:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */

.ck .ck-widget.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */

.ck .ck-widget.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}`,""]);const _e=ne},56081:($e,te,c)=>{c.r(te),c.d(te,{default:()=>$o});var f=c(92132),v=c(21272),M=c(33544),x=c.n(M),ve=c(54894),m=c(7153),ye=c(8361),xe=c(16918),Ce=c(10229),Se=c(37133),T=c(63891);/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function Ee(){const e={resolve:null,promise:null};return e.promise=new Promise(o=>{e.resolve=o}),e}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function ze(e,{timeOutAfter:o=500,retryAfter:t=100}={}){return new Promise((r,i)=>{const n=Date.now();let a=null;const l=setTimeout(()=>{i(a??new Error("Timeout"))},o),d=async()=>{try{const k=await e();clearTimeout(l),r(k)}catch(k){a=k,Date.now()-n>o?i(k):setTimeout(d,t)}};d()})}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const $=new Map;function re(e){if($.has(e))return $.get(e);const o=document.querySelector(`script[src="${e}"]`);o&&(console.warn(`Script with "${e}" src is already present in DOM!`),o.remove());const t=new Promise((r,i)=>{const n=document.createElement("script");n.onerror=i,n.onload=()=>{r()},n.setAttribute("data-injected-by","ckeditor-integration"),n.type="text/javascript",n.async=!0,n.src=e,document.head.appendChild(n);const a=new MutationObserver(l=>{l.flatMap(d=>Array.from(d.removedNodes)).includes(n)&&($.delete(e),a.disconnect())});a.observe(document.head,{childList:!0,subtree:!0})});return $.set(e,t),t}async function ie(e){await Promise.all(e.map(re))}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const B=new Map;function Ae({href:e,placementInHead:o="start"}){if(B.has(e))return B.get(e);const t=document.querySelector(`link[href="${e}"][rel="stylesheet"]`);t&&(console.warn(`Stylesheet with "${e}" href is already present in DOM!`),t.remove());const r=n=>{const a=Array.from(document.head.querySelectorAll('link[data-injected-by="ckeditor-integration"]'));switch(o){case"start":a.length?a.slice(-1)[0].after(n):document.head.insertBefore(n,document.head.firstChild);break;case"end":document.head.appendChild(n);break}},i=new Promise((n,a)=>{const l=document.createElement("link");l.setAttribute("data-injected-by","ckeditor-integration"),l.rel="stylesheet",l.href=e,l.onerror=a,l.onload=()=>{n()},r(l);const d=new MutationObserver(k=>{k.flatMap(g=>Array.from(g.removedNodes)).includes(l)&&(B.delete(e),d.disconnect())});d.observe(document.head,{childList:!0,subtree:!0})});return B.set(e,i),i}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function Be(){return typeof window>"u"}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function Le(e){let o=null;return(...t)=>(o||(o={current:e(...t)}),o.current)}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function We(e,o){return o.length=0,o.push(...e),o}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function Ge(e,o){for(const t of Object.getOwnPropertyNames(o))delete o[t];for(const[t,r]of Object.entries(e))r!==o&&t!=="prototype"&&t!=="__proto__"&&(o[t]=r);return o}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function Ie(e){if(document.head.querySelector(`link[href="${e}"][rel="preload"]`))return;const o=document.createElement("link");o.setAttribute("data-injected-by","ckeditor-integration"),o.rel="preload",o.as=Ne(e),o.href=e,document.head.insertBefore(o,document.head.firstChild)}function Ne(e){switch(!0){case/\.css$/.test(e):return"style";case/\.js$/.test(e):return"script";default:return"fetch"}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function Xe(e,o){if(e===o)return!0;if(!e||!o)return!1;for(let t=0;t<e.length;++t)if(e[t]!==o[t])return!1;return!0}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const z=new Array(256).fill("").map((e,o)=>("0"+o.toString(16)).slice(-2));function Me(){const[e,o,t,r]=crypto.getRandomValues(new Uint32Array(4));return"e"+z[e>>0&255]+z[e>>8&255]+z[e>>16&255]+z[e>>24&255]+z[o>>0&255]+z[o>>8&255]+z[o>>16&255]+z[o>>24&255]+z[t>>0&255]+z[t>>8&255]+z[t>>16&255]+z[t>>24&255]+z[r>>0&255]+z[r>>8&255]+z[r>>16&255]+z[r>>24&255]}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function Z(e){return Array.from(new Set(e))}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */async function W(e,o){const t=()=>e.map(r=>window[r]).filter(Boolean)[0];return ze(()=>{const r=t();if(!r)throw new Error(`Window entry "${e.join(",")}" not found.`);return r},o)}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function Fe(e,o){const t=Object.entries(e).filter(([r,i])=>o(i,r));return Object.fromEntries(t)}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function Ke(e){return Fe(e,o=>o!=null)}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function ce(e,o){const t=Object.entries(e).map(([r,i])=>[r,o(i,r)]);return Object.fromEntries(t)}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const ne="https://cdn.ckeditor.com";function U(e,o,t){return`${ne}/${e}/${t}/${o}`}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const Re="https://cdn.ckbox.io";function ae(e,o,t){return`${Re}/${e}/${t}/${o}`}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function He({version:e,languages:o}){const t={scripts:[U("ckeditor5","ckeditor5.umd.js",e),...(o||[]).map(r=>U("ckeditor5",`translations/${r}.umd.js`,e))],stylesheets:[U("ckeditor5","ckeditor5.css",e)]};return{preload:[...t.stylesheets,...t.scripts],scripts:[async()=>ie(t.scripts)],stylesheets:t.stylesheets,checkPluginLoaded:async()=>W(["CKEDITOR"])}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function Te({version:e,languages:o}){const t={scripts:[U("ckeditor5-premium-features","ckeditor5-premium-features.umd.js",e),...(o||[]).map(r=>U("ckeditor5-premium-features",`translations/${r}.umd.js`,e))],stylesheets:[U("ckeditor5-premium-features","ckeditor5-premium-features.css",e)]};return{preload:[...t.stylesheets,...t.scripts],scripts:[async()=>ie(t.scripts)],stylesheets:t.stylesheets,checkPluginLoaded:async()=>W(["CKEDITOR_PREMIUM_FEATURES"])}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */async function le(e){let{scripts:o=[],stylesheets:t=[],preload:r,checkPluginLoaded:i}=G(e);r||(r=Z([...t.filter(n=>typeof n=="string"),...o.filter(n=>typeof n=="string")])),r.forEach(Ie),await Promise.all(Z(t).map(n=>Ae({href:n,placementInHead:"start"})));for(const n of Z(o))typeof n=="string"?await re(n):await n();return i?.()}function G(e){return Array.isArray(e)?{scripts:e.filter(o=>typeof o=="function"||o.endsWith(".js")),stylesheets:e.filter(o=>o.endsWith(".css"))}:typeof e=="function"?{checkPluginLoaded:e}:e}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function J(e){const o=ce(Ke(e),G);return{...Object.values(o).reduce((t,r)=>(t.scripts.push(...r.scripts??[]),t.stylesheets.push(...r.stylesheets??[]),t.preload.push(...r.preload??[]),t),{preload:[],scripts:[],stylesheets:[]}),checkPluginLoaded:async()=>{const t=Object.create(null);for(const[r,i]of Object.entries(o))t[r]=await i?.checkPluginLoaded?.();return t}}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function se({version:e,theme:o="lark"}){return{scripts:[ae("ckbox","ckbox.js",e)],...o&&{stylesheets:[ae("ckbox",`styles/themes/${o}.css`,e)]},checkPluginLoaded:async()=>W(["CKBox"])}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function de(e){const o=ce(e,(t,r)=>{if(!t)return;const i=G(t);return{checkPluginLoaded:async()=>W([r]),...i}});return J(o)}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function De(e){const{version:o,languages:t,plugins:r,premium:i,ckbox:n}=e,a=J({CKEditor:He({version:o,languages:t}),...i&&{CKEditorPremiumFeatures:Te({version:o,languages:t})},...n&&{CKBox:se(n)},loadedPlugins:de(r??{})});return le(a)}var ke=Object.defineProperty,pe=(e,o,t)=>o in e?ke(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,A=(e,o,t)=>pe(e,typeof o!="symbol"?o+"":o,t);/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const Q=class ao{constructor(o,t){A(this,"_lifecycle"),A(this,"_element"),A(this,"_releaseLock",null),A(this,"_value",null),A(this,"_afterMountCallbacks",[]),A(this,"_state",{destroyedBeforeInitialization:!1,mountingInProgress:null}),A(this,"release",Le(()=>{const{_releaseLock:r,_state:i,_element:n,_lifecycle:a}=this;i.mountingInProgress?i.mountingInProgress.then(()=>a.unmount({element:n,mountResult:this.value})).catch(l=>{console.error("Semaphore unmounting error:",l)}).then(r.resolve).then(()=>{this._value=null}):(i.destroyedBeforeInitialization=!0,r.resolve())})),this._element=o,this._lifecycle=t,this._lock()}get value(){return this._value}unsafeSetValue(o){this._value=o,this._afterMountCallbacks.forEach(t=>t(o)),this._afterMountCallbacks=[]}runAfterMount(o){const{_value:t,_afterMountCallbacks:r}=this;t?o(t):r.push(o)}_lock(){const{_semaphores:o}=ao,{_state:t,_element:r,_lifecycle:i}=this,n=o.get(r)||Promise.resolve(null),a=Ee();this._releaseLock=a;const l=n.then(()=>t.destroyedBeforeInitialization?Promise.resolve(void 0):(t.mountingInProgress=i.mount().then(d=>(d&&this.unsafeSetValue(d),d)),t.mountingInProgress)).then(async d=>{d&&i.afterMount&&await i.afterMount({element:r,mountResult:d})}).then(()=>a.promise).catch(d=>{console.error("Semaphore mounting error:",d)}).then(()=>{o.get(r)===l&&o.delete(r)});o.set(r,l)}};A(Q,"_semaphores",new Map);let q=Q;/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const ee="$__CKEditorReactContextMetadata";function ge(e,o){return{...o,[ee]:e}}function ue(e){return e.get(ee)}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const he=()=>{const e=useRef(!1);return useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),e};/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const O=e=>{const o=useRef();return o.current=e,useCallback((...t)=>o.current(...t),[])};/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const be=({currentContextWatchdog:e,onChangeInitializedEditors:o})=>{const t=O(o||(()=>{}));useEffect(()=>{var r;if(e.status!=="initialized")return;const{watchdog:i}=e,n=(r=i?.context)==null?void 0:r.editors;if(!n)return;const a=()=>[...n].reduce((k,g)=>{var F;if(g.state!=="ready")return k;const C=ue(g.config),L=(F=C?.name)!=null?F:g.id;return k[L]={instance:g,metadata:C},k},Object.create({})),l=()=>{t(a(),i)},d=(k,g)=>{g.once("ready",l,{priority:"lowest"}),g.once("destroy",l,{priority:"lowest"})};return n.on("add",d),()=>{n.off("add",d)}},[e])};/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const X=v.createContext(null),Oe=e=>{const{id:o,context:t,watchdogConfig:r,children:i,config:n,onReady:a,contextWatchdog:l,isLayoutReady:d=!0,onChangeInitializedEditors:k,onError:g=(S,E)=>console.error(S,E)}=e,F=he(),C=useRef(null),[L,I]=useState({status:"initializing"});useEffect(()=>{d?y():I({status:"initializing"})},[o,d]),useEffect(()=>()=>{L.status==="initialized"&&L.watchdog.destroy()},[L]),be({currentContextWatchdog:L,onChangeInitializedEditors:k});function R(){return C.current=uid(),C.current}function H(S){return C.current===S&&F.current}function y(){const S=R(),E=new l(t,r);return E.on("error",(K,D)=>{/* istanbul ignore else -- @preserve */H(S)&&g(D.error,{phase:"runtime",willContextRestart:D.causesRestart})}),E.on("stateChange",()=>{a&&E.state==="ready"&&H(S)&&a(E.context,E)}),E.create(n).then(()=>{H(S)?I({status:"initialized",watchdog:E}):E.destroy()}).catch(K=>{H(S)&&(g(K,{phase:"initialization",willContextRestart:!1}),I({status:"error",error:K}))}),E}return React.createElement(X.Provider,{value:L},i)},me=e=>!!e&&typeof e=="object"&&"status"in e&&["initializing","initialized","error"].includes(e.status),oe=e=>o=>me(o)&&o.status===e,_e=oe("initializing"),je=e=>oe("initialized")(e)&&e.watchdog.state==="ready";/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const Ue="Lock from React integration (@ckeditor/ckeditor5-react)";class Pe extends v.Component{constructor(o){super(o),A(this,"domContainer",v.createRef()),A(this,"editorSemaphore",null),this._checkVersion()}_checkVersion(){const{CKEDITOR_VERSION:o}=window;if(!o)return console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.');const[t]=o.split(".").map(Number);t>=42||o.startsWith("0.0.0")||console.warn("The <CKEditor> component requires using CKEditor 5 in version 42+ or nightly build.")}get _semaphoreValue(){const{editorSemaphore:o}=this;return o?o.value:null}get watchdog(){const{_semaphoreValue:o}=this;return o?o.watchdog:null}get editor(){const{_semaphoreValue:o}=this;return o?o.instance:null}shouldComponentUpdate(o){const{props:t,editorSemaphore:r}=this;return o.id!==t.id||o.disableWatchdog!==t.disableWatchdog?!0:(r&&(r.runAfterMount(({instance:i})=>{this._shouldUpdateEditorData(t,o,i)&&i.data.set(o.data)}),"disabled"in o&&r.runAfterMount(({instance:i})=>{o.disabled?i.enableReadOnlyMode(Ue):i.disableReadOnlyMode(Ue)})),!1)}componentDidMount(){_e(this.context)||this._initLifeCycleSemaphore()}componentDidUpdate(){_e(this.context)||this._initLifeCycleSemaphore()}componentWillUnmount(){this._unlockLifeCycleSemaphore()}_unlockLifeCycleSemaphore(){this.editorSemaphore&&(this.editorSemaphore.release(),this.editorSemaphore=null)}_initLifeCycleSemaphore(){this._unlockLifeCycleSemaphore(),this.editorSemaphore=new q(this.domContainer.current,{mount:async()=>this._initializeEditor(),afterMount:({mountResult:o})=>{const{onReady:t}=this.props;t&&this.domContainer.current!==null&&t(o.instance)},unmount:async({element:o,mountResult:t})=>{const{onAfterDestroy:r}=this.props;try{await this._destroyEditor(t),o.innerHTML=""}finally{r&&r(t.instance)}}})}render(){return v.createElement("div",{ref:this.domContainer})}async _initializeEditor(){if(this.props.disableWatchdog)return{instance:await this._createEditor(this.domContainer.current,this._getConfig()),watchdog:null};const o=(()=>je(this.context)?new Ye(this.context.watchdog):new this.props.editor.EditorWatchdog(this.props.editor,this.props.watchdogConfig))(),t={current:0};return o.setCreator(async(r,i)=>{var n;const{editorSemaphore:a}=this,{onAfterDestroy:l}=this.props;t.current>0&&l&&((n=a?.value)!=null&&n.instance)&&l(a.value.instance);const d=await this._createEditor(r,i);return a&&t.current>0&&(a.unsafeSetValue({instance:d,watchdog:o}),setTimeout(()=>{this.props.onReady&&this.props.onReady(o.editor)})),t.current++,d}),o.on("error",(r,{error:i,causesRestart:n})=>{(this.props.onError||console.error)(i,{phase:"runtime",willEditorRestart:n})}),await o.create(this.domContainer.current,this._getConfig()).catch(r=>{(this.props.onError||console.error)(r,{phase:"initialization",willEditorRestart:!1})}),{watchdog:o,instance:o.editor}}_createEditor(o,t){const{contextItemMetadata:r}=this.props;return r&&(t=ge(r,t)),this.props.editor.create(o,t).then(i=>{if("disabled"in this.props){/* istanbul ignore else -- @preserve */this.props.disabled&&i.enableReadOnlyMode(Ue)}const n=i.model.document,a=i.editing.view.document;return n.on("change:data",l=>{/* istanbul ignore else -- @preserve */this.props.onChange&&this.props.onChange(l,i)}),a.on("focus",l=>{/* istanbul ignore else -- @preserve */this.props.onFocus&&this.props.onFocus(l,i)}),a.on("blur",l=>{/* istanbul ignore else -- @preserve */this.props.onBlur&&this.props.onBlur(l,i)}),i})}async _destroyEditor(o){const{watchdog:t,instance:r}=o;return new Promise((i,n)=>{/* istanbul ignore next -- @preserve */setTimeout(async()=>{try{if(t)return await t.destroy(),i();if(r)return await r.destroy(),i();i()}catch(a){console.error(a),n(a)}})})}_shouldUpdateEditorData(o,t,r){return!(o.data===t.data||r.data.get()===t.data)}_getConfig(){const o=this.props.config||{};return this.props.data&&o.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `content` property. The config value takes precedence over `content` property and will be used when both are specified."),{...o,initialData:o.initialData||this.props.data||""}}}A(Pe,"contextType",X),A(Pe,"propTypes",{editor:M.func.isRequired,data:M.string,config:M.object,disableWatchdog:M.bool,watchdogConfig:M.object,onChange:M.func,onReady:M.func,onFocus:M.func,onBlur:M.func,onError:M.func,disabled:M.bool,id:M.any});class Ye{constructor(o){A(this,"_contextWatchdog"),A(this,"_id"),A(this,"_creator"),this._contextWatchdog=o,this._id=Me()}setCreator(o){this._creator=o}create(o,t){return this._contextWatchdog.add({sourceElementOrData:o,config:t,creator:this._creator,id:this._id,type:"editor"})}on(o,t){this._contextWatchdog.on("itemError",(r,{itemId:i,error:n})=>{i===this._id&&t(null,{error:n,causesRestart:void 0})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const lo=()=>{const e=useRef(null),[o,t]=useState(()=>Date.now()),r=()=>{t(Date.now())},i=(k=!0)=>{e.current&&(e.current.release(),e.current=null),k&&t(Date.now())},n=k=>{var g;(g=e.current)==null||g.unsafeSetValue(k),r()},a=k=>{e.current&&e.current.runAfterMount(k)};return{get current(){return e.current},revision:o,createAttributeRef:k=>({get current(){return!e.current||!e.current.value?null:e.current.value[k]}}),unsafeSetValue:n,release:i,replace:k=>{i(!1),e.current=k(),r(),a(r)},runAfterMount:a}};/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function Ze(...e){return o=>{e.forEach(t=>{typeof t=="function"?t(o):t!=null&&(t.current=o)})}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const Je=(e,o)=>{const t=useRef(null);shallowCompareArrays(t.current,o)||(t.current=[...o],e())};/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const Qe=(e,o,t)=>{Je(()=>{e&&e.runAfterMount(o)},[e,...t])};/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const Ve="Lock from React integration (@ckeditor/ckeditor5-react)",qo=e=>{const o=useRef(e.semaphoreElement||null),t=lo(),r={watchdog:t.createAttributeRef("watchdog"),instance:t.createAttributeRef("instance")},i=useContext(X),[n,a]=useState(()=>Object.keys(e.data)),[l,d]=useState({...e.data}),[k,g]=useState({...e.rootsAttributes}),F=useRef(!0),C=()=>{const s=r.instance.current;if(!s)return;const _=p=>{p.name&&!s.editing.view.getDomRoot(p.name)&&s.editing.view.attachDomRoot(document.createElement("div"),p.name)};Object.values(s.ui.view.editables).forEach(_)};useEffect(()=>{const s=o.current;if(!(i&&!je(i))&&!(!s||e.isLayoutReady===!1))return t.replace(()=>new q(s,{mount:E,afterMount:({mountResult:_})=>{const{onReady:p}=e;p&&o.current!==null&&p(_.instance)},unmount:async({element:_,mountResult:p})=>{const{onAfterDestroy:u}=e;try{await S(p),_.innerHTML=""}finally{u&&u(p.instance)}}})),()=>{C(),t.release(!1)}},[e.id,e.isLayoutReady,i?.status]);const L=()=>{const s=e.config||{};return e.data&&s.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` property. The config value takes precedence over `data` property and will be used when both are specified."),{...s,rootsAttributes:k}},I=O((s,_)=>{const p=s.model.document;if(!e.disableTwoWayDataBinding){const u={},h={};p.differ.getChanges().forEach(b=>{let w;/* istanbul ignore else -- @preserve */if(b.type=="insert"||b.type=="remove"?w=b.position.root:w=b.range.root,!w.isAttached())return;const{rootName:P}=w;u[P]=s.getData({rootName:P})}),p.differ.getChangedRoots().forEach(b=>{if(b.state){u[b.name]!==void 0&&delete u[b.name];return}const w=b.name;h[w]=s.getRootAttributes(w)}),Object.keys(u).length&&d(b=>({...b,...u})),Object.keys(h).length&&g(b=>({...b,...h}))}/* istanbul ignore else -- @preserve */e.onChange&&e.onChange(_,s)}),R=O((s,_,p)=>{const u=p.rootName;e.disableTwoWayDataBinding||(d(h=>({...h,[u]:s.getData({rootName:u})})),g(h=>({...h,[u]:s.getRootAttributes(u)}))),a(h=>uniq([...h,p.rootName]))}),H=O((s,_,p)=>{const u=p.rootName;e.disableTwoWayDataBinding||(d(h=>{const{[u]:b,...w}=h;return{...w}}),g(h=>{const{[u]:b,...w}=h;return{...w}})),a(h=>h.filter(b=>b!==u))}),y=O((s,_)=>(overwriteObject({...e.rootsAttributes},k),overwriteObject({...e.data},l),overwriteArray(Object.keys(e.data),n),e.editor.create(s,_).then(p=>{const u=p.getFullData();if(overwriteObject({...u},l),overwriteObject({...p.getRootsAttributes()},k),overwriteArray(Object.keys(u),n),e.disabled){/* istanbul ignore else -- @preserve */p.enableReadOnlyMode(Ve)}const h=p.model.document,b=p.editing.view.document;return h.on("change:data",w=>I(p,w)),p.on("addRoot",(w,P)=>R(p,w,P)),p.on("detachRoot",(w,P)=>H(p,w,P)),b.on("focus",w=>{/* istanbul ignore else -- @preserve */e.onFocus&&e.onFocus(w,p)}),b.on("blur",w=>{/* istanbul ignore else -- @preserve */e.onBlur&&e.onBlur(w,p)}),p}))),S=s=>{const{watchdog:_,instance:p}=s;return new Promise((u,h)=>{/* istanbul ignore next -- @preserve */setTimeout(async()=>{try{if(_)return await _.destroy(),u();if(p)return await p.destroy(),u();u()}catch(b){console.error(b),h(b)}})})},E=async()=>{if(e.disableWatchdog)return{instance:await y(e.data,L()),watchdog:null};const s=(()=>je(i)?new Ye(i.watchdog):new e.editor.EditorWatchdog(e.editor,e.watchdogConfig))(),_={current:0};return s.setCreator(async(p,u)=>{const{onAfterDestroy:h}=e;_.current>0&&h&&r.instance.current&&h(r.instance.current);const b=await y(p,u);return _.current>0&&(t.unsafeSetValue({instance:b,watchdog:s}),setTimeout(()=>{e.onReady&&e.onReady(s.editor)})),_.current++,b}),s.on("error",(p,{error:u,causesRestart:h})=>{(e.onError||console.error)(u,{phase:"runtime",willEditorRestart:h})}),await s.create(l,L()).catch(p=>{throw(e.onError||console.error)(p,{phase:"initialization",willEditorRestart:!1}),p}),{watchdog:s,instance:s.editor}},K=(s,_)=>{const p=Object.keys(s),u=Object.keys(_);return{addedKeys:u.filter(h=>!p.includes(h)),removedKeys:p.filter(h=>!u.includes(h))}},D=useCallback(s=>{t.runAfterMount(()=>{F.current=!0,d(s)})},[d]),Bo=useCallback(s=>{t.runAfterMount(()=>{F.current=!0,g(s)})},[g]),Wo=React.createElement(eo,{ref:o,editor:r.instance.current});Qe(t.current,({instance:s})=>{e.disabled?s.enableReadOnlyMode(Ve):s.disableReadOnlyMode(Ve)},[e.disabled]),Qe(t.current,({instance:s})=>{if(F.current){F.current=!1;const _=Object.keys(l),p=Object.keys(k);if(!_.every(N=>p.includes(N)))throw console.error("`data` and `attributes` objects must have the same keys (roots)."),new Error("`data` and `attributes` objects must have the same keys (roots).");const u=s.getFullData(),h=s.getRootsAttributes(),{addedKeys:b,removedKeys:w}=K(u,l||{}),P=_.some(N=>u[N]!==void 0&&JSON.stringify(u[N])!==JSON.stringify(l[N])),no=p.filter(N=>JSON.stringify(h[N])!==JSON.stringify(k[N])),Xo=N=>{N.forEach(V=>{s.addRoot(V,{data:l[V]||"",attributes:k?.[V]||{},isUndoable:!0})})},Yo=N=>{N.forEach(V=>{s.detachRoot(V,!0)})},Zo=()=>{s.data.set(l,{suppressErrorInCollaboration:!0})},Jo=(N,V)=>{V.forEach(fe=>{Object.keys(k[fe]).forEach(Qo=>{s.registerRootAttribute(Qo)}),N.clearAttributes(s.model.document.getRoot(fe)),N.setAttributes(k[fe],s.model.document.getRoot(fe))})};setTimeout(()=>{s.model.change(N=>{Xo(b),Yo(w),P&&Zo(),no.length&&Jo(N,no)})})}},[l,k]);const Go=n.map(s=>React.createElement(qe,{key:s,id:s,rootName:s,semaphore:t}));return{editor:r.instance.current,editableElements:Go,toolbarElement:Wo,data:l,setData:D,attributes:k,setAttributes:Bo}},qe=(0,v.memo)((0,v.forwardRef)(({id:e,semaphore:o,rootName:t},r)=>{const i=(0,v.useRef)(null);return(0,v.useEffect)(()=>{let n,a;return o.runAfterMount(({instance:l})=>{if(!i.current)return;a=l;const{ui:d,model:k}=a,g=k.document.getRoot(t);g&&a.ui.getEditableElement(t)&&a.detachEditable(g),n=d.view.createEditable(t,i.current),d.addEditable(n),l.editing.view.forceRender()}),()=>{if(a&&a.state!=="destroyed"&&i.current){const l=a.model.document.getRoot(t);/* istanbul ignore else -- @preserve */l&&a.detachEditable(l)}}},[o.revision]),v.createElement("div",{key:o.revision,id:e,ref:Ze(r,i)})}));qe.displayName="EditorEditable";const eo=(0,v.forwardRef)(({editor:e},o)=>{const t=(0,v.useRef)(null);return(0,v.useEffect)(()=>{const r=t.current;if(!e||!r)return;const i=e.ui.view.toolbar.element;return r.appendChild(i),()=>{r.contains(i)&&r.removeChild(i)}},[e&&e.id]),v.createElement("div",{ref:Ze(t,o)})});eo.displayName="EditorToolbarWrapper";/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const so=()=>{const e=useRef(!1);return useEffect(()=>(e.current=!1,()=>{e.current=!0}),[]),e};/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const ko=e=>{const[o,t]=useState({status:"idle"}),r=so(),i=useRef(null);return[O(async(...a)=>{if(r.current||isSSR())return null;const l=uid();i.current=l;try{o.status!=="loading"&&t({status:"loading"});const d=await e(...a);return!r.current&&i.current===l&&t({status:"success",data:d}),d}catch(d){console.error(d),!r.current&&i.current===l&&t({status:"error",error:d})}return null}),o]};/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const po=(e,o)=>{const[t,r]=ko(e);return Je(t,o),r.status==="idle"?{status:"loading"}:r};/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function go(e){const o=JSON.stringify(e),t=po(async()=>loadCKEditorCloud(e),[o]);return t.status==="success"?{...t.data,status:"success"}:t}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const et=e=>o=>{const t=r=>{var i,n;const a=go(e.cloud);switch(a.status){case"error":return e.renderError?e.renderError(a.error):"Unable to load CKEditor Cloud data!";case"success":return React.createElement(o,{...r,cloud:a});default:return(n=(i=e.renderLoader)==null?void 0:i.call(e))!=null?n:null}};return t.displayName="ComponentWithCKEditorCloud",t};var uo=c(97297),oo=c(43064),to=c(94061),ho=c(85072),bo=c.n(ho),mo=c(97825),_o=c.n(mo),wo=c(77659),fo=c.n(wo),vo=c(55056),yo=c.n(vo),xo=c(10540),Co=c.n(xo),So=c(41113),Eo=c.n(So),we=c(38371),Y={};Y.styleTagTransform=Eo(),Y.setAttributes=yo(),Y.insert=fo().bind(null,"head"),Y.domAPI=_o(),Y.insertStyleElement=Co();var ot=bo()(we.A,Y);const tt=we.A&&we.A.locals?we.A.locals:void 0;var j=c(21247);const ro=({isOpen:e=!1,onToggle:o=()=>{},editor:t})=>{const{components:r}=(0,j.tF)(),i=r["media-library"],n=l=>{let d="";l.map(({name:F,url:C,alt:L,formats:I,mime:R,width:H,height:y})=>{if(R.includes("image"))if(I&&globalThis.SH_CKE_UPLOAD_ADAPTER_IS_RESPONSIVE){let S="";Object.keys(I).sort((K,D)=>I[K].width-I[D].width).map(K=>S+=(0,j.vX)(I[K].url)+` ${I[K].width}w,`),d=`<img src="${(0,j.vX)(C)}" alt="${L}" width="${H}" height="${y}" srcset="${S}" />`}else d=`<img src="${(0,j.vX)(C)}" alt="${L}" width="${H}" height="${y}" />`;else R.includes("video")?d=`
            <video class="video" controls width="500px">
                <source src="${(0,j.vX)(C)}" type="${R}" />
            </video>`:d=`<a href="${(0,j.vX)(C)}">${F||"Open document"}</a>`});const k=t.data.processor.toView(d),g=t.data.toModel(k);t.model.insertContent(g),o()},a=l=>{const d=l.map(k=>({name:k.name,alt:k.alternativeText||k.name,url:(0,j.vX)(k.url),mime:k.mime,formats:k.formats,width:k.width,height:k.height}));n(d)};return e?(0,f.jsx)(i,{onClose:o,onSelectAssets:a}):null};ro.propTypes={isOpen:x().bool,onChange:x().func,onToggle:x().func};var zo=c(97275);const Ao=(e,o)=>{const t=e?.plugins?[...e.plugins.map(r=>r.pluginName)]:[];t.includes("StrapiMediaLib")&&(e.strapiMediaLib={toggle:o}),t.includes("StrapiUploadAdapter")&&(e.strapiUploadAdapter={uploadUrl:`${strapi.backendURL}/upload`,headers:{Authorization:"Bearer "+j.j2.getToken()},backendUrl:strapi.backendURL,responsive:globalThis.SH_CKE_UPLOAD_ADAPTER_IS_RESPONSIVE}),t.includes("WordCount")&&(e.WordCountPlugin=!0)},Lo=async(e,o)=>{const t=await c(1334)(`./${o}.js`).catch(r=>console.log(r));e.translations=t.default},Io=()=>{const e=new URLSearchParams(window.location.search),t=Object.fromEntries(e.entries())["plugins[i18n][locale]"];return t&&t.split("-")[0]},No=async e=>{const o=Io(),t=j.j2.getUserInfo().preferedLanguage||"en",{ui:r=t,content:i,textPartLanguage:n,ignorei18n:a}=e.language||{};o&&(e.language={ui:typeof e.language=="string"?e.language:r,content:a?i:o,textPartLanguage:n}),e.language||(e.language=t),await Lo(e,typeof e.language=="string"?e.language:e.language.ui)},Mo=async(e,o)=>{const{presets:t,dontMergePresets:r}=globalThis.SH_CKE_CONFIG||{},i=r?t[e]:zo.A[e];return Ao(i.editorConfig,o),await No(i.editorConfig),i},Fo=(0,T.css)`
  .ck {
    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);
    --ck-color-mention-background: hsla(341, 100%, 30%, 0.1);
    --ck-color-mention-text: hsl(341, 100%, 30%);
    --ck-color-table-caption-background: hsl(0, 0%, 97%);
    --ck-color-table-caption-text: hsl(0, 0%, 20%);
    --ck-highlight-marker-blue: hsl(201, 97%, 72%);
    --ck-highlight-marker-green: hsl(120, 93%, 68%);
    --ck-highlight-marker-pink: hsl(345, 96%, 73%);
    --ck-highlight-marker-yellow: hsl(60, 97%, 73%);
    --ck-highlight-pen-green: hsl(112, 100%, 27%);
    --ck-highlight-pen-red: hsl(0, 85%, 49%);
    --ck-image-style-spacing: 1.5em;
    --ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
    --ck-todo-list-checkmark-size: 16px;
  }

  .ck.ck-sticky-panel .ck-sticky-panel__content_sticky {
    top: 64px !important;
  }
  .ck.ck-reset.ck-dropdown__panel.ck-dropdown__panel_sw.ck-dropdown__panel-visible {
    border-radius: 4px;
  }

  .ck-editor__main {
    --ck-font-face: 'Source Sans Pro', system-ui, Roboto, 'Helvetica Neue',
      'Helvetica', Arial, sans-serif;

    color: var(--ck-color-editor-base-text);
    font-family: var(--ck-font-face);

    * {
      font: revert;
      margin: revert;
    }

    h1 {
      font-size: 2.3em;
    }

    h2 {
      font-size: 1.84em;
    }

    h3 {
      font-size: 1.48em;
    }

    h4 {
      font-size: 1.22em;
    }

    h5 {
      font-size: 1.06em;
    }

    h6 {
      font-size: 1em;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.2em;
      padding-top: 0.8em;
      margin-bottom: 0.4em;
    }

    blockquote,
    ol,
    p,
    ul {
      font-size: 1em;
      line-height: 1.6em;
      padding-top: 0.2em;
      margin-bottom: var(--ck-spacing-large);
    }

    figcaption {
      background-color: var(--ck-color-image-caption-background);
      caption-side: bottom;
      color: var(--ck-color-image-caption-text);
      display: table-caption;
      font-size: 0.75em;
      outline-offset: -1px;
      padding: 0.6em;
      word-break: break-word;
    }

    a {
      text-decoration: none;
      color: #1b3af2;
    }

    a:hover {
      text-decoration: underline;
    }

    .table {
      margin: 0;
    }

    ul.todo-list {
      list-style: none;
      margin: revert;
      color: revert;
      font-family: revert;
      margin-left: 2rem;
    }

    ul,
    ol {
      list-style: initial;
      margin-left: 2rem;
    }

    ol {
      list-style: decimal;
    }

    sub {
      vertical-align: sub;
    }

    sup {
      vertical-align: super;
    }

    .ck.ck-content.ck-editor__editable {
      line-height: initial;
      min-height: 12.5rem;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
      transition-property: border-color, box-shadow, max-height;
      transition-timing-function: ease-in-out;
      transition-duration: 0.5s;
      &.ck-focused:not(.ck-editor__nested-editable) {
        border: 1px solid var(--ck-color-base-border);
        /* border: var(--ck-focus-ring); */
        box-shadow: none;
        transition-property: border-color, box-shadow, max-height;
        transition-timing-function: ease-in-out;
        transition-duration: 0.5s;
      }
    }

    .ck-focused,
    .ck-blurred {
      overflow-y: auto;
      overflow-x: hidden;
      transition: max-height 0.5s ease-in-out;
      ::-webkit-scrollbar {
        width: 7px;
      }
      ::-webkit-scrollbar-track {
        background: var(--ck-scroll-track-background);
        border: none;
      }
      ::-webkit-scrollbar-thumb {
        transition: background 2s;
        background: var(--ck-scroll-thumb-background);
        border: 1px solid var(--ck-scroll-thumb-border-color);
      }
      ::-webkit-scrollbar-thumb:hover {
        transition: background 2s;
        background: var(--ck-scroll-thumb-hover-background);
      }
      ::-webkit-scrollbar-thumb:active {
        background: var(--ck-scroll-thumb-active-background);
      }
    }
  }

  .ck .ck-source-editing-area textarea {
    color: var(--ck-color-text);
    background-color: var(--ck-color-base-background);
    border: 1px solid var(--ck-color-base-border) !important;
    box-shadow: none !important;
  }

  .ck .ck-block-toolbar-button {
    min-width: 0 !important;
    min-height: 0 !important;
    width: 20px !important;
    height: 25px !important;
    margin-left: -2px !important ;

    & svg {
      color: var(--ck-color-text) !important;
      position: absolute;
      width: 20px;
      height: 20px;
    }
  }

  .ck-word-count {
    margin-top: 0.3rem;
    display: flex;
    justify-content: end;
    gap: 0.3rem;
    font-size: 0.7rem;
    font-weight: 500;
    text-transform: lowercase;
    /* color: #b3b3c4; */
  }

  .ck[dir='rtl'] {
    .ck-block-toolbar-button {
      margin-left: 2px !important ;
    }
    & + div {
      justify-content: flex-start;
      & > .ck-word-count {
        & > div:first-child {
          order: 2;
        }
        & > div:last-child {
          order: 1;
        }
      }
    }
  }
`,Ko=(0,T.css)`
  :root {
    --ck-color-focus-outer-shadow: rgba(77, 115, 255, 0.2) !important;
    --ck-color-focus-disabled-shadow: #e4e3ff !important;
    --ck-focus-ring: 1px solid rgb(73, 69, 255) !important;
    --ck-color-button-default-hover-background: #f0f0ff !important;
  }

  .ck.ck-powered-by > a > svg > path:first-child {
    fill: #001234;
  }

  .ck {
    --ck-scroll-track-background: rgb(242, 242, 242);
    --ck-scroll-thumb-background: rgb(236, 236, 236);
    --ck-scroll-thumb-border-color: #cdcdf8;
    --ck-scroll-thumb-hover-background: #f0f0ff;
    --ck-scroll-thumb-active-background: #d9d8ff;

    --ck-color-editor-base-text: #001234;
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-color-base-border: #dcdce4;
    --ck-color-base-background: #ffffff;
    --ck-custom-background: #ffffff;
    --ck-custom-foreground: #dedede;
    --ck-custom-border: #dcdce4;
    --ck-custom-white: hsl(0, 0%, 100%);

    --ck-color-base-focus: #bbbaf1;
    --ck-color-base-active: #f0f0ff;
    --ck-color-base-active-focus: #e2e2fd;
    
    /* -- Overrides generic colors. ----------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);

    --ck-color-focus-border: rgb(73, 69, 255);

    --ck-color-text: #32324d;
    --ck-color-shadow-drop: hsla(250, 31%, 80%, 0.1);
    --ck-color-shadow-inner: hsla(250, 31%, 80%, 0.1);

    /* -- Overrides the default .ck-button class colors. -------------------- */

    --ck-color-button-default-background: var(--ck-custom-background);
    --ck-color-button-default-hover-background: #f0f0ff;
    --ck-color-button-default-active-background: #f6f6f9;
    --ck-color-button-default-active-shadow: #dedefb;
    --ck-color-button-default-disabled-background: var(--ck-custom-background);

    --ck-color-button-on-color: rgb(73, 69, 255);
    --ck-color-button-on-background: #f0f0ff;
    --ck-color-button-on-hover-background: #e6e9fc;
    --ck-color-button-on-active-background: #f6f6f9;
    --ck-color-button-on-active-shadow: #cdcdf8;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    --ck-color-button-action-background: hsl(168, 76%, 42%);
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
    --ck-color-button-action-active-background: hsl(168, 76%, 36%);
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
    --ck-color-button-action-text: var(--ck-custom-white);

    --ck-color-button-save: hsl(120, 100%, 46%);
    --ck-color-button-cancel: hsl(15, 100%, 56%);

    /* -- Overrides the default .ck-dropdown class colors. ------------------ */

    --ck-color-dropdown-panel-background: var(--ck-custom-background);
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-splitbutton class colors. --------------- */

    --ck-color-split-button-hover-background: var(
      --ck-color-button-default-hover-background
    );
    --ck-color-split-button-hover-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-input class colors. --------------------- */

    --ck-color-input-background: var(--ck-custom-background);
    --ck-color-input-border: hsl(257, 3%, 43%);
    --ck-color-input-text: hsl(0, 0%, 98%);
    --ck-color-input-disabled-background: hsl(0, 0%, 97%);
    --ck-color-input-disabled-border: rgb(214, 214, 214);
    --ck-color-input-disabled-text: hsl(0, 0%, 78%);

    /* -- Overrides the default .ck-labeled-field-view class colors. -------- */

    --ck-color-labeled-field-label-background: var(--ck-custom-background);

    /* -- Overrides the default .ck-list class colors. ---------------------- */

    --ck-color-list-background: var(--ck-custom-background);
    --ck-color-list-button-hover-background: #f4f4fb;
    --ck-color-list-button-on-background: var(--ck-color-base-active);
    --ck-color-list-button-on-background-focus: var(
      --ck-color-base-active-focus
    );
    --ck-color-list-button-on-text: #271fe2;

    /* -- Overrides the default .ck-balloon-panel class colors. ------------- */

    --ck-color-panel-background: var(--ck-custom-background);
    --ck-color-panel-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-toolbar class colors. ------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-tooltip class colors. ------------------- */

    --ck-color-tooltip-background: #3a3955;
    --ck-color-tooltip-text: hsl(0, 0%, 93%);

    /* -- Overrides the default colors used by the ckeditor5-image package. - */

    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);

    /* -- Overrides the default colors used by the ckeditor5-widget package.  */

    --ck-color-widget-blurred-border: #cfcffa;
    --ck-color-widget-hover-border: #c9c9e4;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white);

    /* -- Overrides the default colors used by the ckeditor5-link package. -- */

    --ck-color-link-default: hsl(209, 89%, 33%);

    --ck-powered-by-background: transparrent;
    --ck-powered-by-border-color: var(--ck-color-base-background);

    --ck-color-dialog-background: var(--ck-custom-background);
    --ck-color-dialog-form-header-border: var(--ck-color-base-border);
  }
`,Ro=(0,T.css)`
  :root {
    --ck-color-focus-outer-shadow: rgba(77, 115, 255, 0.2) !important;
    --ck-color-focus-disabled-shadow: rgba(106, 114, 143, 0.4) !important;
    --ck-focus-ring: 1px solid #4945ff !important;
    --ck-color-button-default-hover-background: #262630 !important;
  }

  .ck.ck-powered-by > a > svg > path:first-child {
    fill: rgb(236, 236, 236);
  }

  .ck.ck-powered-by > a > svg > path:nth-child(3) {
    fill: rgb(172, 156, 251);
  }

  .ck {
    --ck-scroll-track-background: #3d3d57;
    --ck-scroll-thumb-background: #181826;
    --ck-scroll-thumb-border-color: rgb(70, 70, 70);
    --ck-scroll-thumb-hover-background: #202033;
    --ck-scroll-thumb-active-background: #2b2b45;

    --ck-color-editor-base-text: rgb(236, 236, 236);
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-color-base-border: #4a4a6a;
    --ck-color-base-background: #212134;
    --ck-custom-background: #181826;
    --ck-custom-foreground: #26263b;
    --ck-custom-border: #4a4a6a;
    --ck-custom-white: hsl(0, 0%, 100%);

    --ck-color-focus-outer-shadow: #212134;

    --ck-color-base-focus: #bbbaf1;
    --ck-color-base-active: #2e2e5c;
    --ck-color-base-active-focus: #28284d;
    
    /* -- Overrides generic colors. ----------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);
    --ck-color-focus-border: #6765bd;
    --ck-color-text: hsl(0, 0%, 93%);
    --ck-color-shadow-drop: hsla(0, 0%, 0%, 0.2);
    --ck-color-shadow-inner: hsla(0, 0%, 0%, 0.1);

    /* -- Overrides the default .ck-button class colors. -------------------- */

    --ck-color-button-default-background: rgb(33, 33, 52);

    --ck-color-button-default-hover-background: #262630;
    --ck-color-button-default-active-background: #3c3c47;
    --ck-color-button-default-active-shadow: #3c3c47;
    --ck-color-button-default-disabled-background: var(--ck-custom-background);

    --ck-color-button-on-color: #7b79ff;
    --ck-color-button-on-background: #2b2b36;
    --ck-color-button-on-hover-background: #30303b;
    --ck-color-button-on-active-background: #3c3c47;
    --ck-color-button-on-active-shadow: #3c3c47;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    --ck-color-button-action-background: hsl(168, 76%, 42%);
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
    --ck-color-button-action-active-background: hsl(168, 76%, 36%);
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
    --ck-color-button-action-text: var(--ck-custom-white);

    --ck-color-button-save: hsl(120, 100%, 46%);
    --ck-color-button-cancel: hsl(15, 100%, 56%);

    /* -- Overrides the default .ck-dropdown class colors. ------------------ */

    --ck-color-dropdown-panel-background: var(--ck-custom-background);
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-splitbutton class colors. --------------- */

    --ck-color-split-button-hover-background: var(
      --ck-color-button-default-hover-background
    );
    --ck-color-split-button-hover-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-input class colors. --------------------- */

    --ck-color-input-background: var(--ck-custom-background);
    --ck-color-input-border: hsl(257, 3%, 43%);
    --ck-color-input-text: hsl(0, 0%, 98%);
    --ck-color-input-disabled-background: hsl(255, 4%, 21%);
    --ck-color-input-disabled-border: hsl(250, 3%, 38%);
    --ck-color-input-disabled-text: hsl(0, 0%, 78%);

    /* -- Overrides the default .ck-labeled-field-view class colors. ---------*/

    --ck-color-labeled-field-label-background: var(--ck-custom-background);

    /* -- Overrides the default .ck-list class colors. ---------------------- */

    --ck-color-list-background: var(--ck-custom-background);
    --ck-color-list-button-hover-background: #121221;
    --ck-color-list-button-on-background: var(--ck-color-base-active);
    --ck-color-list-button-on-background-focus: var(
      --ck-color-base-active-focus
    );
    --ck-color-list-button-on-text: #ffffff;

    /* -- Overrides the default .ck-balloon-panel class colors. ------------- */

    --ck-color-panel-background: var(--ck-custom-background);
    --ck-color-panel-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-toolbar class colors. ------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-tooltip class colors. ------------------- */

    --ck-color-tooltip-background: #3a3955;
    --ck-color-tooltip-text: hsl(0, 0%, 93%);

    /* -- Overrides the default colors used by the ckeditor5-image package. - */

    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);

    /* -- Overrides the default colors used by the ckeditor5-widget package.  */

    --ck-color-widget-blurred-border: #7c7c96;
    --ck-color-widget-hover-border: #666687;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white);

    /* -- Overrides the default colors used by the ckeditor5-link package. -- */

    --ck-color-link-default: hsl(216, 100%, 75%);

    --ck-powered-by-background: transparrent;
    --ck-powered-by-border-color: var(--ck-color-base-background);

    --ck-color-dialog-background: var(--ck-custom-background);
    --ck-color-dialog-form-header-border: var(--ck-color-base-border);
  }
`,Ho=(0,T.css)`
  /* --- expanding --- */

  .ck.ck-editor__main .ck-blurred {
    max-height: 200px;
  }
  .ck.ck-editor__main .ck-focused {
    max-height: 700px;
  }

  /* --- color-grid --- */

  .ck.ck-color-ui-dropdown {
    --ck-color-grid-tile-size: 22px !important;
  }
  .ck.ck-color-grid__tile {
    width: auto;
  }
  .ck.ck-color-ui-dropdown .ck-color-grid {
    grid-gap: 2px;
  }
  .ck.ck-color-ui-dropdown .ck-color-grid .ck-button {
    border-radius: 2px;
  }
  .ck.ck-color-ui-dropdown
    .ck.ck-color-grid
    .ck-color-grid__tile:hover:not(.ck-disabled),
  .ck.ck-color-ui-dropdown
    .ck.ck-color-grid
    .ck-color-grid__tile:focus:not(.ck-disabled) {
    z-index: 1;
    transform: scale(1.1);
    border-radius: 2px;
  }

  /* ---- Styles feature ------------------------------------------------------ */

  :root {
    --ck-georgia-serif-font-stack: Georgia, Times, Times New Roman, serif;
  }

  .ck-content h1.document-title {
    font-family: var(--ck-georgia-serif-font-stack);
    font-size: 50px;
    font-weight: bold;
    border: 0;
  }

  .ck-content h2.document-subtitle {
    font-family: var(--ck-georgia-serif-font-stack);
    font-size: 20px;
    font-weight: bold;
    color: #d1d1d1;
    letter-spacing: 10px;
  }

  .ck-content p.callout {
    --border-color: #e91e1e;
    padding: 1.2em 2em;
    border: 1px solid var(--border-color);
    border-left: 10px solid var(--border-color);
    background: #fff9fb;
    border-radius: 5px;
    margin: 1.5em 2em;
    box-shadow: 5px 5px 0 #ffe6ef;
  }

  .ck-content blockquote.side-quote {
    font-family: var(--ck-georgia-serif-font-stack);
    font-style: normal;
    float: right;
    width: 35%;
    position: relative;
    border: 0;
    overflow: visible;
    z-index: 1;
    margin-left: 1em;
  }

  .ck-content blockquote.side-quote::before {
    content: '“';
    position: absolute;
    top: -37px;
    left: -10px;
    display: block;
    font-size: 200px;
    color: #e7e7e7;
    z-index: -1;
    line-height: 1;
  }

  .ck-content blockquote.side-quote p {
    font-size: 2em;
    line-height: 1;
  }

  .ck-content blockquote.side-quote p:last-child:not(:first-child) {
    font-size: 1.3em;
    text-align: right;
    color: #555;
  }

  .ck-content span.needs-clarification {
    outline: 1px dashed #c8a24b;
    background: #ffe19c;
    border-radius: 2px;
    position: relative;
  }

  .ck-content span.needs-clarification::after {
    content: '?';
    display: inline-block;
    color: #fff;
    background: #3b3b3b;
    font-size: 12px;
    vertical-align: super;
    width: 12px;
    height: 12px;
    line-height: 12px;
    border-radius: 10px;
    text-align: center;
    position: absolute;
    right: -6px;
    top: -6px;
    font-weight: bold;
    letter-spacing: initial;
  }

  .ck-content span.wide-spacing {
    letter-spacing: 0.3em;
  }

  .ck-content span.small-caps {
    font-variant: small-caps;
  }

  .ck-content span.spoiler {
    background: #000;
    color: #000;
  }

  .ck-content span.spoiler:hover {
    background: #000;
    color: #fff;
  }

  .ck-content pre.stylish-code {
    border-color: transparent;
    margin-left: 2em;
    margin-right: 2em;
    border-radius: 10px;
  }

  .ck-content pre.stylish-code::before {
    content: '';
    display: block;
    height: 13px;
    background: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NCAxMyI+CiAgPGNpcmNsZSBjeD0iNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGMzZCNUMiLz4KICA8Y2lyY2xlIGN4PSIyNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGOUJFNEQiLz4KICA8Y2lyY2xlIGN4PSI0Ny41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiM1NkM0NTMiLz4KPC9zdmc+Cg==);
    margin-bottom: 8px;
    background-repeat: no-repeat;
  }

  .ck-content pre.stylish-code-dark,
  .ck-content pre.stylish-code-bright {
    padding: 1em;
  }

  .ck-content pre.stylish-code-dark {
    background: #272822;
    box-shadow: 5px 5px 0 #0000001f;
    color: white;
  }

  .ck-content pre.stylish-code-dark code {
    color: white;
  }

  .ck-content pre.stylish-code-bright {
    background: #dddfe0;
    color: #000;
    box-shadow: 5px 5px 0 #b3b3b3;
  }

  .ck-content pre.stylish-code-bright code {
    color: #222;
  }
`,To={common:Fo,light:Ko,dark:Ro,additional:Ho},Do=(0,T.createGlobalStyle)`
  ${({theme:e})=>e.common}
  ${({theme:e,variant:o})=>e[o]}
  ${({theme:e})=>e.additional}
`,Oo=()=>window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",jo=()=>{const{theme:e,dontMergeTheme:o}=globalThis.SH_CKE_CONFIG||{},t=localStorage.getItem("STRAPI_THEME"),r=t&&t!=="system"?t:Oo(),i=o?e:{...To,...e};return(0,f.jsx)(Do,{theme:i,variant:r})},Uo=(0,T.default)("div")`
  ${({styles:e})=>e}
`,io=({onChange:e,name:o,value:t="",disabled:r=!1,presetName:i,maxLength:n})=>{const[a,l]=(0,v.useState)(!1),[d,k]=(0,v.useState)(!1),[g,F]=(0,v.useState)(null),[C,L]=(0,v.useState)(!1),I=(0,v.useRef)(null),R=()=>k(y=>!y),H=y=>y>n?L(!0):L(!1);return(0,v.useEffect)(()=>{(async()=>{const y=await Mo(i,R);F(y)})()},[]),(0,f.jsxs)(f.Fragment,{children:[g&&(0,f.jsx)(jo,{}),(0,f.jsxs)(Uo,{styles:g?.styles,children:[!g&&(0,f.jsx)(Vo,{hasRadius:!0,background:"neutral100",children:(0,f.jsx)(oo.a,{children:"Loading..."})}),g&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Pe,{editor:uo.ClassicEditor,config:g.editorConfig,disabled:r,data:t,onReady:y=>{if(g.editorConfig.WordCountPlugin){const S=y.plugins.get("WordCount");S.on("update",(K,D)=>H(D.characters)),I.current?.appendChild(S.wordCountContainer)}y.plugins.has("ImageUploadEditing")&&y.plugins.get("ImageUploadEditing").on("uploadComplete",(S,{data:E,imageElement:K})=>y.model.change(D=>D.setAttribute("alt",E.alt,K))),l(y)},onChange:(y,S)=>{const E=S.getData();e({target:{name:o,value:E}})}}),(0,f.jsx)(ro,{isOpen:d,onToggle:R,editor:a}),g.editorConfig.WordCountPlugin&&(0,f.jsx)(Po,{color:C?"danger500":"neutral400",ref:I,children:!a&&(0,f.jsx)(oo.a,{small:!0,children:"Loading..."})})]})]})]})};io.propTypes={onChange:x().func.isRequired,fieldName:x().string.isRequired,value:x().string,disabled:x().bool};const Po=(0,T.default)(to.a)`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`,Vo=(0,T.default)(to.a)`
  display: flex;
  height: 200px;
  width: 100%;
  justify-content: center;
  align-items: center;
`,co=v.forwardRef((e,o)=>{const{name:t,attribute:r,onChange:i,value:n,intlLabel:a,labelAction:l,disabled:d,error:k,description:g,required:F}=e,{formatMessage:C}=(0,ve.A)(),{preset:L,maxLengthCharacters:I,...R}=r.options;return(0,f.jsx)(m.D,{name:t,id:t,error:k,required:F,hint:g&&C(g),children:(0,f.jsxs)(Se.B,{spacing:1,children:[(0,f.jsx)(ye.d,{action:l,children:C(a)}),(0,f.jsx)(io,{disabled:d,name:t,onChange:i,value:n,presetName:L,maxLength:I}),(0,f.jsx)(xe.o,{}),(0,f.jsx)(Ce.b,{})]})})});co.propTypes={intlLabel:x().object.isRequired,onChange:x().func.isRequired,attribute:x().object.isRequired,name:x().string.isRequired,description:x().object,disabled:x().bool,error:x().string,labelAction:x().object,required:x().bool,value:x().string};const $o=co}}]);
