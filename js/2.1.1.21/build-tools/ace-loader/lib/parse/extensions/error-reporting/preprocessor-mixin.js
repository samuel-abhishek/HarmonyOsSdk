"use strict";const ErrorReportingMixinBase=require("./mixin-base"),PositionTrackingPreprocessorMixin=require("../position-tracking/preprocessor-mixin"),Mixin=require("../../utils/mixin");class ErrorReportingPreprocessorMixin extends ErrorReportingMixinBase{constructor(r,i){super(r,i),this.posTracker=Mixin.install(r,PositionTrackingPreprocessorMixin),this.lastErrOffset=-1}_reportError(r){this.lastErrOffset!==this.posTracker.offset&&(this.lastErrOffset=this.posTracker.offset,super._reportError(r))}}module.exports=ErrorReportingPreprocessorMixin;