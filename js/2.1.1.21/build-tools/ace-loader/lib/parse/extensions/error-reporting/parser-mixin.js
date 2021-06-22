"use strict";const ErrorReportingMixinBase=require("./mixin-base"),ErrorReportingTokenizerMixin=require("./tokenizer-mixin"),LocationInfoTokenizerMixin=require("../location-info/tokenizer-mixin"),Mixin=require("../../utils/mixin");class ErrorReportingParserMixin extends ErrorReportingMixinBase{constructor(t,e){super(t,e),this.opts=e,this.ctLoc=null,this.locBeforeToken=!1}_setErrorLocation(t){this.ctLoc&&(t.startLine=this.ctLoc.startLine,t.startCol=this.ctLoc.startCol,t.startOffset=this.ctLoc.startOffset,t.endLine=this.locBeforeToken?this.ctLoc.startLine:this.ctLoc.endLine,t.endCol=this.locBeforeToken?this.ctLoc.startCol:this.ctLoc.endCol,t.endOffset=this.locBeforeToken?this.ctLoc.startOffset:this.ctLoc.endOffset)}_getOverriddenMethods(t,e){return{_bootstrap(o,i){e._bootstrap.call(this,o,i),Mixin.install(this.tokenizer,ErrorReportingTokenizerMixin,t.opts),Mixin.install(this.tokenizer,LocationInfoTokenizerMixin)},_processInputToken(o){t.ctLoc=o.location,e._processInputToken.call(this,o)},_err(e,o){t.locBeforeToken=o&&o.beforeToken,t._reportError(e)}}}}module.exports=ErrorReportingParserMixin;