// Stylelint 7.11.0

module.exports = {
    "plugins": [
        "stylelint-order"
    ],
    "rules": {
        "at-rule-empty-line-before": ["always", {
            except: ["blockless-after-blockless"],
            ignore: ["inside-block"]
        }],
        "at-rule-name-case": "lower",
        "at-rule-name-space-after": "always",
        "at-rule-no-vendor-prefix": true,
        "at-rule-semicolon-newline-after": "always",

        "block-closing-brace-newline-after": ["always", {
            ignoreAtRules: ["if", "else"]
        }],
        "block-closing-brace-empty-line-before": "never",
        "block-no-empty": true,
        "block-opening-brace-newline-after": "always-multi-line",
        "block-closing-brace-newline-before": "always-multi-line",
        "block-closing-brace-space-before": "always-single-line",

        "color-hex-case": "lower",
        "color-hex-length": "long",
        "color-named": "always-where-possible",
        "color-no-hex": true,
        "color-no-invalid-hex": true,

        "comment-empty-line-before": "always",
        "comment-no-empty": true,

        "declaration-bang-space-after": "never",
        "declaration-bang-space-before": "always",
        "declaration-block-no-duplicate-properties": true,
        "declaration-block-no-shorthand-property-overrides": true,
        "declaration-block-semicolon-newline-after": "always",
        "declaration-block-semicolon-newline-before": "never-multi-line",
        "declaration-block-semicolon-space-after": "always-single-line",
        "declaration-block-semicolon-space-before": "never",
        "declaration-block-single-line-max-declarations": 1,
        "declaration-block-trailing-semicolon": "always",
        "declaration-colon-space-after": "always",
        "declaration-colon-space-before": "never",
        "declaration-block-no-redundant-longhand-properties": true,

        "font-family-name-quotes": "always-where-required",
        "font-family-no-duplicate-names": true,
        "font-weight-notation": "numeric",

        "function-calc-no-unspaced-operator": true,
        "function-comma-newline-after": "never-multi-line",
        "function-comma-newline-before": "never-multi-line",
        "function-comma-space-after": "always",
        "function-comma-space-before": "never",
        "function-linear-gradient-no-nonstandard-direction": true,
        "function-max-empty-lines": 0,
        "function-parentheses-newline-inside": "never-multi-line",
        "function-parentheses-space-inside": "never",
        "function-url-data-uris": "never",
        "function-whitespace-after": "always",

        "indentation": 4,

        "length-zero-no-unit": true,

        "max-empty-lines": 5,
        "max-nesting-depth": [3, {
            ignore: ["blockless-at-rules"]
        }],

        "media-feature-colon-space-after": "always",
        "media-feature-colon-space-before": "never",
        "media-feature-name-case": "lower",
        "media-feature-name-no-vendor-prefix": true,
        "media-feature-parentheses-space-inside": "never",
        "media-feature-range-operator-space-after": "always",
        "media-feature-range-operator-space-before": "always",
        "media-query-list-comma-newline-after": "never-multi-line",
        "media-query-list-comma-newline-before": "never-multi-line",
        "media-query-list-comma-space-after": "always",
        "media-query-list-comma-space-before": "never",

        "no-duplicate-selectors": true,
        "no-eol-whitespace": true,
        "no-extra-semicolons": true,
        "no-invalid-double-slash-comments": true,
        "no-missing-end-of-source-newline": true,
        "no-unknown-animations": true,

        "number-leading-zero": "never",
        "number-no-trailing-zeros": true,

        "order/declaration-block-order": [
            {
                type: 'at-rule',
                name: 'extend',
            },
            {
                type: 'at-rule',
                name: 'include',
            },
            "declarations",
            "rules",
            {
                type: 'at-rule',
                name: 'include',
                parameter: 'breakpoint',
                hasBlock: true
            },
        ],
        "order/declaration-block-properties-specified-order": [
            "display",
            "position",
            "top",
            "right",
            "bottom",
            "left",
            "flex",
            "flex-basis",
            "flex-direction",
            "flex-flow",
            "flex-grow",
            "flex-shrink",
            "flex-wrap",
            "align-content",
            "align-items",
            "align-self",
            "justify-content",
            "order",
            "width",
            "min-width",
            "max-width",
            "height",
            "min-height",
            "max-height",
            "margin",
            "margin-top",
            "margin-right",
            "margin-bottom",
            "margin-left",
            "padding",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left",
            "float",
            "clear",
            "clip",
            "columns",
            "column-gap",
            "column-fill",
            "column-rule",
            "column-span",
            "column-count",
            "column-width",
            "transform",
            "transform-box",
            "transform-origin",
            "transform-style",
            "transition",
            "transition-delay",
            "transition-duration",
            "transition-property",
            "transition-timing-function",
            "border",
            "border-top",
            "border-right",
            "border-bottom",
            "border-left",
            "border-width",
            "border-top-width",
            "border-right-width",
            "border-bottom-width",
            "border-left-width",
            "border-style",
            "border-top-style",
            "border-right-style",
            "border-bottom-style",
            "border-left-style",
            "border-radius",
            "border-top-left-radius",
            "border-top-right-radius",
            "border-bottom-left-radius",
            "border-bottom-right-radius",
            "border-color",
            "border-top-color",
            "border-right-color",
            "border-bottom-color",
            "border-left-color",
            "outline",
            "outline-color",
            "outline-offset",
            "outline-style",
            "outline-width",
            "background",
            "background-attachment",
            "background-clip",
            "background-color",
            "background-image",
            "background-repeat",
            "background-position",
            "background-size",
            "color",
            "font",
            "font-family",
            "font-size",
            "font-smoothing",
            "font-style",
            "font-variant",
            "font-weight",
            "letter-spacing",
            "line-height",
            "list-style",
            "text-align",
            "text-decoration",
            "text-indent",
            "text-overflow",
            "text-rendering",
            "text-shadow",
            "text-transform",
            "text-wrap",
            "white-space",
            "word-spacing",
            "border-collapse",
            "border-spacing",
            "box-shadow",
            "caption-side",
            "content",
            "cursor",
            "empty-cells",
            "opacity",
            "overflow",
            "quotes",
            "speak",
            "table-layout",
            "vertical-align",
            "visibility",
            "z-index"
        ],

        "property-case": "lower",

        "rule-empty-line-before": "always",

        "selector-descendant-combinator-no-non-space": true,
        "selector-pseudo-class-parentheses-space-inside": "never",
        "selector-pseudo-element-case": "lower",
        "selector-pseudo-element-colon-notation": "double",
        "selector-pseudo-element-no-unknown": true,
        "selector-type-case": "lower",
        "selector-type-no-unknown": true,

        "shorthand-property-no-redundant-values": true,

        "string-no-newline": true,
        "string-quotes": "single",

        "time-min-milliseconds": 100,

        "unit-case": "lower",
        "unit-no-unknown": true,

        "value-list-comma-newline-after": "never-multi-line",
        "value-list-comma-newline-before": "never-multi-line",
        "value-list-comma-space-after": "always",
        "value-list-comma-space-before": "never",
        "value-list-max-empty-lines": 0,
        "value-no-vendor-prefix": true
    }
}
