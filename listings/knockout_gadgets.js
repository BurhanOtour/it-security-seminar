\\ gadget #1: Binding Gadget
switch (node.nodeType) {
    case 1: return node.getAttribute("data-bind")

\\ gadget #2: Function construction
var rewrittenBindings = ko.expressionRewriting.
    preProcessBindings(bindingString, options),
    functionBody = "with($context){with($data||{}){return" +
        rewrittenBindings + "}}}";
    return new Function("$context","$element",body);

\\ gedget #3: Execute the newly created JS function
return bindingFunction(bindingContext, node);
