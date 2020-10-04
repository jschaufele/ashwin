import Head from "next/head";

const FluentCssString = `
@charset 'UTF-8';
/* Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information. */
/**
 * Office UI Fabric Core 11.0.0
 * The front-end framework for building experiences for Office 365.
 **/
/*
  Your use of the content in the files referenced here is subject to the terms of the license at http://aka.ms/fabric-assets-license
*/
@-webkit-keyframes ms-motion-fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes ms-motion-fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@-webkit-keyframes ms-motion-fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes ms-motion-fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@-webkit-keyframes ms-motion-scaleDownIn {
  from {
    transform: scale3d(1.15, 1.15, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

@keyframes ms-motion-scaleDownIn {
  from {
    transform: scale3d(1.15, 1.15, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

@-webkit-keyframes ms-motion-scaleDownOut {
  from {
    transform: scale3d(1, 1, 1);
  }

  to {
    transform: scale3d(0.9, 0.9, 1);
  }
}

@keyframes ms-motion-scaleDownOut {
  from {
    transform: scale3d(1, 1, 1);
  }

  to {
    transform: scale3d(0.9, 0.9, 1);
  }
}

@-webkit-keyframes ms-motion-slideLeftOut {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(-48px, 0, 0);
  }
}

@keyframes ms-motion-slideLeftOut {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(-48px, 0, 0);
  }
}

@-webkit-keyframes ms-motion-slideRightOut {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(48px, 0, 0);
  }
}

@keyframes ms-motion-slideRightOut {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(48px, 0, 0);
  }
}

@-webkit-keyframes ms-motion-slideLeftIn {
  from {
    transform: translate3d(48px, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes ms-motion-slideLeftIn {
  from {
    transform: translate3d(48px, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

@-webkit-keyframes ms-motion-slideRightIn {
  from {
    transform: translate3d(-48px, 0, 0);
  }

  to {
    transform: translate3d(0px, 0, 0);
  }
}

@keyframes ms-motion-slideRightIn {
  from {
    transform: translate3d(-48px, 0, 0);
  }

  to {
    transform: translate3d(0px, 0, 0);
  }
}

@-webkit-keyframes ms-motion-slideUpOut {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(0, -48px, 0);
  }
}

@keyframes ms-motion-slideUpOut {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(0, -48px, 0);
  }
}

@-webkit-keyframes ms-motion-slideDownOut {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(0, 48px, 0);
  }
}

@keyframes ms-motion-slideDownOut {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(0, 48px, 0);
  }
}

@-webkit-keyframes ms-motion-slideUpIn {
  from {
    transform: translate3d(0, 48px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes ms-motion-slideUpIn {
  from {
    transform: translate3d(0, 48px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

@-webkit-keyframes ms-motion-slideDownIn {
  from {
    transform: translate3d(0, -48px, 0);
  }

  to {
    transform: translate3d(0px, 0, 0);
  }
}

@keyframes ms-motion-slideDownIn {
  from {
    transform: translate3d(0, -48px, 0);
  }

  to {
    transform: translate3d(0px, 0, 0);
  }
}

.ms-motion-fadeIn {
  -webkit-animation: ms-motion-fadeIn 100ms cubic-bezier(0, 0, 1, 1) both;
          animation: ms-motion-fadeIn 100ms cubic-bezier(0, 0, 1, 1) both;
}

.ms-motion-fadeOut {
  -webkit-animation: ms-motion-fadeOut 100ms cubic-bezier(0, 0, 1, 1) both;
          animation: ms-motion-fadeOut 100ms cubic-bezier(0, 0, 1, 1) both;
}

.ms-motion-scaleDownIn {
  -webkit-animation: ms-motion-scaleDownIn 300ms cubic-bezier(0.1, 0.9, 0.2, 1) both, ms-motion-fadeIn 100ms cubic-bezier(0, 0, 1, 1) both;
          animation: ms-motion-scaleDownIn 300ms cubic-bezier(0.1, 0.9, 0.2, 1) both, ms-motion-fadeIn 100ms cubic-bezier(0, 0, 1, 1) both;
}

.ms-motion-scaleDownOut {
  -webkit-animation: ms-motion-scaleDownOut 300ms cubic-bezier(0.1, 0.9, 0.2, 1) both, ms-motion-fadeOut 100ms cubic-bezier(0, 0, 1, 1) both;
          animation: ms-motion-scaleDownOut 300ms cubic-bezier(0.1, 0.9, 0.2, 1) both, ms-motion-fadeOut 100ms cubic-bezier(0, 0, 1, 1) both;
}

[dir='ltr'] .ms-motion-slideLeftOut {
  -webkit-animation: ms-motion-slideLeftOut 100ms cubic-bezier(0.9, 0.1, 1, 0.2) both, ms-motion-fadeOut 100ms cubic-bezier(0, 0, 1, 1) both;
          animation: ms-motion-slideLeftOut 100ms cubic-bezier(0.9, 0.1, 1, 0.2) both, ms-motion-fadeOut 100ms cubic-bezier(0, 0, 1, 1) both;
}

[dir='rtl'] .ms-motion-slideLeftOut {
  -webkit-animation: ms-motion-slideRightOut 100ms cubic-bezier(0.9, 0.1, 1, 0.2) both, ms-motion-fadeOut 100ms cubic-bezier(0, 0, 1, 1) both;
          animation: ms-motion-slideRightOut 100ms cubic-bezier(0.9, 0.1, 1, 0.2) both, ms-motion-fadeOut 100ms cubic-bezier(0, 0, 1, 1) both;
}

[dir='ltr'] .ms-motion-slideRightOut {
  -webkit-animation: ms-motion-slideRightOut 100ms cubic-bezier(0.9, 0.1, 1, 0.2) both, ms-motion-fadeOut 100ms cubic-bezier(0, 0, 1, 1) both;
          animation: ms-motion-slideRightOut 100ms cubic-bezier(0.9, 0.1, 1, 0.2) both, ms-motion-fadeOut 100ms cubic-bezier(0, 0, 1, 1) both;
}

[dir='rtl'] .ms-motion-slideRightOut {
  -webkit-animation: ms-motion-slideLeftOut 100ms cubic-bezier(0.9, 0.1, 1, 0.2) both, ms-motion-fadeOut 100ms cubic-bezier(0, 0, 1, 1) both;
          animation: ms-motion-slideLeftOut 100ms cubic-bezier(0.9, 0.1, 1, 0.2) both, ms-motion-fadeOut 100ms cubic-bezier(0, 0, 1, 1) both;
}

[dir='ltr'] .ms-motion-slideLeftIn {
  -webkit-animation: ms-motion-slideLeftIn 100ms cubic-bezier(0.1, 0.9, 0.2, 1) both, ms-motion-fadeIn 100ms cubic-bezier(0, 0, 1, 1) both;
          animation: ms-motion-slideLeftIn 100ms cubic-bezier(0.1, 0.9, 0.2, 1) both, ms-motion-fadeIn 100ms cubic-bezier(0, 0, 1, 1) both;
}

[dir='rtl'] .ms-motion-slideLeftIn {
  -webkit-animation: ms-motion-slideRightIn 100ms cubic-bezier(0.1, 0.9, 0.2, 1) both, ms-motion-fadeIn 100ms cubic-bezier(0, 0, 1, 1) both;
          animation: ms-motion-slideRightIn 100ms cubic-bezier(0.1, 0.9, 0.2, 1) both, ms-motion-fadeIn 100ms cubic-bezier(0, 0, 1, 1) both;
}

[dir='ltr'] .ms-motion-slideRightIn {
  -webkit-animation: ms-motion-slideRightIn 100ms cubic-bezier(0.1, 0.9, 0.2, 1) both, ms-motion-fadeIn 100ms cubic-bezier(0, 0, 1, 1) both;
          animation: ms-motion-slideRightIn 100ms cubic-bezier(0.1, 0.9, 0.2, 1) both, ms-motion-fadeIn 100ms cubic-bezier(0, 0, 1, 1) both;
}

[dir='rtl'] .ms-motion-slideRightIn {
  -webkit-animation: ms-motion-slideLeftIn 100ms cubic-bezier(0.1, 0.9, 0.2, 1) both, ms-motion-fadeIn 100ms cubic-bezier(0, 0, 1, 1) both;
          animation: ms-motion-slideLeftIn 100ms cubic-bezier(0.1, 0.9, 0.2, 1) both, ms-motion-fadeIn 100ms cubic-bezier(0, 0, 1, 1) both;
}

.ms-motion-slideUpOut {
  -webkit-animation: ms-motion-slideUpOut 100ms cubic-bezier(0.9, 0.1, 1, 0.2) both, ms-motion-fadeOut 100ms cubic-bezier(0, 0, 1, 1) both;
          animation: ms-motion-slideUpOut 100ms cubic-bezier(0.9, 0.1, 1, 0.2) both, ms-motion-fadeOut 100ms cubic-bezier(0, 0, 1, 1) both;
}

.ms-motion-slideDownOut {
  -webkit-animation: ms-motion-slideDownOut 100ms cubic-bezier(0.9, 0.1, 1, 0.2) both, ms-motion-fadeOut 100ms cubic-bezier(0, 0, 1, 1) both;
          animation: ms-motion-slideDownOut 100ms cubic-bezier(0.9, 0.1, 1, 0.2) both, ms-motion-fadeOut 100ms cubic-bezier(0, 0, 1, 1) both;
}

.ms-motion-slideUpIn {
  -webkit-animation: ms-motion-slideUpIn 100ms cubic-bezier(0.1, 0.9, 0.2, 1) both, ms-motion-fadeIn 100ms cubic-bezier(0, 0, 1, 1) both;
          animation: ms-motion-slideUpIn 100ms cubic-bezier(0.1, 0.9, 0.2, 1) both, ms-motion-fadeIn 100ms cubic-bezier(0, 0, 1, 1) both;
}

.ms-motion-slideDownIn {
  -webkit-animation: ms-motion-slideDownIn 100ms cubic-bezier(0.1, 0.9, 0.2, 1) both, ms-motion-fadeIn 100ms cubic-bezier(0, 0, 1, 1) both;
          animation: ms-motion-slideDownIn 100ms cubic-bezier(0.1, 0.9, 0.2, 1) both, ms-motion-fadeIn 100ms cubic-bezier(0, 0, 1, 1) both;
}

@-webkit-keyframes ms-slideRightIn10 {
  from {
    transform: translate3d(-10px, 0px, 0px);
  }

  to {
    transform: translate3d(0px, 0px, 0px);
  }
}

@keyframes ms-slideRightIn10 {
  from {
    transform: translate3d(-10px, 0px, 0px);
  }

  to {
    transform: translate3d(0px, 0px, 0px);
  }
}

@-webkit-keyframes ms-slideRightIn20 {
  from {
    transform: translate3d(-20px, 0px, 0px);
  }

  to {
    transform: translate3d(0px, 0px, 0px);
  }
}

@keyframes ms-slideRightIn20 {
  from {
    transform: translate3d(-20px, 0px, 0px);
  }

  to {
    transform: translate3d(0px, 0px, 0px);
  }
}

@-webkit-keyframes ms-slideRightIn40 {
  from {
    transform: translate3d(-40px, 0px, 0px);
  }

  to {
    transform: translate3d(0px, 0px, 0px);
  }
}

@keyframes ms-slideRightIn40 {
  from {
    transform: translate3d(-40px, 0px, 0px);
  }

  to {
    transform: translate3d(0px, 0px, 0px);
  }
}

@-webkit-keyframes ms-slideRightIn400 {
  from {
    transform: translate3d(-400px, 0px, 0px);
  }

  to {
    transform: translate3d(0px, 0px, 0px);
  }
}

@keyframes ms-slideRightIn400 {
  from {
    transform: translate3d(-400px, 0px, 0px);
  }

  to {
    transform: translate3d(0px, 0px, 0px);
  }
}

@-webkit-keyframes ms-slideRightOut40 {
  from {
    transform: translate3d(0px, 0px, 0px);
  }

  to {
    transform: translate3d(40px, 0px, 0px);
  }
}

@keyframes ms-slideRightOut40 {
  from {
    transform: translate3d(0px, 0px, 0px);
  }

  to {
    transform: translate3d(40px, 0px, 0px);
  }
}

@-webkit-keyframes ms-slideRightOut400 {
  from {
    transform: translate3d(0, 0px, 0px);
  }

  to {
    transform: translate3d(400px, 0px, 0px);
  }
}

@keyframes ms-slideRightOut400 {
  from {
    transform: translate3d(0, 0px, 0px);
  }

  to {
    transform: translate3d(400px, 0px, 0px);
  }
}

@-webkit-keyframes ms-slideLeftIn10 {
  from {
    transform: translate3d(10px, 0px, 0px);
  }

  to {
    transform: translate3d(0px, 0px, 0px);
  }
}

@keyframes ms-slideLeftIn10 {
  from {
    transform: translate3d(10px, 0px, 0px);
  }

  to {
    transform: translate3d(0px, 0px, 0px);
  }
}

@-webkit-keyframes ms-slideLeftIn20 {
  from {
    transform: translate3d(20px, 0px, 0px);
  }

  to {
    transform: translate3d(0px, 0px, 0px);
  }
}

@keyframes ms-slideLeftIn20 {
  from {
    transform: translate3d(20px, 0px, 0px);
  }

  to {
    transform: translate3d(0px, 0px, 0px);
  }
}

@-webkit-keyframes ms-slideLeftIn40 {
  from {
    transform: translate3d(40px, 0px, 0px);
  }

  to {
    transform: translate3d(0px, 0px, 0px);
  }
}

@keyframes ms-slideLeftIn40 {
  from {
    transform: translate3d(40px, 0px, 0px);
  }

  to {
    transform: translate3d(0px, 0px, 0px);
  }
}

@-webkit-keyframes ms-slideLeftIn400 {
  from {
    transform: translate3d(400px, 0px, 0px);
  }

  to {
    transform: translate3d(0px, 0px, 0px);
  }
}

@keyframes ms-slideLeftIn400 {
  from {
    transform: translate3d(400px, 0px, 0px);
  }

  to {
    transform: translate3d(0px, 0px, 0px);
  }
}

@-webkit-keyframes ms-slideLeftOut40 {
  from {
    transform: translate3d(0, 0px, 0px);
  }

  to {
    transform: translate3d(-40px, 0px, 0px);
  }
}

@keyframes ms-slideLeftOut40 {
  from {
    transform: translate3d(0, 0px, 0px);
  }

  to {
    transform: translate3d(-40px, 0px, 0px);
  }
}

@-webkit-keyframes ms-slideLeftOut400 {
  from {
    transform: translate3d(0, 0px, 0px);
  }

  to {
    transform: translate3d(-400px, 0px, 0px);
  }
}

@keyframes ms-slideLeftOut400 {
  from {
    transform: translate3d(0, 0px, 0px);
  }

  to {
    transform: translate3d(-400px, 0px, 0px);
  }
}

@-webkit-keyframes ms-slideUpIn10 {
  from {
    transform: translate3d(0px, 10px, 0px);
  }

  to {
    transform: translate3d(0px, 0px, 0px);
  }
}

@keyframes ms-slideUpIn10 {
  from {
    transform: translate3d(0px, 10px, 0px);
  }

  to {
    transform: translate3d(0px, 0px, 0px);
  }
}

@-webkit-keyframes ms-slideUpIn20 {
  from {
    transform: translate3d(0px, 20px, 0px);
  }

  to {
    transform: translate3d(0px, 0px, 0px);
  }
}

@keyframes ms-slideUpIn20 {
  from {
    transform: translate3d(0px, 20px, 0px);
  }

  to {
    transform: translate3d(0px, 0px, 0px);
  }
}

@-webkit-keyframes ms-slideDownIn10 {
  from {
    transform: translate3d(0px, -10px, 0px);
  }

  to {
    transform: translate3d(0px, 0px, 0px);
  }
}

@keyframes ms-slideDownIn10 {
  from {
    transform: translate3d(0px, -10px, 0px);
  }

  to {
    transform: translate3d(0px, 0px, 0px);
  }
}

@-webkit-keyframes ms-slideDownIn20 {
  from {
    transform: translate3d(0px, -20px, 0px);
  }

  to {
    transform: translate3d(0px, 0px, 0px);
  }
}

@keyframes ms-slideDownIn20 {
  from {
    transform: translate3d(0px, -20px, 0px);
  }

  to {
    transform: translate3d(0px, 0px, 0px);
  }
}

@-webkit-keyframes ms-slideUpOut10 {
  from {
    transform: translate3d(0px, 0, 0px);
  }

  to {
    transform: translate3d(0px, -10px, 0px);
  }
}

@keyframes ms-slideUpOut10 {
  from {
    transform: translate3d(0px, 0, 0px);
  }

  to {
    transform: translate3d(0px, -10px, 0px);
  }
}

@-webkit-keyframes ms-slideUpOut20 {
  from {
    transform: translate3d(0px, 0, 0px);
  }

  to {
    transform: translate3d(0px, -20px, 0px);
  }
}

@keyframes ms-slideUpOut20 {
  from {
    transform: translate3d(0px, 0, 0px);
  }

  to {
    transform: translate3d(0px, -20px, 0px);
  }
}

@-webkit-keyframes ms-slideDownOut10 {
  from {
    transform: translate3d(0px, 0, 0px);
  }

  to {
    transform: translate3d(0px, 10px, 0px);
  }
}

@keyframes ms-slideDownOut10 {
  from {
    transform: translate3d(0px, 0, 0px);
  }

  to {
    transform: translate3d(0px, 10px, 0px);
  }
}

@-webkit-keyframes ms-slideDownOut20 {
  from {
    transform: translate3d(0px, 0, 0px);
  }

  to {
    transform: translate3d(0px, 20px, 0px);
  }
}

@keyframes ms-slideDownOut20 {
  from {
    transform: translate3d(0px, 0, 0px);
  }

  to {
    transform: translate3d(0px, 20px, 0px);
  }
}

@-webkit-keyframes ms-scaleUp100 {
  from {
    transform: scale3d(0.98, 0.98, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

@keyframes ms-scaleUp100 {
  from {
    transform: scale3d(0.98, 0.98, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

@-webkit-keyframes ms-scaleUp103 {
  from {
    transform: scale3d(1, 1, 1);
  }

  to {
    transform: scale3d(1.03, 1.03, 1);
  }
}

@keyframes ms-scaleUp103 {
  from {
    transform: scale3d(1, 1, 1);
  }

  to {
    transform: scale3d(1.03, 1.03, 1);
  }
}

@-webkit-keyframes ms-scaleDown98 {
  from {
    transform: scale3d(1, 1, 1);
  }

  to {
    transform: scale3d(0.98, 0.98, 1);
  }
}

@keyframes ms-scaleDown98 {
  from {
    transform: scale3d(1, 1, 1);
  }

  to {
    transform: scale3d(0.98, 0.98, 1);
  }
}

@-webkit-keyframes ms-scaleDown100 {
  from {
    transform: scale3d(1.03, 1.03, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

@keyframes ms-scaleDown100 {
  from {
    transform: scale3d(1.03, 1.03, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

@-webkit-keyframes ms-fadeIn {
  from {
    opacity: 0;
    -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
            animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
  }

  to {
    opacity: 1;
  }
}

@keyframes ms-fadeIn {
  from {
    opacity: 0;
    -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
            animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
  }

  to {
    opacity: 1;
  }
}

@-webkit-keyframes ms-fadeOut {
  from {
    opacity: 1;
    -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
            animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
  }

  to {
    opacity: 0;
  }
}

@keyframes ms-fadeOut {
  from {
    opacity: 1;
    -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
            animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
  }

  to {
    opacity: 0;
  }
}

@-webkit-keyframes ms-rotate90 {
  from {
    transform: rotateZ(0deg);
  }

  to {
    transform: rotateZ(90deg);
  }
}

@keyframes ms-rotate90 {
  from {
    transform: rotateZ(0deg);
  }

  to {
    transform: rotateZ(90deg);
  }
}

@-webkit-keyframes ms-rotateN90 {
  from {
    transform: rotateZ(90deg);
  }

  to {
    transform: rotateZ(0deg);
  }
}

@keyframes ms-rotateN90 {
  from {
    transform: rotateZ(90deg);
  }

  to {
    transform: rotateZ(0deg);
  }
}

[dir='ltr'] .ms-slideRightIn10 {
  -webkit-animation-name: ms-fadeIn, ms-slideRightIn10;
          animation-name: ms-fadeIn, ms-slideRightIn10;
  -webkit-animation-duration: 0.367s;
          animation-duration: 0.367s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
          animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  [dir='ltr'] .ms-slideRightIn10 {
    -webkit-animation: none;
            animation: none;
  }
}

[dir='rtl'] .ms-slideRightIn10 {
  -webkit-animation-name: ms-fadeIn, ms-slideLeftIn10;
          animation-name: ms-fadeIn, ms-slideLeftIn10;
  -webkit-animation-duration: 0.367s;
          animation-duration: 0.367s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
          animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  [dir='rtl'] .ms-slideRightIn10 {
    -webkit-animation: none;
            animation: none;
  }
}

[dir='ltr'] .ms-slideRightIn20 {
  -webkit-animation-name: ms-fadeIn, ms-slideRightIn20;
          animation-name: ms-fadeIn, ms-slideRightIn20;
  -webkit-animation-duration: 0.367s;
          animation-duration: 0.367s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
          animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  [dir='ltr'] .ms-slideRightIn20 {
    -webkit-animation: none;
            animation: none;
  }
}

[dir='rtl'] .ms-slideRightIn20 {
  -webkit-animation-name: ms-fadeIn, ms-slideLeftIn20;
          animation-name: ms-fadeIn, ms-slideLeftIn20;
  -webkit-animation-duration: 0.367s;
          animation-duration: 0.367s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
          animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  [dir='rtl'] .ms-slideRightIn20 {
    -webkit-animation: none;
            animation: none;
  }
}

[dir='ltr'] .ms-slideRightIn40 {
  -webkit-animation-name: ms-fadeIn, ms-slideRightIn40;
          animation-name: ms-fadeIn, ms-slideRightIn40;
  -webkit-animation-duration: 0.367s;
          animation-duration: 0.367s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
          animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  [dir='ltr'] .ms-slideRightIn40 {
    -webkit-animation: none;
            animation: none;
  }
}

[dir='rtl'] .ms-slideRightIn40 {
  -webkit-animation-name: ms-fadeIn, ms-slideLeftIn40;
          animation-name: ms-fadeIn, ms-slideLeftIn40;
  -webkit-animation-duration: 0.367s;
          animation-duration: 0.367s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
          animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  [dir='rtl'] .ms-slideRightIn40 {
    -webkit-animation: none;
            animation: none;
  }
}

[dir='ltr'] .ms-slideRightIn400 {
  -webkit-animation-name: ms-fadeIn, ms-slideRightIn400;
          animation-name: ms-fadeIn, ms-slideRightIn400;
  -webkit-animation-duration: 0.367s;
          animation-duration: 0.367s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
          animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  [dir='ltr'] .ms-slideRightIn400 {
    -webkit-animation: none;
            animation: none;
  }
}

[dir='rtl'] .ms-slideRightIn400 {
  -webkit-animation-name: ms-fadeIn, ms-slideLeftIn400;
          animation-name: ms-fadeIn, ms-slideLeftIn400;
  -webkit-animation-duration: 0.367s;
          animation-duration: 0.367s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
          animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  [dir='rtl'] .ms-slideRightIn400 {
    -webkit-animation: none;
            animation: none;
  }
}

[dir='ltr'] .ms-slideRightOut40 {
  -webkit-animation-name: ms-fadeOut, ms-slideRightOut40;
          animation-name: ms-fadeOut, ms-slideRightOut40;
  -webkit-animation-duration: 0.167s;
          animation-duration: 0.167s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
          animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  [dir='ltr'] .ms-slideRightOut40 {
    -webkit-animation: none;
            animation: none;
  }
}

[dir='rtl'] .ms-slideRightOut40 {
  -webkit-animation-name: ms-fadeOut, ms-slideLeftOut40;
          animation-name: ms-fadeOut, ms-slideLeftOut40;
  -webkit-animation-duration: 0.167s;
          animation-duration: 0.167s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
          animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  [dir='rtl'] .ms-slideRightOut40 {
    -webkit-animation: none;
            animation: none;
  }
}

[dir='ltr'] .ms-slideRightOut400 {
  -webkit-animation-name: ms-fadeOut, ms-slideRightOut400;
          animation-name: ms-fadeOut, ms-slideRightOut400;
  -webkit-animation-duration: 0.167s;
          animation-duration: 0.167s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
          animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  [dir='ltr'] .ms-slideRightOut400 {
    -webkit-animation: none;
            animation: none;
  }
}

[dir='rtl'] .ms-slideRightOut400 {
  -webkit-animation-name: ms-fadeOut, ms-slideLeftOut400;
          animation-name: ms-fadeOut, ms-slideLeftOut400;
  -webkit-animation-duration: 0.167s;
          animation-duration: 0.167s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
          animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  [dir='rtl'] .ms-slideRightOut400 {
    -webkit-animation: none;
            animation: none;
  }
}

[dir='ltr'] .ms-slideLeftIn10 {
  -webkit-animation-name: ms-fadeIn, ms-slideLeftIn10;
          animation-name: ms-fadeIn, ms-slideLeftIn10;
  -webkit-animation-duration: 0.367s;
          animation-duration: 0.367s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
          animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  [dir='ltr'] .ms-slideLeftIn10 {
    -webkit-animation: none;
            animation: none;
  }
}

[dir='rtl'] .ms-slideLeftIn10 {
  -webkit-animation-name: ms-fadeIn, ms-slideRightIn10;
          animation-name: ms-fadeIn, ms-slideRightIn10;
  -webkit-animation-duration: 0.367s;
          animation-duration: 0.367s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
          animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  [dir='rtl'] .ms-slideLeftIn10 {
    -webkit-animation: none;
            animation: none;
  }
}

[dir='ltr'] .ms-slideLeftIn20 {
  -webkit-animation-name: ms-fadeIn, ms-slideLeftIn20;
          animation-name: ms-fadeIn, ms-slideLeftIn20;
  -webkit-animation-duration: 0.367s;
          animation-duration: 0.367s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
          animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  [dir='ltr'] .ms-slideLeftIn20 {
    -webkit-animation: none;
            animation: none;
  }
}

[dir='rtl'] .ms-slideLeftIn20 {
  -webkit-animation-name: ms-fadeIn, ms-slideRightIn20;
          animation-name: ms-fadeIn, ms-slideRightIn20;
  -webkit-animation-duration: 0.367s;
          animation-duration: 0.367s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
          animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  [dir='rtl'] .ms-slideLeftIn20 {
    -webkit-animation: none;
            animation: none;
  }
}

[dir='ltr'] .ms-slideLeftIn40 {
  -webkit-animation-name: ms-fadeIn, ms-slideLeftIn40;
          animation-name: ms-fadeIn, ms-slideLeftIn40;
  -webkit-animation-duration: 0.367s;
          animation-duration: 0.367s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
          animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  [dir='ltr'] .ms-slideLeftIn40 {
    -webkit-animation: none;
            animation: none;
  }
}

[dir='rtl'] .ms-slideLeftIn40 {
  -webkit-animation-name: ms-fadeIn, ms-slideRightIn40;
          animation-name: ms-fadeIn, ms-slideRightIn40;
  -webkit-animation-duration: 0.367s;
          animation-duration: 0.367s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
          animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  [dir='rtl'] .ms-slideLeftIn40 {
    -webkit-animation: none;
            animation: none;
  }
}

[dir='ltr'] .ms-slideLeftIn400 {
  -webkit-animation-name: ms-fadeIn, ms-slideLeftIn400;
          animation-name: ms-fadeIn, ms-slideLeftIn400;
  -webkit-animation-duration: 0.367s;
          animation-duration: 0.367s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
          animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  [dir='ltr'] .ms-slideLeftIn400 {
    -webkit-animation: none;
            animation: none;
  }
}

[dir='rtl'] .ms-slideLeftIn400 {
  -webkit-animation-name: ms-fadeIn, ms-slideRightIn400;
          animation-name: ms-fadeIn, ms-slideRightIn400;
  -webkit-animation-duration: 0.367s;
          animation-duration: 0.367s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
          animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  [dir='rtl'] .ms-slideLeftIn400 {
    -webkit-animation: none;
            animation: none;
  }
}

[dir='ltr'] .ms-slideLeftOut40 {
  -webkit-animation-name: ms-fadeOut, ms-slideLeftOut40;
          animation-name: ms-fadeOut, ms-slideLeftOut40;
  -webkit-animation-duration: 0.167s;
          animation-duration: 0.167s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
          animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  [dir='ltr'] .ms-slideLeftOut40 {
    -webkit-animation: none;
            animation: none;
  }
}

[dir='rtl'] .ms-slideLeftOut40 {
  -webkit-animation-name: ms-fadeOut, ms-slideRightOut40;
          animation-name: ms-fadeOut, ms-slideRightOut40;
  -webkit-animation-duration: 0.167s;
          animation-duration: 0.167s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
          animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  [dir='rtl'] .ms-slideLeftOut40 {
    -webkit-animation: none;
            animation: none;
  }
}

[dir='ltr'] .ms-slideLeftOut400 {
  -webkit-animation-name: ms-fadeOut, ms-slideLeftOut400;
          animation-name: ms-fadeOut, ms-slideLeftOut400;
  -webkit-animation-duration: 0.167s;
          animation-duration: 0.167s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
          animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  [dir='ltr'] .ms-slideLeftOut400 {
    -webkit-animation: none;
            animation: none;
  }
}

[dir='rtl'] .ms-slideLeftOut400 {
  -webkit-animation-name: ms-fadeOut, ms-slideRightOut400;
          animation-name: ms-fadeOut, ms-slideRightOut400;
  -webkit-animation-duration: 0.167s;
          animation-duration: 0.167s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
          animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  [dir='rtl'] .ms-slideLeftOut400 {
    -webkit-animation: none;
            animation: none;
  }
}

.ms-slideUpIn10 {
  -webkit-animation-name: ms-fadeIn, ms-slideUpIn10;
          animation-name: ms-fadeIn, ms-slideUpIn10;
  -webkit-animation-duration: 0.167s;
          animation-duration: 0.167s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
          animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  .ms-slideUpIn10 {
    -webkit-animation: none;
            animation: none;
  }
}

.ms-slideUpIn20 {
  -webkit-animation-name: ms-fadeIn, ms-slideUpIn20;
          animation-name: ms-fadeIn, ms-slideUpIn20;
  -webkit-animation-duration: 0.367s;
          animation-duration: 0.367s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
          animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  .ms-slideUpIn20 {
    -webkit-animation: none;
            animation: none;
  }
}

.ms-slideDownIn10 {
  -webkit-animation-name: ms-fadeIn, ms-slideDownIn10;
          animation-name: ms-fadeIn, ms-slideDownIn10;
  -webkit-animation-duration: 0.167s;
          animation-duration: 0.167s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
          animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  .ms-slideDownIn10 {
    -webkit-animation: none;
            animation: none;
  }
}

.ms-slideDownIn20 {
  -webkit-animation-name: ms-fadeIn, ms-slideDownIn20;
          animation-name: ms-fadeIn, ms-slideDownIn20;
  -webkit-animation-duration: 0.367s;
          animation-duration: 0.367s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
          animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  .ms-slideDownIn20 {
    -webkit-animation: none;
            animation: none;
  }
}

.ms-slideUpOut10 {
  -webkit-animation-name: ms-fadeOut, ms-slideUpOut10;
          animation-name: ms-fadeOut, ms-slideUpOut10;
  -webkit-animation-duration: 0.167s;
          animation-duration: 0.167s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
          animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  .ms-slideUpOut10 {
    -webkit-animation: none;
            animation: none;
  }
}

.ms-slideUpOut20 {
  -webkit-animation-name: ms-fadeOut, ms-slideUpOut20;
          animation-name: ms-fadeOut, ms-slideUpOut20;
  -webkit-animation-duration: 0.167s;
          animation-duration: 0.167s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
          animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  .ms-slideUpOut20 {
    -webkit-animation: none;
            animation: none;
  }
}

.ms-slideDownOut10 {
  -webkit-animation-name: ms-fadeOut, ms-slideDownOut10;
          animation-name: ms-fadeOut, ms-slideDownOut10;
  -webkit-animation-duration: 0.167s;
          animation-duration: 0.167s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
          animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  .ms-slideDownOut10 {
    -webkit-animation: none;
            animation: none;
  }
}

.ms-slideDownOut20 {
  -webkit-animation-name: ms-fadeOut, ms-slideDownOut20;
          animation-name: ms-fadeOut, ms-slideDownOut20;
  -webkit-animation-duration: 0.167s;
          animation-duration: 0.167s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
          animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  .ms-slideDownOut20 {
    -webkit-animation: none;
            animation: none;
  }
}

.ms-scaleUpIn100 {
  -webkit-animation-name: ms-fadeIn, ms-scaleUp100;
          animation-name: ms-fadeIn, ms-scaleUp100;
  -webkit-animation-duration: 0.367s;
          animation-duration: 0.367s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
          animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  .ms-scaleUpIn100 {
    -webkit-animation: none;
            animation: none;
  }
}

.ms-scaleUpOut103 {
  -webkit-animation-name: ms-fadeOut, ms-scaleUp103;
          animation-name: ms-fadeOut, ms-scaleUp103;
  -webkit-animation-duration: 0.167s;
          animation-duration: 0.167s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
          animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  .ms-scaleUpOut103 {
    -webkit-animation: none;
            animation: none;
  }
}

.ms-scaleDownOut98 {
  -webkit-animation-name: ms-fadeOut, ms-scaleDown98;
          animation-name: ms-fadeOut, ms-scaleDown98;
  -webkit-animation-duration: 0.167s;
          animation-duration: 0.167s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
          animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  .ms-scaleDownOut98 {
    -webkit-animation: none;
            animation: none;
  }
}

.ms-scaleDownIn100 {
  -webkit-animation-name: ms-fadeIn, ms-scaleDown100;
          animation-name: ms-fadeIn, ms-scaleDown100;
  -webkit-animation-duration: 0.367s;
          animation-duration: 0.367s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
          animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  .ms-scaleDownIn100 {
    -webkit-animation: none;
            animation: none;
  }
}

.ms-fadeIn100 {
  -webkit-animation-name: ms-fadeIn;
          animation-name: ms-fadeIn;
  -webkit-animation-duration: 0.167s;
          animation-duration: 0.167s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
          animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  .ms-fadeIn100 {
    -webkit-animation: none;
            animation: none;
  }
}

.ms-fadeIn200 {
  -webkit-animation-name: ms-fadeIn;
          animation-name: ms-fadeIn;
  -webkit-animation-duration: 0.267s;
          animation-duration: 0.267s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
          animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  .ms-fadeIn200 {
    -webkit-animation: none;
            animation: none;
  }
}

.ms-fadeIn400 {
  -webkit-animation-name: ms-fadeIn;
          animation-name: ms-fadeIn;
  -webkit-animation-duration: 0.367s;
          animation-duration: 0.367s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
          animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  .ms-fadeIn400 {
    -webkit-animation: none;
            animation: none;
  }
}

.ms-fadeIn500 {
  -webkit-animation-name: ms-fadeIn;
          animation-name: ms-fadeIn;
  -webkit-animation-duration: 0.467s;
          animation-duration: 0.467s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
          animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  .ms-fadeIn500 {
    -webkit-animation: none;
            animation: none;
  }
}

.ms-fadeOut100 {
  -webkit-animation-name: ms-fadeOut;
          animation-name: ms-fadeOut;
  -webkit-animation-duration: 0.1s;
          animation-duration: 0.1s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
          animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  .ms-fadeOut100 {
    -webkit-animation: none;
            animation: none;
  }
}

.ms-fadeOut200 {
  -webkit-animation-name: ms-fadeOut;
          animation-name: ms-fadeOut;
  -webkit-animation-duration: 0.167s;
          animation-duration: 0.167s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
          animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  .ms-fadeOut200 {
    -webkit-animation: none;
            animation: none;
  }
}

.ms-fadeOut400 {
  -webkit-animation-name: ms-fadeOut;
          animation-name: ms-fadeOut;
  -webkit-animation-duration: 0.367s;
          animation-duration: 0.367s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
          animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  .ms-fadeOut400 {
    -webkit-animation: none;
            animation: none;
  }
}

.ms-fadeOut500 {
  -webkit-animation-name: ms-fadeOut;
          animation-name: ms-fadeOut;
  -webkit-animation-duration: 0.467s;
          animation-duration: 0.467s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
          animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  .ms-fadeOut500 {
    -webkit-animation: none;
            animation: none;
  }
}

.ms-expandCollapse100 {
  transition: height 0.1s cubic-bezier(0.1, 0.25, 0.75, 0.9);
}

@media (prefers-reduced-motion: reduce) {
  .ms-expandCollapse100 {
    transition: none;
  }
}

.ms-expandCollapse200 {
  transition: height 0.167s cubic-bezier(0.1, 0.25, 0.75, 0.9);
}

@media (prefers-reduced-motion: reduce) {
  .ms-expandCollapse200 {
    transition: none;
  }
}

.ms-expandCollapse400 {
  transition: height 0.367s cubic-bezier(0.1, 0.25, 0.75, 0.9);
}

@media (prefers-reduced-motion: reduce) {
  .ms-expandCollapse400 {
    transition: none;
  }
}

.ms-delay100 {
  -webkit-animation-delay: 0.167s;
          animation-delay: 0.167s;
}

.ms-delay200 {
  -webkit-animation-delay: 0.267s;
          animation-delay: 0.267s;
}

[dir='ltr'] .ms-rotate90deg {
  -webkit-animation-name: ms-rotate90;
          animation-name: ms-rotate90;
  -webkit-animation-duration: 0.1s;
          animation-duration: 0.1s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
          animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  [dir='ltr'] .ms-rotate90deg {
    -webkit-animation: none;
            animation: none;
  }
}

[dir='rtl'] .ms-rotate90deg {
  -webkit-animation-name: ms-rotateN90;
          animation-name: ms-rotateN90;
  -webkit-animation-duration: 0.1s;
          animation-duration: 0.1s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
          animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  [dir='rtl'] .ms-rotate90deg {
    -webkit-animation: none;
            animation: none;
  }
}

[dir='ltr'] .ms-rotateN90deg {
  -webkit-animation-name: ms-rotateN90;
          animation-name: ms-rotateN90;
  -webkit-animation-duration: 0.1s;
          animation-duration: 0.1s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
          animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  [dir='ltr'] .ms-rotateN90deg {
    -webkit-animation: none;
            animation: none;
  }
}

[dir='rtl'] .ms-rotateN90deg {
  -webkit-animation-name: ms-rotate90;
          animation-name: ms-rotate90;
  -webkit-animation-duration: 0.1s;
          animation-duration: 0.1s;
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
          animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9);
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  [dir='rtl'] .ms-rotateN90deg {
    -webkit-animation: none;
            animation: none;
  }
}

.ms-BrandIcon--access.ms-BrandIcon--icon16 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/access_16x1.png);
}

.ms-BrandIcon--access.ms-BrandIcon--icon48 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/access_48x1.png);
}

.ms-BrandIcon--access.ms-BrandIcon--icon96 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/access_96x1.png);
}

.ms-BrandIcon--excel.ms-BrandIcon--icon16 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/excel_16x1.png);
}

.ms-BrandIcon--excel.ms-BrandIcon--icon48 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/excel_48x1.png);
}

.ms-BrandIcon--excel.ms-BrandIcon--icon96 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/excel_96x1.png);
}

.ms-BrandIcon--infopath.ms-BrandIcon--icon16 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/infopath_16x1.png);
}

.ms-BrandIcon--infopath.ms-BrandIcon--icon48 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/infopath_48x1.png);
}

.ms-BrandIcon--infopath.ms-BrandIcon--icon96 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/infopath_96x1.png);
}

.ms-BrandIcon--office.ms-BrandIcon--icon16 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/office_16x1.png);
}

.ms-BrandIcon--office.ms-BrandIcon--icon48 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/office_48x1.png);
}

.ms-BrandIcon--office.ms-BrandIcon--icon96 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/office_96x1.png);
}

.ms-BrandIcon--onedrive.ms-BrandIcon--icon16 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/onedrive_16x1.png);
}

.ms-BrandIcon--onedrive.ms-BrandIcon--icon48 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/onedrive_48x1.png);
}

.ms-BrandIcon--onedrive.ms-BrandIcon--icon96 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/onedrive_96x1.png);
}

.ms-BrandIcon--onenote.ms-BrandIcon--icon16 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/onenote_16x1.png);
}

.ms-BrandIcon--onenote.ms-BrandIcon--icon48 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/onenote_48x1.png);
}

.ms-BrandIcon--onenote.ms-BrandIcon--icon96 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/onenote_96x1.png);
}

.ms-BrandIcon--outlook.ms-BrandIcon--icon16 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/outlook_16x1.png);
}

.ms-BrandIcon--outlook.ms-BrandIcon--icon48 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/outlook_48x1.png);
}

.ms-BrandIcon--outlook.ms-BrandIcon--icon96 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/outlook_96x1.png);
}

.ms-BrandIcon--powerpoint.ms-BrandIcon--icon16 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/powerpoint_16x1.png);
}

.ms-BrandIcon--powerpoint.ms-BrandIcon--icon48 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/powerpoint_48x1.png);
}

.ms-BrandIcon--powerpoint.ms-BrandIcon--icon96 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/powerpoint_96x1.png);
}

.ms-BrandIcon--project.ms-BrandIcon--icon16 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/project_16x1.png);
}

.ms-BrandIcon--project.ms-BrandIcon--icon48 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/project_48x1.png);
}

.ms-BrandIcon--project.ms-BrandIcon--icon96 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/project_96x1.png);
}

.ms-BrandIcon--sharepoint.ms-BrandIcon--icon16 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/sharepoint_16x1.png);
}

.ms-BrandIcon--sharepoint.ms-BrandIcon--icon48 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/sharepoint_48x1.png);
}

.ms-BrandIcon--sharepoint.ms-BrandIcon--icon96 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/sharepoint_96x1.png);
}

.ms-BrandIcon--teams.ms-BrandIcon--icon16 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/teams_16x1.png);
}

.ms-BrandIcon--teams.ms-BrandIcon--icon48 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/teams_48x1.png);
}

.ms-BrandIcon--teams.ms-BrandIcon--icon96 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/teams_96x1.png);
}

.ms-BrandIcon--visio.ms-BrandIcon--icon16 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/visio_16x1.png);
}

.ms-BrandIcon--visio.ms-BrandIcon--icon48 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/visio_48x1.png);
}

.ms-BrandIcon--visio.ms-BrandIcon--icon96 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/visio_96x1.png);
}

.ms-BrandIcon--word.ms-BrandIcon--icon16 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/word_16x1.png);
}

.ms-BrandIcon--word.ms-BrandIcon--icon48 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/word_48x1.png);
}

.ms-BrandIcon--word.ms-BrandIcon--icon96 {
  background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/word_96x1.png);
}

.ms-BrandIcon--accdb.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/accdb.png);
}

.ms-BrandIcon--accdb.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/accdb.png);
}

.ms-BrandIcon--accdb.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/accdb.png);
}

.ms-BrandIcon--archive.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/archive.png);
}

.ms-BrandIcon--archive.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/archive.png);
}

.ms-BrandIcon--archive.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/archive.png);
}

.ms-BrandIcon--audio.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/audio.png);
}

.ms-BrandIcon--audio.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/audio.png);
}

.ms-BrandIcon--audio.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/audio.png);
}

.ms-BrandIcon--code.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/code.png);
}

.ms-BrandIcon--code.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/code.png);
}

.ms-BrandIcon--code.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/code.png);
}

.ms-BrandIcon--csv.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/csv.png);
}

.ms-BrandIcon--csv.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/csv.png);
}

.ms-BrandIcon--csv.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/csv.png);
}

.ms-BrandIcon--docset.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/docset.png);
}

.ms-BrandIcon--docset.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/docset.png);
}

.ms-BrandIcon--docset.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/docset.png);
}

.ms-BrandIcon--docx.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/docx.png);
}

.ms-BrandIcon--docx.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/docx.png);
}

.ms-BrandIcon--docx.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/docx.png);
}

.ms-BrandIcon--dotx.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/dotx.png);
}

.ms-BrandIcon--dotx.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/dotx.png);
}

.ms-BrandIcon--dotx.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/dotx.png);
}

.ms-BrandIcon--email.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/email.png);
}

.ms-BrandIcon--email.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/email.png);
}

.ms-BrandIcon--email.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/email.png);
}

.ms-BrandIcon--exe.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/exe.png);
}

.ms-BrandIcon--exe.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/exe.png);
}

.ms-BrandIcon--exe.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/exe.png);
}

.ms-BrandIcon--folder.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/folder.png);
}

.ms-BrandIcon--folder.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/folder.png);
}

.ms-BrandIcon--folder.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/folder.png);
}

.ms-BrandIcon--font.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/font.png);
}

.ms-BrandIcon--font.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/font.png);
}

.ms-BrandIcon--font.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/font.png);
}

.ms-BrandIcon--genericfile.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/genericfile.png);
}

.ms-BrandIcon--genericfile.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/genericfile.png);
}

.ms-BrandIcon--genericfile.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/genericfile.png);
}

.ms-BrandIcon--html.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/html.png);
}

.ms-BrandIcon--html.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/html.png);
}

.ms-BrandIcon--html.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/html.png);
}

.ms-BrandIcon--link.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/link.png);
}

.ms-BrandIcon--link.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/link.png);
}

.ms-BrandIcon--link.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/link.png);
}

.ms-BrandIcon--listitem.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/listitem.png);
}

.ms-BrandIcon--listitem.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/listitem.png);
}

.ms-BrandIcon--listitem.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/listitem.png);
}

.ms-BrandIcon--model.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/model.png);
}

.ms-BrandIcon--model.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/model.png);
}

.ms-BrandIcon--model.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/model.png);
}

.ms-BrandIcon--mpp.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/mpp.png);
}

.ms-BrandIcon--mpp.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/mpp.png);
}

.ms-BrandIcon--mpp.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/mpp.png);
}

.ms-BrandIcon--mpt.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/mpt.png);
}

.ms-BrandIcon--mpt.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/mpt.png);
}

.ms-BrandIcon--mpt.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/mpt.png);
}

.ms-BrandIcon--odp.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/odp.png);
}

.ms-BrandIcon--odp.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/odp.png);
}

.ms-BrandIcon--odp.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/odp.png);
}

.ms-BrandIcon--ods.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/ods.png);
}

.ms-BrandIcon--ods.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/ods.png);
}

.ms-BrandIcon--ods.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/ods.png);
}

.ms-BrandIcon--odt.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/odt.png);
}

.ms-BrandIcon--odt.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/odt.png);
}

.ms-BrandIcon--odt.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/odt.png);
}

.ms-BrandIcon--one.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/one.png);
}

.ms-BrandIcon--one.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/one.png);
}

.ms-BrandIcon--one.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/one.png);
}

.ms-BrandIcon--onetoc.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/onetoc.png);
}

.ms-BrandIcon--onetoc.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/onetoc.png);
}

.ms-BrandIcon--onetoc.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/onetoc.png);
}

.ms-BrandIcon--pdf.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/pdf.png);
}

.ms-BrandIcon--pdf.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/pdf.png);
}

.ms-BrandIcon--pdf.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/pdf.png);
}

.ms-BrandIcon--photo.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/photo.png);
}

.ms-BrandIcon--photo.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/photo.png);
}

.ms-BrandIcon--photo.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/photo.png);
}

.ms-BrandIcon--potx.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/potx.png);
}

.ms-BrandIcon--potx.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/potx.png);
}

.ms-BrandIcon--potx.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/potx.png);
}

.ms-BrandIcon--ppsx.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/ppsx.png);
}

.ms-BrandIcon--ppsx.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/ppsx.png);
}

.ms-BrandIcon--ppsx.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/ppsx.png);
}

.ms-BrandIcon--pptx.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/pptx.png);
}

.ms-BrandIcon--pptx.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/pptx.png);
}

.ms-BrandIcon--pptx.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/pptx.png);
}

.ms-BrandIcon--pub.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/pub.png);
}

.ms-BrandIcon--pub.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/pub.png);
}

.ms-BrandIcon--pub.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/pub.png);
}

.ms-BrandIcon--rtf.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/rtf.png);
}

.ms-BrandIcon--rtf.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/rtf.png);
}

.ms-BrandIcon--rtf.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/rtf.png);
}

.ms-BrandIcon--sharedfolder.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/sharedfolder.png);
}

.ms-BrandIcon--sharedfolder.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/sharedfolder.png);
}

.ms-BrandIcon--sharedfolder.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/sharedfolder.png);
}

.ms-BrandIcon--spo.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/spo.png);
}

.ms-BrandIcon--spo.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/spo.png);
}

.ms-BrandIcon--spo.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/spo.png);
}

.ms-BrandIcon--sysfile.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/sysfile.png);
}

.ms-BrandIcon--sysfile.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/sysfile.png);
}

.ms-BrandIcon--sysfile.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/sysfile.png);
}

.ms-BrandIcon--txt.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/txt.png);
}

.ms-BrandIcon--txt.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/txt.png);
}

.ms-BrandIcon--txt.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/txt.png);
}

.ms-BrandIcon--vector.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/vector.png);
}

.ms-BrandIcon--vector.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/vector.png);
}

.ms-BrandIcon--vector.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/vector.png);
}

.ms-BrandIcon--video.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/video.png);
}

.ms-BrandIcon--video.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/video.png);
}

.ms-BrandIcon--video.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/video.png);
}

.ms-BrandIcon--vsdx.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/vsdx.png);
}

.ms-BrandIcon--vsdx.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/vsdx.png);
}

.ms-BrandIcon--vsdx.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/vsdx.png);
}

.ms-BrandIcon--vssx.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/vssx.png);
}

.ms-BrandIcon--vssx.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/vssx.png);
}

.ms-BrandIcon--vssx.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/vssx.png);
}

.ms-BrandIcon--vstx.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/vstx.png);
}

.ms-BrandIcon--vstx.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/vstx.png);
}

.ms-BrandIcon--vstx.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/vstx.png);
}

.ms-BrandIcon--xlsx.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/xlsx.png);
}

.ms-BrandIcon--xlsx.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/xlsx.png);
}

.ms-BrandIcon--xlsx.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/xlsx.png);
}

.ms-BrandIcon--xltx.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/xltx.png);
}

.ms-BrandIcon--xltx.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/xltx.png);
}

.ms-BrandIcon--xltx.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/xltx.png);
}

.ms-BrandIcon--xml.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/xml.png);
}

.ms-BrandIcon--xml.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/xml.png);
}

.ms-BrandIcon--xml.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/xml.png);
}

.ms-BrandIcon--xsn.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/xsn.png);
}

.ms-BrandIcon--xsn.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/xsn.png);
}

.ms-BrandIcon--xsn.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/xsn.png);
}

.ms-BrandIcon--zip.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/zip.png);
}

.ms-BrandIcon--zip.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/zip.png);
}

.ms-BrandIcon--zip.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/zip.png);
}

.ms-BrandIcon--icon16 {
  background-size: 100% 100%;
  width: 16px;
  height: 16px;
}

.ms-BrandIcon--icon48 {
  background-size: 100% 100%;
  width: 48px;
  height: 48px;
}

.ms-BrandIcon--icon96 {
  background-size: 100% 100%;
  width: 96px;
  height: 96px;
}

@media only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (min-resolution: 144dpi) {
  .ms-BrandIcon--access.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/access_16x1_5.png);
  }

  .ms-BrandIcon--access.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/access_48x1_5.png);
  }

  .ms-BrandIcon--access.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/access_96x1_5.png);
  }

  .ms-BrandIcon--excel.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/excel_16x1_5.png);
  }

  .ms-BrandIcon--excel.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/excel_48x1_5.png);
  }

  .ms-BrandIcon--excel.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/excel_96x1_5.png);
  }

  .ms-BrandIcon--infopath.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/infopath_16x1_5.png);
  }

  .ms-BrandIcon--infopath.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/infopath_48x1_5.png);
  }

  .ms-BrandIcon--infopath.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/infopath_96x1_5.png);
  }

  .ms-BrandIcon--office.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/office_16x1_5.png);
  }

  .ms-BrandIcon--office.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/office_48x1_5.png);
  }

  .ms-BrandIcon--office.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/office_96x1_5.png);
  }

  .ms-BrandIcon--onedrive.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/onedrive_16x1_5.png);
  }

  .ms-BrandIcon--onedrive.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/onedrive_48x1_5.png);
  }

  .ms-BrandIcon--onedrive.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/onedrive_96x1_5.png);
  }

  .ms-BrandIcon--onenote.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/onenote_16x1_5.png);
  }

  .ms-BrandIcon--onenote.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/onenote_48x1_5.png);
  }

  .ms-BrandIcon--onenote.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/onenote_96x1_5.png);
  }

  .ms-BrandIcon--outlook.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/outlook_16x1_5.png);
  }

  .ms-BrandIcon--outlook.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/outlook_48x1_5.png);
  }

  .ms-BrandIcon--outlook.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/outlook_96x1_5.png);
  }

  .ms-BrandIcon--powerpoint.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/powerpoint_16x1_5.png);
  }

  .ms-BrandIcon--powerpoint.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/powerpoint_48x1_5.png);
  }

  .ms-BrandIcon--powerpoint.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/powerpoint_96x1_5.png);
  }

  .ms-BrandIcon--project.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/project_16x1_5.png);
  }

  .ms-BrandIcon--project.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/project_48x1_5.png);
  }

  .ms-BrandIcon--project.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/project_96x1_5.png);
  }

  .ms-BrandIcon--sharepoint.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/sharepoint_16x1_5.png);
  }

  .ms-BrandIcon--sharepoint.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/sharepoint_48x1_5.png);
  }

  .ms-BrandIcon--sharepoint.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/sharepoint_96x1_5.png);
  }

  .ms-BrandIcon--teams.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/teams_16x1_5.png);
  }

  .ms-BrandIcon--teams.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/teams_48x1_5.png);
  }

  .ms-BrandIcon--teams.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/teams_96x1_5.png);
  }

  .ms-BrandIcon--visio.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/visio_16x1_5.png);
  }

  .ms-BrandIcon--visio.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/visio_48x1_5.png);
  }

  .ms-BrandIcon--visio.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/visio_96x1_5.png);
  }

  .ms-BrandIcon--word.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/word_16x1_5.png);
  }

  .ms-BrandIcon--word.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/word_48x1_5.png);
  }

  .ms-BrandIcon--word.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/word_96x1_5.png);
  }

  .ms-BrandIcon--accdb.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/accdb.png);
  }

  .ms-BrandIcon--accdb.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/accdb.png);
  }

  .ms-BrandIcon--accdb.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/accdb.png);
  }

  .ms-BrandIcon--archive.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/archive.png);
  }

  .ms-BrandIcon--archive.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/archive.png);
  }

  .ms-BrandIcon--archive.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/archive.png);
  }

  .ms-BrandIcon--audio.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/audio.png);
  }

  .ms-BrandIcon--audio.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/audio.png);
  }

  .ms-BrandIcon--audio.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/audio.png);
  }

  .ms-BrandIcon--code.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/code.png);
  }

  .ms-BrandIcon--code.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/code.png);
  }

  .ms-BrandIcon--code.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/code.png);
  }

  .ms-BrandIcon--csv.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/csv.png);
  }

  .ms-BrandIcon--csv.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/csv.png);
  }

  .ms-BrandIcon--csv.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/csv.png);
  }

  .ms-BrandIcon--docset.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/docset.png);
  }

  .ms-BrandIcon--docset.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/docset.png);
  }

  .ms-BrandIcon--docset.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/docset.png);
  }

  .ms-BrandIcon--docx.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/docx.png);
  }

  .ms-BrandIcon--docx.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/docx.png);
  }

  .ms-BrandIcon--docx.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/docx.png);
  }

  .ms-BrandIcon--dotx.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/dotx.png);
  }

  .ms-BrandIcon--dotx.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/dotx.png);
  }

  .ms-BrandIcon--dotx.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/dotx.png);
  }

  .ms-BrandIcon--email.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/email.png);
  }

  .ms-BrandIcon--email.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/email.png);
  }

  .ms-BrandIcon--email.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/email.png);
  }

  .ms-BrandIcon--exe.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/exe.png);
  }

  .ms-BrandIcon--exe.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/exe.png);
  }

  .ms-BrandIcon--exe.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/exe.png);
  }

  .ms-BrandIcon--folder.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/folder.png);
  }

  .ms-BrandIcon--folder.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/folder.png);
  }

  .ms-BrandIcon--folder.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/folder.png);
  }

  .ms-BrandIcon--font.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/font.png);
  }

  .ms-BrandIcon--font.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/font.png);
  }

  .ms-BrandIcon--font.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/font.png);
  }

  .ms-BrandIcon--genericfile.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/genericfile.png);
  }

  .ms-BrandIcon--genericfile.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/genericfile.png);
  }

  .ms-BrandIcon--genericfile.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/genericfile.png);
  }

  .ms-BrandIcon--html.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/html.png);
  }

  .ms-BrandIcon--html.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/html.png);
  }

  .ms-BrandIcon--html.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/html.png);
  }

  .ms-BrandIcon--link.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/link.png);
  }

  .ms-BrandIcon--link.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/link.png);
  }

  .ms-BrandIcon--link.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/link.png);
  }

  .ms-BrandIcon--listitem.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/listitem.png);
  }

  .ms-BrandIcon--listitem.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/listitem.png);
  }

  .ms-BrandIcon--listitem.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/listitem.png);
  }

  .ms-BrandIcon--model.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/model.png);
  }

  .ms-BrandIcon--model.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/model.png);
  }

  .ms-BrandIcon--model.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/model.png);
  }

  .ms-BrandIcon--mpp.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/mpp.png);
  }

  .ms-BrandIcon--mpp.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/mpp.png);
  }

  .ms-BrandIcon--mpp.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/mpp.png);
  }

  .ms-BrandIcon--mpt.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/mpt.png);
  }

  .ms-BrandIcon--mpt.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/mpt.png);
  }

  .ms-BrandIcon--mpt.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/mpt.png);
  }

  .ms-BrandIcon--odp.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/odp.png);
  }

  .ms-BrandIcon--odp.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/odp.png);
  }

  .ms-BrandIcon--odp.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/odp.png);
  }

  .ms-BrandIcon--ods.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/ods.png);
  }

  .ms-BrandIcon--ods.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/ods.png);
  }

  .ms-BrandIcon--ods.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/ods.png);
  }

  .ms-BrandIcon--odt.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/odt.png);
  }

  .ms-BrandIcon--odt.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/odt.png);
  }

  .ms-BrandIcon--odt.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/odt.png);
  }

  .ms-BrandIcon--one.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/one.png);
  }

  .ms-BrandIcon--one.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/one.png);
  }

  .ms-BrandIcon--one.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/one.png);
  }

  .ms-BrandIcon--onetoc.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/onetoc.png);
  }

  .ms-BrandIcon--onetoc.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/onetoc.png);
  }

  .ms-BrandIcon--onetoc.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/onetoc.png);
  }

  .ms-BrandIcon--pdf.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/pdf.png);
  }

  .ms-BrandIcon--pdf.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/pdf.png);
  }

  .ms-BrandIcon--pdf.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/pdf.png);
  }

  .ms-BrandIcon--photo.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/photo.png);
  }

  .ms-BrandIcon--photo.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/photo.png);
  }

  .ms-BrandIcon--photo.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/photo.png);
  }

  .ms-BrandIcon--potx.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/potx.png);
  }

  .ms-BrandIcon--potx.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/potx.png);
  }

  .ms-BrandIcon--potx.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/potx.png);
  }

  .ms-BrandIcon--ppsx.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/ppsx.png);
  }

  .ms-BrandIcon--ppsx.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/ppsx.png);
  }

  .ms-BrandIcon--ppsx.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/ppsx.png);
  }

  .ms-BrandIcon--pptx.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/pptx.png);
  }

  .ms-BrandIcon--pptx.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/pptx.png);
  }

  .ms-BrandIcon--pptx.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/pptx.png);
  }

  .ms-BrandIcon--pub.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/pub.png);
  }

  .ms-BrandIcon--pub.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/pub.png);
  }

  .ms-BrandIcon--pub.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/pub.png);
  }

  .ms-BrandIcon--rtf.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/rtf.png);
  }

  .ms-BrandIcon--rtf.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/rtf.png);
  }

  .ms-BrandIcon--rtf.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/rtf.png);
  }

  .ms-BrandIcon--sharedfolder.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/sharedfolder.png);
  }

  .ms-BrandIcon--sharedfolder.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/sharedfolder.png);
  }

  .ms-BrandIcon--sharedfolder.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/sharedfolder.png);
  }

  .ms-BrandIcon--spo.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/spo.png);
  }

  .ms-BrandIcon--spo.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/spo.png);
  }

  .ms-BrandIcon--spo.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/spo.png);
  }

  .ms-BrandIcon--sysfile.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/sysfile.png);
  }

  .ms-BrandIcon--sysfile.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/sysfile.png);
  }

  .ms-BrandIcon--sysfile.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/sysfile.png);
  }

  .ms-BrandIcon--txt.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/txt.png);
  }

  .ms-BrandIcon--txt.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/txt.png);
  }

  .ms-BrandIcon--txt.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/txt.png);
  }

  .ms-BrandIcon--vector.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/vector.png);
  }

  .ms-BrandIcon--vector.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/vector.png);
  }

  .ms-BrandIcon--vector.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/vector.png);
  }

  .ms-BrandIcon--video.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/video.png);
  }

  .ms-BrandIcon--video.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/video.png);
  }

  .ms-BrandIcon--video.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/video.png);
  }

  .ms-BrandIcon--vsdx.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/vsdx.png);
  }

  .ms-BrandIcon--vsdx.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/vsdx.png);
  }

  .ms-BrandIcon--vsdx.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/vsdx.png);
  }

  .ms-BrandIcon--vssx.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/vssx.png);
  }

  .ms-BrandIcon--vssx.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/vssx.png);
  }

  .ms-BrandIcon--vssx.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/vssx.png);
  }

  .ms-BrandIcon--vstx.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/vstx.png);
  }

  .ms-BrandIcon--vstx.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/vstx.png);
  }

  .ms-BrandIcon--vstx.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/vstx.png);
  }

  .ms-BrandIcon--xlsx.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/xlsx.png);
  }

  .ms-BrandIcon--xlsx.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/xlsx.png);
  }

  .ms-BrandIcon--xlsx.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/xlsx.png);
  }

  .ms-BrandIcon--xltx.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/xltx.png);
  }

  .ms-BrandIcon--xltx.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/xltx.png);
  }

  .ms-BrandIcon--xltx.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/xltx.png);
  }

  .ms-BrandIcon--xml.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/xml.png);
  }

  .ms-BrandIcon--xml.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/xml.png);
  }

  .ms-BrandIcon--xml.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/xml.png);
  }

  .ms-BrandIcon--xsn.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/xsn.png);
  }

  .ms-BrandIcon--xsn.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/xsn.png);
  }

  .ms-BrandIcon--xsn.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/xsn.png);
  }

  .ms-BrandIcon--zip.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/zip.png);
  }

  .ms-BrandIcon--zip.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/zip.png);
  }

  .ms-BrandIcon--zip.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/zip.png);
  }
}

@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi) {
  .ms-BrandIcon--access.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/access_16x2.png);
  }

  .ms-BrandIcon--access.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/access_48x2.png);
  }

  .ms-BrandIcon--access.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/access_96x2.png);
  }

  .ms-BrandIcon--excel.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/excel_16x2.png);
  }

  .ms-BrandIcon--excel.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/excel_48x2.png);
  }

  .ms-BrandIcon--excel.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/excel_96x2.png);
  }

  .ms-BrandIcon--infopath.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/infopath_16x2.png);
  }

  .ms-BrandIcon--infopath.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/infopath_48x2.png);
  }

  .ms-BrandIcon--infopath.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/infopath_96x2.png);
  }

  .ms-BrandIcon--office.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/office_16x2.png);
  }

  .ms-BrandIcon--office.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/office_48x2.png);
  }

  .ms-BrandIcon--office.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/office_96x2.png);
  }

  .ms-BrandIcon--onedrive.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/onedrive_16x2.png);
  }

  .ms-BrandIcon--onedrive.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/onedrive_48x2.png);
  }

  .ms-BrandIcon--onedrive.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/onedrive_96x2.png);
  }

  .ms-BrandIcon--onenote.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/onenote_16x2.png);
  }

  .ms-BrandIcon--onenote.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/onenote_48x2.png);
  }

  .ms-BrandIcon--onenote.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/onenote_96x2.png);
  }

  .ms-BrandIcon--outlook.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/outlook_16x2.png);
  }

  .ms-BrandIcon--outlook.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/outlook_48x2.png);
  }

  .ms-BrandIcon--outlook.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/outlook_96x2.png);
  }

  .ms-BrandIcon--powerpoint.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/powerpoint_16x2.png);
  }

  .ms-BrandIcon--powerpoint.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/powerpoint_48x2.png);
  }

  .ms-BrandIcon--powerpoint.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/powerpoint_96x2.png);
  }

  .ms-BrandIcon--project.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/project_16x2.png);
  }

  .ms-BrandIcon--project.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/project_48x2.png);
  }

  .ms-BrandIcon--project.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/project_96x2.png);
  }

  .ms-BrandIcon--sharepoint.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/sharepoint_16x2.png);
  }

  .ms-BrandIcon--sharepoint.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/sharepoint_48x2.png);
  }

  .ms-BrandIcon--sharepoint.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/sharepoint_96x2.png);
  }

  .ms-BrandIcon--teams.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/teams_16x2.png);
  }

  .ms-BrandIcon--teams.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/teams_48x2.png);
  }

  .ms-BrandIcon--teams.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/teams_96x2.png);
  }

  .ms-BrandIcon--visio.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/visio_16x2.png);
  }

  .ms-BrandIcon--visio.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/visio_48x2.png);
  }

  .ms-BrandIcon--visio.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/visio_96x2.png);
  }

  .ms-BrandIcon--word.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/word_16x2.png);
  }

  .ms-BrandIcon--word.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/word_48x2.png);
  }

  .ms-BrandIcon--word.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/word_96x2.png);
  }

  .ms-BrandIcon--accdb.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/accdb.png);
  }

  .ms-BrandIcon--accdb.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/accdb.png);
  }

  .ms-BrandIcon--accdb.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/accdb.png);
  }

  .ms-BrandIcon--archive.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/archive.png);
  }

  .ms-BrandIcon--archive.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/archive.png);
  }

  .ms-BrandIcon--archive.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/archive.png);
  }

  .ms-BrandIcon--audio.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/audio.png);
  }

  .ms-BrandIcon--audio.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/audio.png);
  }

  .ms-BrandIcon--audio.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/audio.png);
  }

  .ms-BrandIcon--code.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/code.png);
  }

  .ms-BrandIcon--code.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/code.png);
  }

  .ms-BrandIcon--code.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/code.png);
  }

  .ms-BrandIcon--csv.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/csv.png);
  }

  .ms-BrandIcon--csv.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/csv.png);
  }

  .ms-BrandIcon--csv.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/csv.png);
  }

  .ms-BrandIcon--docset.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/docset.png);
  }

  .ms-BrandIcon--docset.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/docset.png);
  }

  .ms-BrandIcon--docset.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/docset.png);
  }

  .ms-BrandIcon--docx.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/docx.png);
  }

  .ms-BrandIcon--docx.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/docx.png);
  }

  .ms-BrandIcon--docx.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/docx.png);
  }

  .ms-BrandIcon--dotx.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/dotx.png);
  }

  .ms-BrandIcon--dotx.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/dotx.png);
  }

  .ms-BrandIcon--dotx.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/dotx.png);
  }

  .ms-BrandIcon--email.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/email.png);
  }

  .ms-BrandIcon--email.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/email.png);
  }

  .ms-BrandIcon--email.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/email.png);
  }

  .ms-BrandIcon--exe.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/exe.png);
  }

  .ms-BrandIcon--exe.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/exe.png);
  }

  .ms-BrandIcon--exe.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/exe.png);
  }

  .ms-BrandIcon--folder.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/folder.png);
  }

  .ms-BrandIcon--folder.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/folder.png);
  }

  .ms-BrandIcon--folder.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/folder.png);
  }

  .ms-BrandIcon--font.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/font.png);
  }

  .ms-BrandIcon--font.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/font.png);
  }

  .ms-BrandIcon--font.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/font.png);
  }

  .ms-BrandIcon--genericfile.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/genericfile.png);
  }

  .ms-BrandIcon--genericfile.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/genericfile.png);
  }

  .ms-BrandIcon--genericfile.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/genericfile.png);
  }

  .ms-BrandIcon--html.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/html.png);
  }

  .ms-BrandIcon--html.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/html.png);
  }

  .ms-BrandIcon--html.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/html.png);
  }

  .ms-BrandIcon--link.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/link.png);
  }

  .ms-BrandIcon--link.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/link.png);
  }

  .ms-BrandIcon--link.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/link.png);
  }

  .ms-BrandIcon--listitem.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/listitem.png);
  }

  .ms-BrandIcon--listitem.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/listitem.png);
  }

  .ms-BrandIcon--listitem.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/listitem.png);
  }

  .ms-BrandIcon--model.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/model.png);
  }

  .ms-BrandIcon--model.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/model.png);
  }

  .ms-BrandIcon--model.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/model.png);
  }

  .ms-BrandIcon--mpp.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/mpp.png);
  }

  .ms-BrandIcon--mpp.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/mpp.png);
  }

  .ms-BrandIcon--mpp.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/mpp.png);
  }

  .ms-BrandIcon--mpt.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/mpt.png);
  }

  .ms-BrandIcon--mpt.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/mpt.png);
  }

  .ms-BrandIcon--mpt.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/mpt.png);
  }

  .ms-BrandIcon--odp.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/odp.png);
  }

  .ms-BrandIcon--odp.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/odp.png);
  }

  .ms-BrandIcon--odp.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/odp.png);
  }

  .ms-BrandIcon--ods.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/ods.png);
  }

  .ms-BrandIcon--ods.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/ods.png);
  }

  .ms-BrandIcon--ods.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/ods.png);
  }

  .ms-BrandIcon--odt.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/odt.png);
  }

  .ms-BrandIcon--odt.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/odt.png);
  }

  .ms-BrandIcon--odt.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/odt.png);
  }

  .ms-BrandIcon--one.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/one.png);
  }

  .ms-BrandIcon--one.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/one.png);
  }

  .ms-BrandIcon--one.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/one.png);
  }

  .ms-BrandIcon--onetoc.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/onetoc.png);
  }

  .ms-BrandIcon--onetoc.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/onetoc.png);
  }

  .ms-BrandIcon--onetoc.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/onetoc.png);
  }

  .ms-BrandIcon--pdf.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/pdf.png);
  }

  .ms-BrandIcon--pdf.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/pdf.png);
  }

  .ms-BrandIcon--pdf.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/pdf.png);
  }

  .ms-BrandIcon--photo.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/photo.png);
  }

  .ms-BrandIcon--photo.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/photo.png);
  }

  .ms-BrandIcon--photo.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/photo.png);
  }

  .ms-BrandIcon--potx.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/potx.png);
  }

  .ms-BrandIcon--potx.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/potx.png);
  }

  .ms-BrandIcon--potx.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/potx.png);
  }

  .ms-BrandIcon--ppsx.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/ppsx.png);
  }

  .ms-BrandIcon--ppsx.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/ppsx.png);
  }

  .ms-BrandIcon--ppsx.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/ppsx.png);
  }

  .ms-BrandIcon--pptx.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/pptx.png);
  }

  .ms-BrandIcon--pptx.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/pptx.png);
  }

  .ms-BrandIcon--pptx.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/pptx.png);
  }

  .ms-BrandIcon--pub.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/pub.png);
  }

  .ms-BrandIcon--pub.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/pub.png);
  }

  .ms-BrandIcon--pub.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/pub.png);
  }

  .ms-BrandIcon--rtf.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/rtf.png);
  }

  .ms-BrandIcon--rtf.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/rtf.png);
  }

  .ms-BrandIcon--rtf.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/rtf.png);
  }

  .ms-BrandIcon--sharedfolder.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/sharedfolder.png);
  }

  .ms-BrandIcon--sharedfolder.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/sharedfolder.png);
  }

  .ms-BrandIcon--sharedfolder.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/sharedfolder.png);
  }

  .ms-BrandIcon--spo.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/spo.png);
  }

  .ms-BrandIcon--spo.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/spo.png);
  }

  .ms-BrandIcon--spo.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/spo.png);
  }

  .ms-BrandIcon--sysfile.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/sysfile.png);
  }

  .ms-BrandIcon--sysfile.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/sysfile.png);
  }

  .ms-BrandIcon--sysfile.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/sysfile.png);
  }

  .ms-BrandIcon--txt.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/txt.png);
  }

  .ms-BrandIcon--txt.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/txt.png);
  }

  .ms-BrandIcon--txt.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/txt.png);
  }

  .ms-BrandIcon--vector.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/vector.png);
  }

  .ms-BrandIcon--vector.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/vector.png);
  }

  .ms-BrandIcon--vector.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/vector.png);
  }

  .ms-BrandIcon--video.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/video.png);
  }

  .ms-BrandIcon--video.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/video.png);
  }

  .ms-BrandIcon--video.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/video.png);
  }

  .ms-BrandIcon--vsdx.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/vsdx.png);
  }

  .ms-BrandIcon--vsdx.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/vsdx.png);
  }

  .ms-BrandIcon--vsdx.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/vsdx.png);
  }

  .ms-BrandIcon--vssx.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/vssx.png);
  }

  .ms-BrandIcon--vssx.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/vssx.png);
  }

  .ms-BrandIcon--vssx.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/vssx.png);
  }

  .ms-BrandIcon--vstx.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/vstx.png);
  }

  .ms-BrandIcon--vstx.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/vstx.png);
  }

  .ms-BrandIcon--vstx.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/vstx.png);
  }

  .ms-BrandIcon--xlsx.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/xlsx.png);
  }

  .ms-BrandIcon--xlsx.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/xlsx.png);
  }

  .ms-BrandIcon--xlsx.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/xlsx.png);
  }

  .ms-BrandIcon--xltx.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/xltx.png);
  }

  .ms-BrandIcon--xltx.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/xltx.png);
  }

  .ms-BrandIcon--xltx.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/xltx.png);
  }

  .ms-BrandIcon--xml.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/xml.png);
  }

  .ms-BrandIcon--xml.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/xml.png);
  }

  .ms-BrandIcon--xml.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/xml.png);
  }

  .ms-BrandIcon--xsn.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/xsn.png);
  }

  .ms-BrandIcon--xsn.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/xsn.png);
  }

  .ms-BrandIcon--xsn.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/xsn.png);
  }

  .ms-BrandIcon--zip.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/zip.png);
  }

  .ms-BrandIcon--zip.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/zip.png);
  }

  .ms-BrandIcon--zip.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/zip.png);
  }
}

@media only screen and (-webkit-min-device-pixel-ratio: 3), only screen and (min-resolution: 288dpi) {
  .ms-BrandIcon--access.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/access_16x3.png);
  }

  .ms-BrandIcon--access.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/access_48x3.png);
  }

  .ms-BrandIcon--access.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/access_96x3.png);
  }

  .ms-BrandIcon--excel.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/excel_16x3.png);
  }

  .ms-BrandIcon--excel.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/excel_48x3.png);
  }

  .ms-BrandIcon--excel.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/excel_96x3.png);
  }

  .ms-BrandIcon--infopath.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/infopath_16x3.png);
  }

  .ms-BrandIcon--infopath.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/infopath_48x3.png);
  }

  .ms-BrandIcon--infopath.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/infopath_96x3.png);
  }

  .ms-BrandIcon--office.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/office_16x3.png);
  }

  .ms-BrandIcon--office.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/office_48x3.png);
  }

  .ms-BrandIcon--office.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/office_96x3.png);
  }

  .ms-BrandIcon--onedrive.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/onedrive_16x3.png);
  }

  .ms-BrandIcon--onedrive.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/onedrive_48x3.png);
  }

  .ms-BrandIcon--onedrive.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/onedrive_96x3.png);
  }

  .ms-BrandIcon--onenote.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/onenote_16x3.png);
  }

  .ms-BrandIcon--onenote.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/onenote_48x3.png);
  }

  .ms-BrandIcon--onenote.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/onenote_96x3.png);
  }

  .ms-BrandIcon--outlook.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/outlook_16x3.png);
  }

  .ms-BrandIcon--outlook.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/outlook_48x3.png);
  }

  .ms-BrandIcon--outlook.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/outlook_96x3.png);
  }

  .ms-BrandIcon--powerpoint.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/powerpoint_16x3.png);
  }

  .ms-BrandIcon--powerpoint.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/powerpoint_48x3.png);
  }

  .ms-BrandIcon--powerpoint.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/powerpoint_96x3.png);
  }

  .ms-BrandIcon--project.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/project_16x3.png);
  }

  .ms-BrandIcon--project.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/project_48x3.png);
  }

  .ms-BrandIcon--project.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/project_96x3.png);
  }

  .ms-BrandIcon--sharepoint.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/sharepoint_16x3.png);
  }

  .ms-BrandIcon--sharepoint.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/sharepoint_48x3.png);
  }

  .ms-BrandIcon--sharepoint.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/sharepoint_96x3.png);
  }

  .ms-BrandIcon--teams.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/teams_16x3.png);
  }

  .ms-BrandIcon--teams.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/teams_48x3.png);
  }

  .ms-BrandIcon--teams.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/teams_96x3.png);
  }

  .ms-BrandIcon--visio.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/visio_16x3.png);
  }

  .ms-BrandIcon--visio.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/visio_48x3.png);
  }

  .ms-BrandIcon--visio.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/visio_96x3.png);
  }

  .ms-BrandIcon--word.ms-BrandIcon--icon16 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/word_16x3.png);
  }

  .ms-BrandIcon--word.ms-BrandIcon--icon48 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/word_48x3.png);
  }

  .ms-BrandIcon--word.ms-BrandIcon--icon96 {
    background-image: url(https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product-fluent/png/word_96x3.png);
  }

  .ms-BrandIcon--accdb.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/accdb.png);
  }

  .ms-BrandIcon--accdb.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/accdb.png);
  }

  .ms-BrandIcon--accdb.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/accdb.png);
  }

  .ms-BrandIcon--archive.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/archive.png);
  }

  .ms-BrandIcon--archive.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/archive.png);
  }

  .ms-BrandIcon--archive.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/archive.png);
  }

  .ms-BrandIcon--audio.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/audio.png);
  }

  .ms-BrandIcon--audio.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/audio.png);
  }

  .ms-BrandIcon--audio.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/audio.png);
  }

  .ms-BrandIcon--code.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/code.png);
  }

  .ms-BrandIcon--code.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/code.png);
  }

  .ms-BrandIcon--code.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/code.png);
  }

  .ms-BrandIcon--csv.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/csv.png);
  }

  .ms-BrandIcon--csv.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/csv.png);
  }

  .ms-BrandIcon--csv.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/csv.png);
  }

  .ms-BrandIcon--docset.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/docset.png);
  }

  .ms-BrandIcon--docset.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/docset.png);
  }

  .ms-BrandIcon--docset.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/docset.png);
  }

  .ms-BrandIcon--docx.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/docx.png);
  }

  .ms-BrandIcon--docx.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/docx.png);
  }

  .ms-BrandIcon--docx.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/docx.png);
  }

  .ms-BrandIcon--dotx.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/dotx.png);
  }

  .ms-BrandIcon--dotx.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/dotx.png);
  }

  .ms-BrandIcon--dotx.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/dotx.png);
  }

  .ms-BrandIcon--email.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/email.png);
  }

  .ms-BrandIcon--email.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/email.png);
  }

  .ms-BrandIcon--email.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/email.png);
  }

  .ms-BrandIcon--exe.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/exe.png);
  }

  .ms-BrandIcon--exe.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/exe.png);
  }

  .ms-BrandIcon--exe.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/exe.png);
  }

  .ms-BrandIcon--folder.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/folder.png);
  }

  .ms-BrandIcon--folder.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/folder.png);
  }

  .ms-BrandIcon--folder.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/folder.png);
  }

  .ms-BrandIcon--font.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/font.png);
  }

  .ms-BrandIcon--font.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/font.png);
  }

  .ms-BrandIcon--font.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/font.png);
  }

  .ms-BrandIcon--genericfile.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/genericfile.png);
  }

  .ms-BrandIcon--genericfile.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/genericfile.png);
  }

  .ms-BrandIcon--genericfile.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/genericfile.png);
  }

  .ms-BrandIcon--html.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/html.png);
  }

  .ms-BrandIcon--html.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/html.png);
  }

  .ms-BrandIcon--html.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/html.png);
  }

  .ms-BrandIcon--link.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/link.png);
  }

  .ms-BrandIcon--link.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/link.png);
  }

  .ms-BrandIcon--link.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/link.png);
  }

  .ms-BrandIcon--listitem.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/listitem.png);
  }

  .ms-BrandIcon--listitem.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/listitem.png);
  }

  .ms-BrandIcon--listitem.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/listitem.png);
  }

  .ms-BrandIcon--model.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/model.png);
  }

  .ms-BrandIcon--model.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/model.png);
  }

  .ms-BrandIcon--model.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/model.png);
  }

  .ms-BrandIcon--mpp.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/mpp.png);
  }

  .ms-BrandIcon--mpp.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/mpp.png);
  }

  .ms-BrandIcon--mpp.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/mpp.png);
  }

  .ms-BrandIcon--mpt.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/mpt.png);
  }

  .ms-BrandIcon--mpt.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/mpt.png);
  }

  .ms-BrandIcon--mpt.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/mpt.png);
  }

  .ms-BrandIcon--odp.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/odp.png);
  }

  .ms-BrandIcon--odp.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/odp.png);
  }

  .ms-BrandIcon--odp.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/odp.png);
  }

  .ms-BrandIcon--ods.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/ods.png);
  }

  .ms-BrandIcon--ods.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/ods.png);
  }

  .ms-BrandIcon--ods.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/ods.png);
  }

  .ms-BrandIcon--odt.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/odt.png);
  }

  .ms-BrandIcon--odt.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/odt.png);
  }

  .ms-BrandIcon--odt.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/odt.png);
  }

  .ms-BrandIcon--one.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/one.png);
  }

  .ms-BrandIcon--one.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/one.png);
  }

  .ms-BrandIcon--one.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/one.png);
  }

  .ms-BrandIcon--onetoc.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/onetoc.png);
  }

  .ms-BrandIcon--onetoc.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/onetoc.png);
  }

  .ms-BrandIcon--onetoc.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/onetoc.png);
  }

  .ms-BrandIcon--pdf.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/pdf.png);
  }

  .ms-BrandIcon--pdf.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/pdf.png);
  }

  .ms-BrandIcon--pdf.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/pdf.png);
  }

  .ms-BrandIcon--photo.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/photo.png);
  }

  .ms-BrandIcon--photo.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/photo.png);
  }

  .ms-BrandIcon--photo.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/photo.png);
  }

  .ms-BrandIcon--potx.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/potx.png);
  }

  .ms-BrandIcon--potx.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/potx.png);
  }

  .ms-BrandIcon--potx.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/potx.png);
  }

  .ms-BrandIcon--ppsx.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/ppsx.png);
  }

  .ms-BrandIcon--ppsx.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/ppsx.png);
  }

  .ms-BrandIcon--ppsx.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/ppsx.png);
  }

  .ms-BrandIcon--pptx.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/pptx.png);
  }

  .ms-BrandIcon--pptx.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/pptx.png);
  }

  .ms-BrandIcon--pptx.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/pptx.png);
  }

  .ms-BrandIcon--pub.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/pub.png);
  }

  .ms-BrandIcon--pub.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/pub.png);
  }

  .ms-BrandIcon--pub.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/pub.png);
  }

  .ms-BrandIcon--rtf.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/rtf.png);
  }

  .ms-BrandIcon--rtf.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/rtf.png);
  }

  .ms-BrandIcon--rtf.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/rtf.png);
  }

  .ms-BrandIcon--sharedfolder.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/sharedfolder.png);
  }

  .ms-BrandIcon--sharedfolder.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/sharedfolder.png);
  }

  .ms-BrandIcon--sharedfolder.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/sharedfolder.png);
  }

  .ms-BrandIcon--spo.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/spo.png);
  }

  .ms-BrandIcon--spo.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/spo.png);
  }

  .ms-BrandIcon--spo.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/spo.png);
  }

  .ms-BrandIcon--sysfile.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/sysfile.png);
  }

  .ms-BrandIcon--sysfile.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/sysfile.png);
  }

  .ms-BrandIcon--sysfile.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/sysfile.png);
  }

  .ms-BrandIcon--txt.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/txt.png);
  }

  .ms-BrandIcon--txt.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/txt.png);
  }

  .ms-BrandIcon--txt.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/txt.png);
  }

  .ms-BrandIcon--vector.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/vector.png);
  }

  .ms-BrandIcon--vector.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/vector.png);
  }

  .ms-BrandIcon--vector.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/vector.png);
  }

  .ms-BrandIcon--video.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/video.png);
  }

  .ms-BrandIcon--video.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/video.png);
  }

  .ms-BrandIcon--video.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/video.png);
  }

  .ms-BrandIcon--vsdx.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/vsdx.png);
  }

  .ms-BrandIcon--vsdx.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/vsdx.png);
  }

  .ms-BrandIcon--vsdx.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/vsdx.png);
  }

  .ms-BrandIcon--vssx.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/vssx.png);
  }

  .ms-BrandIcon--vssx.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/vssx.png);
  }

  .ms-BrandIcon--vssx.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/vssx.png);
  }

  .ms-BrandIcon--vstx.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/vstx.png);
  }

  .ms-BrandIcon--vstx.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/vstx.png);
  }

  .ms-BrandIcon--vstx.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/vstx.png);
  }

  .ms-BrandIcon--xlsx.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/xlsx.png);
  }

  .ms-BrandIcon--xlsx.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/xlsx.png);
  }

  .ms-BrandIcon--xlsx.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/xlsx.png);
  }

  .ms-BrandIcon--xltx.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/xltx.png);
  }

  .ms-BrandIcon--xltx.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/xltx.png);
  }

  .ms-BrandIcon--xltx.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/xltx.png);
  }

  .ms-BrandIcon--xml.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/xml.png);
  }

  .ms-BrandIcon--xml.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/xml.png);
  }

  .ms-BrandIcon--xml.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/xml.png);
  }

  .ms-BrandIcon--xsn.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/xsn.png);
  }

  .ms-BrandIcon--xsn.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/xsn.png);
  }

  .ms-BrandIcon--xsn.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/xsn.png);
  }

  .ms-BrandIcon--zip.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/zip.png);
  }

  .ms-BrandIcon--zip.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/zip.png);
  }

  .ms-BrandIcon--zip.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/zip.png);
  }
}

.ms-BrandIcon--onepkg.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/one.png);
}

.ms-BrandIcon--onepkg.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/one.png);
}

.ms-BrandIcon--onepkg.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/one.png);
}

.ms-BrandIcon--xls.ms-BrandIcon--icon16 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16/xlsx.png);
}

.ms-BrandIcon--xls.ms-BrandIcon--icon48 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48/xlsx.png);
}

.ms-BrandIcon--xls.ms-BrandIcon--icon96 {
  background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96/xlsx.png);
}

@media only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (min-resolution: 144dpi) {
  .ms-BrandIcon--onepkg.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/one.png);
  }

  .ms-BrandIcon--onepkg.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/one.png);
  }

  .ms-BrandIcon--onepkg.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/one.png);
  }

  .ms-BrandIcon--xls.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_1.5x/xlsx.png);
  }

  .ms-BrandIcon--xls.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_1.5x/xlsx.png);
  }

  .ms-BrandIcon--xls.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_1.5x/xlsx.png);
  }
}

@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi) {
  .ms-BrandIcon--onepkg.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/one.png);
  }

  .ms-BrandIcon--onepkg.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/one.png);
  }

  .ms-BrandIcon--onepkg.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/one.png);
  }

  .ms-BrandIcon--xls.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_2x/xlsx.png);
  }

  .ms-BrandIcon--xls.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_2x/xlsx.png);
  }

  .ms-BrandIcon--xls.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_2x/xlsx.png);
  }
}

@media only screen and (-webkit-min-device-pixel-ratio: 3), only screen and (min-resolution: 288dpi) {
  .ms-BrandIcon--onepkg.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/one.png);
  }

  .ms-BrandIcon--onepkg.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/one.png);
  }

  .ms-BrandIcon--onepkg.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/one.png);
  }

  .ms-BrandIcon--xls.ms-BrandIcon--icon16 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/16_3x/xlsx.png);
  }

  .ms-BrandIcon--xls.ms-BrandIcon--icon48 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/48_3x/xlsx.png);
  }

  .ms-BrandIcon--xls.ms-BrandIcon--icon96 {
    background-image: url(https://spoprod-a.akamaihd.net/files/fabric/assets/item-types-fluent/96_3x/xlsx.png);
  }
}

.ms-bgColor-communicationShade30,
.ms-bgColor-communicationShade30--hover:hover {
  background-color: #004578;
}

.ms-bgColor-communicationShade20,
.ms-bgColor-communicationShade20--hover:hover {
  background-color: #005a9e;
}

.ms-bgColor-communicationShade10,
.ms-bgColor-communicationShade10--hover:hover {
  background-color: #106ebe;
}

.ms-bgColor-communicationPrimary,
.ms-bgColor-communicationPrimary--hover:hover {
  background-color: #0078d4;
}

.ms-bgColor-communicationTint10,
.ms-bgColor-communicationTint10--hover:hover {
  background-color: #2b88d8;
}

.ms-bgColor-communicationTint20,
.ms-bgColor-communicationTint20--hover:hover {
  background-color: #c7e0f4;
}

.ms-bgColor-communicationTint30,
.ms-bgColor-communicationTint30--hover:hover {
  background-color: #deecf9;
}

.ms-bgColor-communicationTint40,
.ms-bgColor-communicationTint40--hover:hover {
  background-color: #eff6fc;
}

.ms-bgColor-black,
.ms-bgColor-black--hover:hover {
  background-color: #000000;
}

.ms-bgColor-gray220,
.ms-bgColor-gray220--hover:hover {
  background-color: #11100f;
}

.ms-bgColor-gray210,
.ms-bgColor-gray210--hover:hover {
  background-color: #161514;
}

.ms-bgColor-gray200,
.ms-bgColor-gray200--hover:hover {
  background-color: #1b1a19;
}

.ms-bgColor-gray190,
.ms-bgColor-gray190--hover:hover {
  background-color: #201f1e;
}

.ms-bgColor-gray180,
.ms-bgColor-gray180--hover:hover {
  background-color: #252423;
}

.ms-bgColor-gray170,
.ms-bgColor-gray170--hover:hover {
  background-color: #292827;
}

.ms-bgColor-gray160,
.ms-bgColor-gray160--hover:hover {
  background-color: #323130;
}

.ms-bgColor-gray150,
.ms-bgColor-gray150--hover:hover {
  background-color: #3b3a39;
}

.ms-bgColor-gray140,
.ms-bgColor-gray140--hover:hover {
  background-color: #484644;
}

.ms-bgColor-gray130,
.ms-bgColor-gray130--hover:hover {
  background-color: #605e5c;
}

.ms-bgColor-gray120,
.ms-bgColor-gray120--hover:hover {
  background-color: #797775;
}

.ms-bgColor-gray110,
.ms-bgColor-gray110--hover:hover {
  background-color: #8a8886;
}

.ms-bgColor-gray100,
.ms-bgColor-gray100--hover:hover {
  background-color: #979593;
}

.ms-bgColor-gray90,
.ms-bgColor-gray90--hover:hover {
  background-color: #a19f9d;
}

.ms-bgColor-gray80,
.ms-bgColor-gray80--hover:hover {
  background-color: #b3b0ad;
}

.ms-bgColor-gray70,
.ms-bgColor-gray70--hover:hover {
  background-color: #bebbb8;
}

.ms-bgColor-gray60,
.ms-bgColor-gray60--hover:hover {
  background-color: #c8c6c4;
}

.ms-bgColor-gray50,
.ms-bgColor-gray50--hover:hover {
  background-color: #d2d0ce;
}

.ms-bgColor-gray40,
.ms-bgColor-gray40--hover:hover {
  background-color: #e1dfdd;
}

.ms-bgColor-gray30,
.ms-bgColor-gray30--hover:hover {
  background-color: #edebe9;
}

.ms-bgColor-gray20,
.ms-bgColor-gray20--hover:hover {
  background-color: #f3f2f1;
}

.ms-bgColor-gray10,
.ms-bgColor-gray10--hover:hover {
  background-color: #faf9f8;
}

.ms-bgColor-white,
.ms-bgColor-white--hover:hover {
  background-color: #ffffff;
}

.ms-bgColor-sharedPinkRed10,
.ms-bgColor-sharedPinkRed10--hover:hover {
  background-color: #750b1c;
}

.ms-bgColor-sharedRed20,
.ms-bgColor-sharedRed20--hover:hover {
  background-color: #a4262c;
}

.ms-bgColor-sharedRed10,
.ms-bgColor-sharedRed10--hover:hover {
  background-color: #d13438;
}

.ms-bgColor-sharedRedOrange20,
.ms-bgColor-sharedRedOrange20--hover:hover {
  background-color: #603d30;
}

.ms-bgColor-sharedRedOrange10,
.ms-bgColor-sharedRedOrange10--hover:hover {
  background-color: #da3b01;
}

.ms-bgColor-sharedOrange30,
.ms-bgColor-sharedOrange30--hover:hover {
  background-color: #8e562e;
}

.ms-bgColor-sharedOrange20,
.ms-bgColor-sharedOrange20--hover:hover {
  background-color: #ca5010;
}

.ms-bgColor-sharedOrange10,
.ms-bgColor-sharedOrange10--hover:hover {
  background-color: #ffaa44;
}

.ms-bgColor-sharedYellow10,
.ms-bgColor-sharedYellow10--hover:hover {
  background-color: #fce100;
}

.ms-bgColor-sharedOrangeYellow20,
.ms-bgColor-sharedOrangeYellow20--hover:hover {
  background-color: #986f0b;
}

.ms-bgColor-sharedOrangeYellow10,
.ms-bgColor-sharedOrangeYellow10--hover:hover {
  background-color: #c19c00;
}

.ms-bgColor-sharedYellowGreen10,
.ms-bgColor-sharedYellowGreen10--hover:hover {
  background-color: #8cbd18;
}

.ms-bgColor-sharedGreen20,
.ms-bgColor-sharedGreen20--hover:hover {
  background-color: #0b6a0b;
}

.ms-bgColor-sharedGreen10,
.ms-bgColor-sharedGreen10--hover:hover {
  background-color: #498205;
}

.ms-bgColor-sharedGreenCyan10,
.ms-bgColor-sharedGreenCyan10--hover:hover {
  background-color: #00ad56;
}

.ms-bgColor-sharedCyan40,
.ms-bgColor-sharedCyan40--hover:hover {
  background-color: #005e50;
}

.ms-bgColor-sharedCyan30,
.ms-bgColor-sharedCyan30--hover:hover {
  background-color: #005b70;
}

.ms-bgColor-sharedCyan20,
.ms-bgColor-sharedCyan20--hover:hover {
  background-color: #038387;
}

.ms-bgColor-sharedCyan10,
.ms-bgColor-sharedCyan10--hover:hover {
  background-color: #00b7c3;
}

.ms-bgColor-sharedCyanBlue20,
.ms-bgColor-sharedCyanBlue20--hover:hover {
  background-color: #004e8c;
}

.ms-bgColor-sharedCyanBlue10,
.ms-bgColor-sharedCyanBlue10--hover:hover {
  background-color: #0078d4;
}

.ms-bgColor-sharedBlue10,
.ms-bgColor-sharedBlue10--hover:hover {
  background-color: #4f6bed;
}

.ms-bgColor-sharedBlueMagenta40,
.ms-bgColor-sharedBlueMagenta40--hover:hover {
  background-color: #373277;
}

.ms-bgColor-sharedBlueMagenta30,
.ms-bgColor-sharedBlueMagenta30--hover:hover {
  background-color: #5c2e91;
}

.ms-bgColor-sharedBlueMagenta20,
.ms-bgColor-sharedBlueMagenta20--hover:hover {
  background-color: #8764b8;
}

.ms-bgColor-sharedBlueMagenta10,
.ms-bgColor-sharedBlueMagenta10--hover:hover {
  background-color: #8378de;
}

.ms-bgColor-sharedMagenta20,
.ms-bgColor-sharedMagenta20--hover:hover {
  background-color: #881798;
}

.ms-bgColor-sharedMagenta10,
.ms-bgColor-sharedMagenta10--hover:hover {
  background-color: #c239b3;
}

.ms-bgColor-sharedMagentaPink20,
.ms-bgColor-sharedMagentaPink20--hover:hover {
  background-color: #9b0062;
}

.ms-bgColor-sharedMagentaPink10,
.ms-bgColor-sharedMagentaPink10--hover:hover {
  background-color: #e3008c;
}

.ms-bgColor-sharedGray40,
.ms-bgColor-sharedGray40--hover:hover {
  background-color: #393939;
}

.ms-bgColor-sharedGray30,
.ms-bgColor-sharedGray30--hover:hover {
  background-color: #7a7574;
}

.ms-bgColor-sharedGray20,
.ms-bgColor-sharedGray20--hover:hover {
  background-color: #69797e;
}

.ms-bgColor-sharedGray10,
.ms-bgColor-sharedGray10--hover:hover {
  background-color: #a0aeb2;
}

.ms-borderColor-communicationShade30,
.ms-borderColor-communicationShade30--hover:hover {
  border-color: #004578;
}

.ms-borderColor-communicationShade20,
.ms-borderColor-communicationShade20--hover:hover {
  border-color: #005a9e;
}

.ms-borderColor-communicationShade10,
.ms-borderColor-communicationShade10--hover:hover {
  border-color: #106ebe;
}

.ms-borderColor-communicationPrimary,
.ms-borderColor-communicationPrimary--hover:hover {
  border-color: #0078d4;
}

.ms-borderColor-communicationTint10,
.ms-borderColor-communicationTint10--hover:hover {
  border-color: #2b88d8;
}

.ms-borderColor-communicationTint20,
.ms-borderColor-communicationTint20--hover:hover {
  border-color: #c7e0f4;
}

.ms-borderColor-communicationTint30,
.ms-borderColor-communicationTint30--hover:hover {
  border-color: #deecf9;
}

.ms-borderColor-communicationTint40,
.ms-borderColor-communicationTint40--hover:hover {
  border-color: #eff6fc;
}

.ms-borderColor-black,
.ms-borderColor-black--hover:hover {
  border-color: #000000;
}

.ms-borderColor-gray220,
.ms-borderColor-gray220--hover:hover {
  border-color: #11100f;
}

.ms-borderColor-gray210,
.ms-borderColor-gray210--hover:hover {
  border-color: #161514;
}

.ms-borderColor-gray200,
.ms-borderColor-gray200--hover:hover {
  border-color: #1b1a19;
}

.ms-borderColor-gray190,
.ms-borderColor-gray190--hover:hover {
  border-color: #201f1e;
}

.ms-borderColor-gray180,
.ms-borderColor-gray180--hover:hover {
  border-color: #252423;
}

.ms-borderColor-gray170,
.ms-borderColor-gray170--hover:hover {
  border-color: #292827;
}

.ms-borderColor-gray160,
.ms-borderColor-gray160--hover:hover {
  border-color: #323130;
}

.ms-borderColor-gray150,
.ms-borderColor-gray150--hover:hover {
  border-color: #3b3a39;
}

.ms-borderColor-gray140,
.ms-borderColor-gray140--hover:hover {
  border-color: #484644;
}

.ms-borderColor-gray130,
.ms-borderColor-gray130--hover:hover {
  border-color: #605e5c;
}

.ms-borderColor-gray120,
.ms-borderColor-gray120--hover:hover {
  border-color: #797775;
}

.ms-borderColor-gray110,
.ms-borderColor-gray110--hover:hover {
  border-color: #8a8886;
}

.ms-borderColor-gray100,
.ms-borderColor-gray100--hover:hover {
  border-color: #979593;
}

.ms-borderColor-gray90,
.ms-borderColor-gray90--hover:hover {
  border-color: #a19f9d;
}

.ms-borderColor-gray80,
.ms-borderColor-gray80--hover:hover {
  border-color: #b3b0ad;
}

.ms-borderColor-gray70,
.ms-borderColor-gray70--hover:hover {
  border-color: #bebbb8;
}

.ms-borderColor-gray60,
.ms-borderColor-gray60--hover:hover {
  border-color: #c8c6c4;
}

.ms-borderColor-gray50,
.ms-borderColor-gray50--hover:hover {
  border-color: #d2d0ce;
}

.ms-borderColor-gray40,
.ms-borderColor-gray40--hover:hover {
  border-color: #e1dfdd;
}

.ms-borderColor-gray30,
.ms-borderColor-gray30--hover:hover {
  border-color: #edebe9;
}

.ms-borderColor-gray20,
.ms-borderColor-gray20--hover:hover {
  border-color: #f3f2f1;
}

.ms-borderColor-gray10,
.ms-borderColor-gray10--hover:hover {
  border-color: #faf9f8;
}

.ms-borderColor-white,
.ms-borderColor-white--hover:hover {
  border-color: #ffffff;
}

.ms-borderColor-sharedPinkRed10,
.ms-borderColor-sharedPinkRed10--hover:hover {
  border-color: #750b1c;
}

.ms-borderColor-sharedRed20,
.ms-borderColor-sharedRed20--hover:hover {
  border-color: #a4262c;
}

.ms-borderColor-sharedRed10,
.ms-borderColor-sharedRed10--hover:hover {
  border-color: #d13438;
}

.ms-borderColor-sharedRedOrange20,
.ms-borderColor-sharedRedOrange20--hover:hover {
  border-color: #603d30;
}

.ms-borderColor-sharedRedOrange10,
.ms-borderColor-sharedRedOrange10--hover:hover {
  border-color: #da3b01;
}

.ms-borderColor-sharedOrange30,
.ms-borderColor-sharedOrange30--hover:hover {
  border-color: #8e562e;
}

.ms-borderColor-sharedOrange20,
.ms-borderColor-sharedOrange20--hover:hover {
  border-color: #ca5010;
}

.ms-borderColor-sharedOrange10,
.ms-borderColor-sharedOrange10--hover:hover {
  border-color: #ffaa44;
}

.ms-borderColor-sharedYellow10,
.ms-borderColor-sharedYellow10--hover:hover {
  border-color: #fce100;
}

.ms-borderColor-sharedOrangeYellow20,
.ms-borderColor-sharedOrangeYellow20--hover:hover {
  border-color: #986f0b;
}

.ms-borderColor-sharedOrangeYellow10,
.ms-borderColor-sharedOrangeYellow10--hover:hover {
  border-color: #c19c00;
}

.ms-borderColor-sharedYellowGreen10,
.ms-borderColor-sharedYellowGreen10--hover:hover {
  border-color: #8cbd18;
}

.ms-borderColor-sharedGreen20,
.ms-borderColor-sharedGreen20--hover:hover {
  border-color: #0b6a0b;
}

.ms-borderColor-sharedGreen10,
.ms-borderColor-sharedGreen10--hover:hover {
  border-color: #498205;
}

.ms-borderColor-sharedGreenCyan10,
.ms-borderColor-sharedGreenCyan10--hover:hover {
  border-color: #00ad56;
}

.ms-borderColor-sharedCyan40,
.ms-borderColor-sharedCyan40--hover:hover {
  border-color: #005e50;
}

.ms-borderColor-sharedCyan30,
.ms-borderColor-sharedCyan30--hover:hover {
  border-color: #005b70;
}

.ms-borderColor-sharedCyan20,
.ms-borderColor-sharedCyan20--hover:hover {
  border-color: #038387;
}

.ms-borderColor-sharedCyan10,
.ms-borderColor-sharedCyan10--hover:hover {
  border-color: #00b7c3;
}

.ms-borderColor-sharedCyanBlue20,
.ms-borderColor-sharedCyanBlue20--hover:hover {
  border-color: #004e8c;
}

.ms-borderColor-sharedCyanBlue10,
.ms-borderColor-sharedCyanBlue10--hover:hover {
  border-color: #0078d4;
}

.ms-borderColor-sharedBlue10,
.ms-borderColor-sharedBlue10--hover:hover {
  border-color: #4f6bed;
}

.ms-borderColor-sharedBlueMagenta40,
.ms-borderColor-sharedBlueMagenta40--hover:hover {
  border-color: #373277;
}

.ms-borderColor-sharedBlueMagenta30,
.ms-borderColor-sharedBlueMagenta30--hover:hover {
  border-color: #5c2e91;
}

.ms-borderColor-sharedBlueMagenta20,
.ms-borderColor-sharedBlueMagenta20--hover:hover {
  border-color: #8764b8;
}

.ms-borderColor-sharedBlueMagenta10,
.ms-borderColor-sharedBlueMagenta10--hover:hover {
  border-color: #8378de;
}

.ms-borderColor-sharedMagenta20,
.ms-borderColor-sharedMagenta20--hover:hover {
  border-color: #881798;
}

.ms-borderColor-sharedMagenta10,
.ms-borderColor-sharedMagenta10--hover:hover {
  border-color: #c239b3;
}

.ms-borderColor-sharedMagentaPink20,
.ms-borderColor-sharedMagentaPink20--hover:hover {
  border-color: #9b0062;
}

.ms-borderColor-sharedMagentaPink10,
.ms-borderColor-sharedMagentaPink10--hover:hover {
  border-color: #e3008c;
}

.ms-borderColor-sharedGray40,
.ms-borderColor-sharedGray40--hover:hover {
  border-color: #393939;
}

.ms-borderColor-sharedGray30,
.ms-borderColor-sharedGray30--hover:hover {
  border-color: #7a7574;
}

.ms-borderColor-sharedGray20,
.ms-borderColor-sharedGray20--hover:hover {
  border-color: #69797e;
}

.ms-borderColor-sharedGray10,
.ms-borderColor-sharedGray10--hover:hover {
  border-color: #a0aeb2;
}

.ms-fontColor-communicationShade30,
.ms-fontColor-communicationShade30--hover:hover {
  color: #004578;
}

.ms-fontColor-communicationShade20,
.ms-fontColor-communicationShade20--hover:hover {
  color: #005a9e;
}

.ms-fontColor-communicationShade10,
.ms-fontColor-communicationShade10--hover:hover {
  color: #106ebe;
}

.ms-fontColor-communicationPrimary,
.ms-fontColor-communicationPrimary--hover:hover {
  color: #0078d4;
}

.ms-fontColor-communicationTint10,
.ms-fontColor-communicationTint10--hover:hover {
  color: #2b88d8;
}

.ms-fontColor-communicationTint20,
.ms-fontColor-communicationTint20--hover:hover {
  color: #c7e0f4;
}

.ms-fontColor-communicationTint30,
.ms-fontColor-communicationTint30--hover:hover {
  color: #deecf9;
}

.ms-fontColor-communicationTint40,
.ms-fontColor-communicationTint40--hover:hover {
  color: #eff6fc;
}

.ms-fontColor-black,
.ms-fontColor-black--hover:hover {
  color: #000000;
}

.ms-fontColor-gray220,
.ms-fontColor-gray220--hover:hover {
  color: #11100f;
}

.ms-fontColor-gray210,
.ms-fontColor-gray210--hover:hover {
  color: #161514;
}

.ms-fontColor-gray200,
.ms-fontColor-gray200--hover:hover {
  color: #1b1a19;
}

.ms-fontColor-gray190,
.ms-fontColor-gray190--hover:hover {
  color: #201f1e;
}

.ms-fontColor-gray180,
.ms-fontColor-gray180--hover:hover {
  color: #252423;
}

.ms-fontColor-gray170,
.ms-fontColor-gray170--hover:hover {
  color: #292827;
}

.ms-fontColor-gray160,
.ms-fontColor-gray160--hover:hover {
  color: #323130;
}

.ms-fontColor-gray150,
.ms-fontColor-gray150--hover:hover {
  color: #3b3a39;
}

.ms-fontColor-gray140,
.ms-fontColor-gray140--hover:hover {
  color: #484644;
}

.ms-fontColor-gray130,
.ms-fontColor-gray130--hover:hover {
  color: #605e5c;
}

.ms-fontColor-gray120,
.ms-fontColor-gray120--hover:hover {
  color: #797775;
}

.ms-fontColor-gray110,
.ms-fontColor-gray110--hover:hover {
  color: #8a8886;
}

.ms-fontColor-gray100,
.ms-fontColor-gray100--hover:hover {
  color: #979593;
}

.ms-fontColor-gray90,
.ms-fontColor-gray90--hover:hover {
  color: #a19f9d;
}

.ms-fontColor-gray80,
.ms-fontColor-gray80--hover:hover {
  color: #b3b0ad;
}

.ms-fontColor-gray70,
.ms-fontColor-gray70--hover:hover {
  color: #bebbb8;
}

.ms-fontColor-gray60,
.ms-fontColor-gray60--hover:hover {
  color: #c8c6c4;
}

.ms-fontColor-gray50,
.ms-fontColor-gray50--hover:hover {
  color: #d2d0ce;
}

.ms-fontColor-gray40,
.ms-fontColor-gray40--hover:hover {
  color: #e1dfdd;
}

.ms-fontColor-gray30,
.ms-fontColor-gray30--hover:hover {
  color: #edebe9;
}

.ms-fontColor-gray20,
.ms-fontColor-gray20--hover:hover {
  color: #f3f2f1;
}

.ms-fontColor-gray10,
.ms-fontColor-gray10--hover:hover {
  color: #faf9f8;
}

.ms-fontColor-white,
.ms-fontColor-white--hover:hover {
  color: #ffffff;
}

.ms-fontColor-sharedPinkRed10,
.ms-fontColor-sharedPinkRed10--hover:hover {
  color: #750b1c;
}

.ms-fontColor-sharedRed20,
.ms-fontColor-sharedRed20--hover:hover {
  color: #a4262c;
}

.ms-fontColor-sharedRed10,
.ms-fontColor-sharedRed10--hover:hover {
  color: #d13438;
}

.ms-fontColor-sharedRedOrange20,
.ms-fontColor-sharedRedOrange20--hover:hover {
  color: #603d30;
}

.ms-fontColor-sharedRedOrange10,
.ms-fontColor-sharedRedOrange10--hover:hover {
  color: #da3b01;
}

.ms-fontColor-sharedOrange30,
.ms-fontColor-sharedOrange30--hover:hover {
  color: #8e562e;
}

.ms-fontColor-sharedOrange20,
.ms-fontColor-sharedOrange20--hover:hover {
  color: #ca5010;
}

.ms-fontColor-sharedOrange10,
.ms-fontColor-sharedOrange10--hover:hover {
  color: #ffaa44;
}

.ms-fontColor-sharedYellow10,
.ms-fontColor-sharedYellow10--hover:hover {
  color: #fce100;
}

.ms-fontColor-sharedOrangeYellow20,
.ms-fontColor-sharedOrangeYellow20--hover:hover {
  color: #986f0b;
}

.ms-fontColor-sharedOrangeYellow10,
.ms-fontColor-sharedOrangeYellow10--hover:hover {
  color: #c19c00;
}

.ms-fontColor-sharedYellowGreen10,
.ms-fontColor-sharedYellowGreen10--hover:hover {
  color: #8cbd18;
}

.ms-fontColor-sharedGreen20,
.ms-fontColor-sharedGreen20--hover:hover {
  color: #0b6a0b;
}

.ms-fontColor-sharedGreen10,
.ms-fontColor-sharedGreen10--hover:hover {
  color: #498205;
}

.ms-fontColor-sharedGreenCyan10,
.ms-fontColor-sharedGreenCyan10--hover:hover {
  color: #00ad56;
}

.ms-fontColor-sharedCyan40,
.ms-fontColor-sharedCyan40--hover:hover {
  color: #005e50;
}

.ms-fontColor-sharedCyan30,
.ms-fontColor-sharedCyan30--hover:hover {
  color: #005b70;
}

.ms-fontColor-sharedCyan20,
.ms-fontColor-sharedCyan20--hover:hover {
  color: #038387;
}

.ms-fontColor-sharedCyan10,
.ms-fontColor-sharedCyan10--hover:hover {
  color: #00b7c3;
}

.ms-fontColor-sharedCyanBlue20,
.ms-fontColor-sharedCyanBlue20--hover:hover {
  color: #004e8c;
}

.ms-fontColor-sharedCyanBlue10,
.ms-fontColor-sharedCyanBlue10--hover:hover {
  color: #0078d4;
}

.ms-fontColor-sharedBlue10,
.ms-fontColor-sharedBlue10--hover:hover {
  color: #4f6bed;
}

.ms-fontColor-sharedBlueMagenta40,
.ms-fontColor-sharedBlueMagenta40--hover:hover {
  color: #373277;
}

.ms-fontColor-sharedBlueMagenta30,
.ms-fontColor-sharedBlueMagenta30--hover:hover {
  color: #5c2e91;
}

.ms-fontColor-sharedBlueMagenta20,
.ms-fontColor-sharedBlueMagenta20--hover:hover {
  color: #8764b8;
}

.ms-fontColor-sharedBlueMagenta10,
.ms-fontColor-sharedBlueMagenta10--hover:hover {
  color: #8378de;
}

.ms-fontColor-sharedMagenta20,
.ms-fontColor-sharedMagenta20--hover:hover {
  color: #881798;
}

.ms-fontColor-sharedMagenta10,
.ms-fontColor-sharedMagenta10--hover:hover {
  color: #c239b3;
}

.ms-fontColor-sharedMagentaPink20,
.ms-fontColor-sharedMagentaPink20--hover:hover {
  color: #9b0062;
}

.ms-fontColor-sharedMagentaPink10,
.ms-fontColor-sharedMagentaPink10--hover:hover {
  color: #e3008c;
}

.ms-fontColor-sharedGray40,
.ms-fontColor-sharedGray40--hover:hover {
  color: #393939;
}

.ms-fontColor-sharedGray30,
.ms-fontColor-sharedGray30--hover:hover {
  color: #7a7574;
}

.ms-fontColor-sharedGray20,
.ms-fontColor-sharedGray20--hover:hover {
  color: #69797e;
}

.ms-fontColor-sharedGray10,
.ms-fontColor-sharedGray10--hover:hover {
  color: #a0aeb2;
}

.ms-bgColor-themeDark,
.ms-bgColor-themeDark--hover:hover {
  background-color: #005a9e;
}

.ms-bgColor-themeDarkAlt,
.ms-bgColor-themeDarkAlt--hover:hover {
  background-color: #106ebe;
}

.ms-bgColor-themeDarker,
.ms-bgColor-themeDarker--hover:hover {
  background-color: #004578;
}

.ms-bgColor-themePrimary,
.ms-bgColor-themePrimary--hover:hover {
  background-color: #0078d4;
}

.ms-bgColor-themeSecondary,
.ms-bgColor-themeSecondary--hover:hover {
  background-color: #2b88d8;
}

.ms-bgColor-themeTertiary,
.ms-bgColor-themeTertiary--hover:hover {
  background-color: #71afe5;
}

.ms-bgColor-themeLight,
.ms-bgColor-themeLight--hover:hover {
  background-color: #c7e0f4;
}

.ms-bgColor-themeLighter,
.ms-bgColor-themeLighter--hover:hover {
  background-color: #deecf9;
}

.ms-bgColor-themeLighterAlt,
.ms-bgColor-themeLighterAlt--hover:hover {
  background-color: #eff6fc;
}

.ms-borderColor-themeDark,
.ms-borderColor-themeDark--hover:hover {
  border-color: #005a9e;
}

.ms-borderColor-themeDarkAlt,
.ms-borderColor-themeDarkAlt--hover:hover {
  border-color: #106ebe;
}

.ms-borderColor-themeDarker,
.ms-borderColor-themeDarker--hover:hover {
  border-color: #004578;
}

.ms-borderColor-themePrimary,
.ms-borderColor-themePrimary--hover:hover {
  border-color: #0078d4;
}

.ms-borderColor-themeSecondary,
.ms-borderColor-themeSecondary--hover:hover {
  border-color: #2b88d8;
}

.ms-borderColor-themeTertiary,
.ms-borderColor-themeTertiary--hover:hover {
  border-color: #71afe5;
}

.ms-borderColor-themeLight,
.ms-borderColor-themeLight--hover:hover {
  border-color: #c7e0f4;
}

.ms-borderColor-themeLighter,
.ms-borderColor-themeLighter--hover:hover {
  border-color: #deecf9;
}

.ms-borderColor-themeLighterAlt,
.ms-borderColor-themeLighterAlt--hover:hover {
  border-color: #eff6fc;
}

.ms-fontColor-themeDarker,
.ms-fontColor-themeDarker--hover:hover {
  color: #004578;
}

.ms-fontColor-themeDark,
.ms-fontColor-themeDark--hover:hover {
  color: #005a9e;
}

.ms-fontColor-themeDarkAlt,
.ms-fontColor-themeDarkAlt--hover:hover {
  color: #106ebe;
}

.ms-fontColor-themePrimary,
.ms-fontColor-themePrimary--hover:hover {
  color: #0078d4;
}

.ms-fontColor-themeSecondary,
.ms-fontColor-themeSecondary--hover:hover {
  color: #2b88d8;
}

.ms-fontColor-themeTertiary,
.ms-fontColor-themeTertiary--hover:hover {
  color: #71afe5;
}

.ms-fontColor-themeLight,
.ms-fontColor-themeLight--hover:hover {
  color: #c7e0f4;
}

.ms-fontColor-themeLighter,
.ms-fontColor-themeLighter--hover:hover {
  color: #deecf9;
}

.ms-fontColor-themeLighterAlt,
.ms-fontColor-themeLighterAlt--hover:hover {
  color: #eff6fc;
}

.ms-bgColor-black,
.ms-bgColor-black--hover:hover {
  background-color: #000000;
}

.ms-bgColor-neutralDark,
.ms-bgColor-neutralDark--hover:hover {
  background-color: #201f1e;
}

.ms-bgColor-neutralPrimary,
.ms-bgColor-neutralPrimary--hover:hover {
  background-color: #323130;
}

.ms-bgColor-neutralPrimaryAlt,
.ms-bgColor-neutralPrimaryAlt--hover:hover {
  background-color: #3b3a39;
}

.ms-bgColor-neutralSecondary,
.ms-bgColor-neutralSecondary--hover:hover {
  background-color: #605e5c;
}

.ms-bgColor-neutralSecondaryAlt,
.ms-bgColor-neutralSecondaryAlt--hover:hover {
  background-color: #797775;
}

.ms-bgColor-neutralTertiary,
.ms-bgColor-neutralTertiary--hover:hover {
  background-color: #a19f9d;
}

.ms-bgColor-neutralTertiaryAlt,
.ms-bgColor-neutralTertiaryAlt--hover:hover {
  background-color: #c8c6c4;
}

.ms-bgColor-neutralQuaternary,
.ms-bgColor-neutralQuaternary--hover:hover {
  background-color: #d2d0ce;
}

.ms-bgColor-neutralQuaternaryAlt,
.ms-bgColor-neutralQuaternaryAlt--hover:hover {
  background-color: #e1dfdd;
}

.ms-bgColor-neutralLight,
.ms-bgColor-neutralLight--hover:hover {
  background-color: #edebe9;
}

.ms-bgColor-neutralLighter,
.ms-bgColor-neutralLighter--hover:hover {
  background-color: #f3f2f1;
}

.ms-bgColor-neutralLighterAlt,
.ms-bgColor-neutralLighterAlt--hover:hover {
  background-color: #faf9f8;
}

.ms-bgColor-white,
.ms-bgColor-white--hover:hover {
  background-color: #ffffff;
}

.ms-borderColor-black,
.ms-borderColor-black--hover:hover {
  border-color: #000000;
}

.ms-borderColor-neutralDark,
.ms-borderColor-neutralDark--hover:hover {
  border-color: #201f1e;
}

.ms-borderColor-neutralPrimary,
.ms-borderColor-neutralPrimary--hover:hover {
  border-color: #323130;
}

.ms-borderColor-neutralPrimaryAlt,
.ms-borderColor-neutralPrimaryAlt--hover:hover {
  border-color: #3b3a39;
}

.ms-borderColor-neutralSecondary,
.ms-borderColor-neutralSecondary--hover:hover {
  border-color: #605e5c;
}

.ms-borderColor-neutralSecondaryAlt,
.ms-borderColor-neutralSecondaryAlt--hover:hover {
  border-color: #797775;
}

.ms-borderColor-neutralTertiary,
.ms-borderColor-neutralTertiary--hover:hover {
  border-color: #a19f9d;
}

.ms-borderColor-neutralTertiaryAlt,
.ms-borderColor-neutralTertiaryAlt--hover:hover {
  border-color: #c8c6c4;
}

.ms-borderColor-neutralQuaternary,
.ms-borderColor-neutralQuaternary--hover:hover {
  border-color: #d2d0ce;
}

.ms-borderColor-neutralQuaternaryAlt,
.ms-borderColor-neutralQuaternaryAlt--hover:hover {
  border-color: #e1dfdd;
}

.ms-borderColor-neutralLight,
.ms-borderColor-neutralLight--hover:hover {
  border-color: #edebe9;
}

.ms-borderColor-neutralLighter,
.ms-borderColor-neutralLighter--hover:hover {
  border-color: #f3f2f1;
}

.ms-borderColor-neutralLighterAlt,
.ms-borderColor-neutralLighterAlt--hover:hover {
  border-color: #faf9f8;
}

.ms-borderColor-white,
.ms-borderColor-white--hover:hover {
  border-color: #ffffff;
}

.ms-fontColor-black,
.ms-fontColor-black--hover:hover {
  color: #000000;
}

.ms-fontColor-neutralDark,
.ms-fontColor-neutralDark--hover:hover {
  color: #201f1e;
}

.ms-fontColor-neutralPrimary,
.ms-fontColor-neutralPrimary--hover:hover {
  color: #323130;
}

.ms-fontColor-neutralPrimaryAlt,
.ms-fontColor-neutralPrimaryAlt--hover:hover {
  color: #3b3a39;
}

.ms-fontColor-neutralSecondary,
.ms-fontColor-neutralSecondary--hover:hover {
  color: #605e5c;
}

.ms-fontColor-neutralSecondaryAlt,
.ms-fontColor-neutralSecondaryAlt--hover:hover {
  color: #797775;
}

.ms-fontColor-neutralTertiary,
.ms-fontColor-neutralTertiary--hover:hover {
  color: #a19f9d;
}

.ms-fontColor-neutralTertiaryAlt,
.ms-fontColor-neutralTertiaryAlt--hover:hover {
  color: #c8c6c4;
}

.ms-fontColor-neutralQuaternary,
.ms-fontColor-neutralQuaternary--hover:hover {
  color: #d2d0ce;
}

.ms-fontColor-neutralQuaternaryAlt,
.ms-fontColor-neutralQuaternaryAlt--hover:hover {
  color: #e1dfdd;
}

.ms-fontColor-neutralLight,
.ms-fontColor-neutralLight--hover:hover {
  color: #edebe9;
}

.ms-fontColor-neutralLighter,
.ms-fontColor-neutralLighter--hover:hover {
  color: #f3f2f1;
}

.ms-fontColor-neutralLighterAlt,
.ms-fontColor-neutralLighterAlt--hover:hover {
  color: #faf9f8;
}

.ms-fontColor-white,
.ms-fontColor-white--hover:hover {
  color: #ffffff;
}

.ms-bgColor-yellow,
.ms-bgColor-yellow--hover:hover {
  background-color: #ffb900;
}

.ms-bgColor-yellowLight,
.ms-bgColor-yellowLight--hover:hover {
  background-color: #fff100;
}

.ms-bgColor-orange,
.ms-bgColor-orange--hover:hover {
  background-color: #d83b01;
}

.ms-bgColor-orangeLight,
.ms-bgColor-orangeLight--hover:hover {
  background-color: #ea4300;
}

.ms-bgColor-orangeLighter,
.ms-bgColor-orangeLighter--hover:hover {
  background-color: #ff8c00;
}

.ms-bgColor-redDark,
.ms-bgColor-redDark--hover:hover {
  background-color: #a80000;
}

.ms-bgColor-red,
.ms-bgColor-red--hover:hover {
  background-color: #e81123;
}

.ms-bgColor-magentaDark,
.ms-bgColor-magentaDark--hover:hover {
  background-color: #5c005c;
}

.ms-bgColor-magenta,
.ms-bgColor-magenta--hover:hover {
  background-color: #b4009e;
}

.ms-bgColor-magentaLight,
.ms-bgColor-magentaLight--hover:hover {
  background-color: #e3008c;
}

.ms-bgColor-purpleDark,
.ms-bgColor-purpleDark--hover:hover {
  background-color: #32145a;
}

.ms-bgColor-purple,
.ms-bgColor-purple--hover:hover {
  background-color: #5c2d91;
}

.ms-bgColor-purpleLight,
.ms-bgColor-purpleLight--hover:hover {
  background-color: #b4a0ff;
}

.ms-bgColor-blueDark,
.ms-bgColor-blueDark--hover:hover {
  background-color: #002050;
}

.ms-bgColor-blueMid,
.ms-bgColor-blueMid--hover:hover {
  background-color: #00188f;
}

.ms-bgColor-blue,
.ms-bgColor-blue--hover:hover {
  background-color: #0078d4;
}

.ms-bgColor-blueLight,
.ms-bgColor-blueLight--hover:hover {
  background-color: #00bcf2;
}

.ms-bgColor-tealDark,
.ms-bgColor-tealDark--hover:hover {
  background-color: #004b50;
}

.ms-bgColor-teal,
.ms-bgColor-teal--hover:hover {
  background-color: #008272;
}

.ms-bgColor-tealLight,
.ms-bgColor-tealLight--hover:hover {
  background-color: #00b294;
}

.ms-bgColor-greenDark,
.ms-bgColor-greenDark--hover:hover {
  background-color: #004b1c;
}

.ms-bgColor-green,
.ms-bgColor-green--hover:hover {
  background-color: #107c10;
}

.ms-bgColor-greenLight,
.ms-bgColor-greenLight--hover:hover {
  background-color: #bad80a;
}

.ms-borderColor-yellow,
.ms-borderColor-yellow--hover:hover {
  border-color: #ffb900;
}

.ms-borderColor-yellowLight,
.ms-borderColor-yellowLight--hover:hover {
  border-color: #fff100;
}

.ms-borderColor-orange,
.ms-borderColor-orange--hover:hover {
  border-color: #d83b01;
}

.ms-borderColor-orangeLight,
.ms-borderColor-orangeLight--hover:hover {
  border-color: #ea4300;
}

.ms-borderColor-orangeLighter,
.ms-borderColor-orangeLighter--hover:hover {
  border-color: #ff8c00;
}

.ms-borderColor-redDark,
.ms-borderColor-redDark--hover:hover {
  border-color: #a80000;
}

.ms-borderColor-red,
.ms-borderColor-red--hover:hover {
  border-color: #e81123;
}

.ms-borderColor-magentaDark,
.ms-borderColor-magentaDark--hover:hover {
  border-color: #5c005c;
}

.ms-borderColor-magenta,
.ms-borderColor-magenta--hover:hover {
  border-color: #b4009e;
}

.ms-borderColor-magentaLight,
.ms-borderColor-magentaLight--hover:hover {
  border-color: #e3008c;
}

.ms-borderColor-purpleDark,
.ms-borderColor-purpleDark--hover:hover {
  border-color: #32145a;
}

.ms-borderColor-purple,
.ms-borderColor-purple--hover:hover {
  border-color: #5c2d91;
}

.ms-borderColor-purpleLight,
.ms-borderColor-purpleLight--hover:hover {
  border-color: #b4a0ff;
}

.ms-borderColor-blueDark,
.ms-borderColor-blueDark--hover:hover {
  border-color: #002050;
}

.ms-borderColor-blueMid,
.ms-borderColor-blueMid--hover:hover {
  border-color: #00188f;
}

.ms-borderColor-blue,
.ms-borderColor-blue--hover:hover {
  border-color: #0078d4;
}

.ms-borderColor-blueLight,
.ms-borderColor-blueLight--hover:hover {
  border-color: #00bcf2;
}

.ms-borderColor-tealDark,
.ms-borderColor-tealDark--hover:hover {
  border-color: #004b50;
}

.ms-borderColor-teal,
.ms-borderColor-teal--hover:hover {
  border-color: #008272;
}

.ms-borderColor-tealLight,
.ms-borderColor-tealLight--hover:hover {
  border-color: #00b294;
}

.ms-borderColor-greenDark,
.ms-borderColor-greenDark--hover:hover {
  border-color: #004b1c;
}

.ms-borderColor-green,
.ms-borderColor-green--hover:hover {
  border-color: #107c10;
}

.ms-borderColor-greenLight,
.ms-borderColor-greenLight--hover:hover {
  border-color: #bad80a;
}

.ms-fontColor-yellow,
.ms-fontColor-yellow--hover:hover {
  color: #ffb900;
}

.ms-fontColor-yellowLight,
.ms-fontColor-yellowLight--hover:hover {
  color: #fff100;
}

.ms-fontColor-orange,
.ms-fontColor-orange--hover:hover {
  color: #d83b01;
}

.ms-fontColor-orangeLight,
.ms-fontColor-orangeLight--hover:hover {
  color: #ea4300;
}

.ms-fontColor-orangeLighter,
.ms-fontColor-orangeLighter--hover:hover {
  color: #ff8c00;
}

.ms-fontColor-redDark,
.ms-fontColor-redDark--hover:hover {
  color: #a80000;
}

.ms-fontColor-red,
.ms-fontColor-red--hover:hover {
  color: #e81123;
}

.ms-fontColor-magentaDark,
.ms-fontColor-magentaDark--hover:hover {
  color: #5c005c;
}

.ms-fontColor-magenta,
.ms-fontColor-magenta--hover:hover {
  color: #b4009e;
}

.ms-fontColor-magentaLight,
.ms-fontColor-magentaLight--hover:hover {
  color: #e3008c;
}

.ms-fontColor-purpleDark,
.ms-fontColor-purpleDark--hover:hover {
  color: #32145a;
}

.ms-fontColor-purple,
.ms-fontColor-purple--hover:hover {
  color: #5c2d91;
}

.ms-fontColor-purpleLight,
.ms-fontColor-purpleLight--hover:hover {
  color: #b4a0ff;
}

.ms-fontColor-blueDark,
.ms-fontColor-blueDark--hover:hover {
  color: #002050;
}

.ms-fontColor-blueMid,
.ms-fontColor-blueMid--hover:hover {
  color: #00188f;
}

.ms-fontColor-blue,
.ms-fontColor-blue--hover:hover {
  color: #0078d4;
}

.ms-fontColor-blueLight,
.ms-fontColor-blueLight--hover:hover {
  color: #00bcf2;
}

.ms-fontColor-tealDark,
.ms-fontColor-tealDark--hover:hover {
  color: #004b50;
}

.ms-fontColor-teal,
.ms-fontColor-teal--hover:hover {
  color: #008272;
}

.ms-fontColor-tealLight,
.ms-fontColor-tealLight--hover:hover {
  color: #00b294;
}

.ms-fontColor-greenDark,
.ms-fontColor-greenDark--hover:hover {
  color: #004b1c;
}

.ms-fontColor-green,
.ms-fontColor-green--hover:hover {
  color: #107c10;
}

.ms-fontColor-greenLight,
.ms-fontColor-greenLight--hover:hover {
  color: #bad80a;
}

.ms-bgColor-info,
.ms-bgColor-info--hover:hover {
  background-color: #f3f2f1;
}

.ms-bgColor-success,
.ms-bgColor-success--hover:hover {
  background-color: #dff6dd;
}

.ms-bgColor-severeWarning,
.ms-bgColor-severeWarning--hover:hover {
  background-color: #fed9cc;
}

.ms-bgColor-warning,
.ms-bgColor-warning--hover:hover {
  background-color: #fff4ce;
}

.ms-bgColor-error,
.ms-bgColor-error--hover:hover {
  background-color: #fde7e9;
}

.ms-fontColor-info,
.ms-fontColor-info--hover:hover {
  color: #797775;
}

.ms-fontColor-success,
.ms-fontColor-success--hover:hover {
  color: #107c10;
}

.ms-fontColor-alert,
.ms-fontColor-alert--hover:hover {
  color: #d83b01;
}

.ms-fontColor-warning,
.ms-fontColor-warning--hover:hover {
  color: #797775;
}

.ms-fontColor-severeWarning,
.ms-fontColor-severeWarning--hover:hover {
  color: #d83b01;
}

.ms-fontColor-error,
.ms-fontColor-error--hover:hover {
  color: #a80000;
}

.ms-bgColor-contrastBlackDisabled,
.ms-bgColor-contrastBlackDisabled--hover:hover {
  background-color: #00ff00;
}

.ms-bgColor-contrastWhiteDisabled,
.ms-bgColor-contrastWhiteDisabled--hover:hover {
  background-color: #600000;
}

.ms-bgColor-contrastBlackSelected,
.ms-bgColor-contrastBlackSelected--hover:hover {
  background-color: #1aebff;
}

.ms-bgColor-contrastWhiteSelected,
.ms-bgColor-contrastWhiteSelected--hover:hover {
  background-color: #37006e;
}

.ms-fontColor-contrastBlackDisabled,
.ms-fontColor-contrastBlackDisabled--hover:hover {
  color: #00ff00;
}

.ms-fontColor-contrastWhiteDisabled,
.ms-fontColor-contrastWhiteDisabled--hover:hover {
  color: #600000;
}

.ms-fontColor-contrastBlackSelected,
.ms-fontColor-contrastBlackSelected--hover:hover {
  color: #1aebff;
}

.ms-fontColor-contrastWhiteSelected,
.ms-fontColor-contrastWhiteSelected--hover:hover {
  color: #37006e;
}

.ms-borderColor-contrastBlackDisabled,
.ms-borderColor-contrastBlackDisabled--hover:hover {
  border-color: #00ff00;
}

.ms-borderColor-contrastWhiteDisabled,
.ms-borderColor-contrastWhiteDisabled--hover:hover {
  border-color: #600000;
}

.ms-borderColor-contrastBlackSelected,
.ms-borderColor-contrastBlackSelected--hover:hover {
  border-color: #1aebff;
}

.ms-borderColor-contrastWhiteSelected,
.ms-borderColor-contrastWhiteSelected--hover:hover {
  border-color: #37006e;
}

.ms-bgColor-communicationShade30,
.ms-bgColor-communicationShade30--hover:hover {
  background-color: #004578;
}

.ms-bgColor-communicationShade20,
.ms-bgColor-communicationShade20--hover:hover {
  background-color: #005a9e;
}

.ms-bgColor-communicationShade10,
.ms-bgColor-communicationShade10--hover:hover {
  background-color: #106ebe;
}

.ms-bgColor-communicationPrimary,
.ms-bgColor-communicationPrimary--hover:hover {
  background-color: #0078d4;
}

.ms-bgColor-communicationTint10,
.ms-bgColor-communicationTint10--hover:hover {
  background-color: #2b88d8;
}

.ms-bgColor-communicationTint20,
.ms-bgColor-communicationTint20--hover:hover {
  background-color: #c7e0f4;
}

.ms-bgColor-communicationTint30,
.ms-bgColor-communicationTint30--hover:hover {
  background-color: #deecf9;
}

.ms-bgColor-communicationTint40,
.ms-bgColor-communicationTint40--hover:hover {
  background-color: #eff6fc;
}

.ms-bgColor-black,
.ms-bgColor-black--hover:hover {
  background-color: #000000;
}

.ms-bgColor-gray220,
.ms-bgColor-gray220--hover:hover {
  background-color: #11100f;
}

.ms-bgColor-gray210,
.ms-bgColor-gray210--hover:hover {
  background-color: #161514;
}

.ms-bgColor-gray200,
.ms-bgColor-gray200--hover:hover {
  background-color: #1b1a19;
}

.ms-bgColor-gray190,
.ms-bgColor-gray190--hover:hover {
  background-color: #201f1e;
}

.ms-bgColor-gray180,
.ms-bgColor-gray180--hover:hover {
  background-color: #252423;
}

.ms-bgColor-gray170,
.ms-bgColor-gray170--hover:hover {
  background-color: #292827;
}

.ms-bgColor-gray160,
.ms-bgColor-gray160--hover:hover {
  background-color: #323130;
}

.ms-bgColor-gray150,
.ms-bgColor-gray150--hover:hover {
  background-color: #3b3a39;
}

.ms-bgColor-gray140,
.ms-bgColor-gray140--hover:hover {
  background-color: #484644;
}

.ms-bgColor-gray130,
.ms-bgColor-gray130--hover:hover {
  background-color: #605e5c;
}

.ms-bgColor-gray120,
.ms-bgColor-gray120--hover:hover {
  background-color: #797775;
}

.ms-bgColor-gray110,
.ms-bgColor-gray110--hover:hover {
  background-color: #8a8886;
}

.ms-bgColor-gray100,
.ms-bgColor-gray100--hover:hover {
  background-color: #979593;
}

.ms-bgColor-gray90,
.ms-bgColor-gray90--hover:hover {
  background-color: #a19f9d;
}

.ms-bgColor-gray80,
.ms-bgColor-gray80--hover:hover {
  background-color: #b3b0ad;
}

.ms-bgColor-gray70,
.ms-bgColor-gray70--hover:hover {
  background-color: #bebbb8;
}

.ms-bgColor-gray60,
.ms-bgColor-gray60--hover:hover {
  background-color: #c8c6c4;
}

.ms-bgColor-gray50,
.ms-bgColor-gray50--hover:hover {
  background-color: #d2d0ce;
}

.ms-bgColor-gray40,
.ms-bgColor-gray40--hover:hover {
  background-color: #e1dfdd;
}

.ms-bgColor-gray30,
.ms-bgColor-gray30--hover:hover {
  background-color: #edebe9;
}

.ms-bgColor-gray20,
.ms-bgColor-gray20--hover:hover {
  background-color: #f3f2f1;
}

.ms-bgColor-gray10,
.ms-bgColor-gray10--hover:hover {
  background-color: #faf9f8;
}

.ms-bgColor-white,
.ms-bgColor-white--hover:hover {
  background-color: #ffffff;
}

.ms-bgColor-sharedPinkRed10,
.ms-bgColor-sharedPinkRed10--hover:hover {
  background-color: #750b1c;
}

.ms-bgColor-sharedRed20,
.ms-bgColor-sharedRed20--hover:hover {
  background-color: #a4262c;
}

.ms-bgColor-sharedRed10,
.ms-bgColor-sharedRed10--hover:hover {
  background-color: #d13438;
}

.ms-bgColor-sharedRedOrange20,
.ms-bgColor-sharedRedOrange20--hover:hover {
  background-color: #603d30;
}

.ms-bgColor-sharedRedOrange10,
.ms-bgColor-sharedRedOrange10--hover:hover {
  background-color: #da3b01;
}

.ms-bgColor-sharedOrange30,
.ms-bgColor-sharedOrange30--hover:hover {
  background-color: #8e562e;
}

.ms-bgColor-sharedOrange20,
.ms-bgColor-sharedOrange20--hover:hover {
  background-color: #ca5010;
}

.ms-bgColor-sharedOrange10,
.ms-bgColor-sharedOrange10--hover:hover {
  background-color: #ffaa44;
}

.ms-bgColor-sharedYellow10,
.ms-bgColor-sharedYellow10--hover:hover {
  background-color: #fce100;
}

.ms-bgColor-sharedOrangeYellow20,
.ms-bgColor-sharedOrangeYellow20--hover:hover {
  background-color: #986f0b;
}

.ms-bgColor-sharedOrangeYellow10,
.ms-bgColor-sharedOrangeYellow10--hover:hover {
  background-color: #c19c00;
}

.ms-bgColor-sharedYellowGreen10,
.ms-bgColor-sharedYellowGreen10--hover:hover {
  background-color: #8cbd18;
}

.ms-bgColor-sharedGreen20,
.ms-bgColor-sharedGreen20--hover:hover {
  background-color: #0b6a0b;
}

.ms-bgColor-sharedGreen10,
.ms-bgColor-sharedGreen10--hover:hover {
  background-color: #498205;
}

.ms-bgColor-sharedGreenCyan10,
.ms-bgColor-sharedGreenCyan10--hover:hover {
  background-color: #00ad56;
}

.ms-bgColor-sharedCyan40,
.ms-bgColor-sharedCyan40--hover:hover {
  background-color: #005e50;
}

.ms-bgColor-sharedCyan30,
.ms-bgColor-sharedCyan30--hover:hover {
  background-color: #005b70;
}

.ms-bgColor-sharedCyan20,
.ms-bgColor-sharedCyan20--hover:hover {
  background-color: #038387;
}

.ms-bgColor-sharedCyan10,
.ms-bgColor-sharedCyan10--hover:hover {
  background-color: #00b7c3;
}

.ms-bgColor-sharedCyanBlue20,
.ms-bgColor-sharedCyanBlue20--hover:hover {
  background-color: #004e8c;
}

.ms-bgColor-sharedCyanBlue10,
.ms-bgColor-sharedCyanBlue10--hover:hover {
  background-color: #0078d4;
}

.ms-bgColor-sharedBlue10,
.ms-bgColor-sharedBlue10--hover:hover {
  background-color: #4f6bed;
}

.ms-bgColor-sharedBlueMagenta40,
.ms-bgColor-sharedBlueMagenta40--hover:hover {
  background-color: #373277;
}

.ms-bgColor-sharedBlueMagenta30,
.ms-bgColor-sharedBlueMagenta30--hover:hover {
  background-color: #5c2e91;
}

.ms-bgColor-sharedBlueMagenta20,
.ms-bgColor-sharedBlueMagenta20--hover:hover {
  background-color: #8764b8;
}

.ms-bgColor-sharedBlueMagenta10,
.ms-bgColor-sharedBlueMagenta10--hover:hover {
  background-color: #8378de;
}

.ms-bgColor-sharedMagenta20,
.ms-bgColor-sharedMagenta20--hover:hover {
  background-color: #881798;
}

.ms-bgColor-sharedMagenta10,
.ms-bgColor-sharedMagenta10--hover:hover {
  background-color: #c239b3;
}

.ms-bgColor-sharedMagentaPink20,
.ms-bgColor-sharedMagentaPink20--hover:hover {
  background-color: #9b0062;
}

.ms-bgColor-sharedMagentaPink10,
.ms-bgColor-sharedMagentaPink10--hover:hover {
  background-color: #e3008c;
}

.ms-bgColor-sharedGray40,
.ms-bgColor-sharedGray40--hover:hover {
  background-color: #393939;
}

.ms-bgColor-sharedGray30,
.ms-bgColor-sharedGray30--hover:hover {
  background-color: #7a7574;
}

.ms-bgColor-sharedGray20,
.ms-bgColor-sharedGray20--hover:hover {
  background-color: #69797e;
}

.ms-bgColor-sharedGray10,
.ms-bgColor-sharedGray10--hover:hover {
  background-color: #a0aeb2;
}

.ms-borderColor-communicationShade30,
.ms-borderColor-communicationShade30--hover:hover {
  border-color: #004578;
}

.ms-borderColor-communicationShade20,
.ms-borderColor-communicationShade20--hover:hover {
  border-color: #005a9e;
}

.ms-borderColor-communicationShade10,
.ms-borderColor-communicationShade10--hover:hover {
  border-color: #106ebe;
}

.ms-borderColor-communicationPrimary,
.ms-borderColor-communicationPrimary--hover:hover {
  border-color: #0078d4;
}

.ms-borderColor-communicationTint10,
.ms-borderColor-communicationTint10--hover:hover {
  border-color: #2b88d8;
}

.ms-borderColor-communicationTint20,
.ms-borderColor-communicationTint20--hover:hover {
  border-color: #c7e0f4;
}

.ms-borderColor-communicationTint30,
.ms-borderColor-communicationTint30--hover:hover {
  border-color: #deecf9;
}

.ms-borderColor-communicationTint40,
.ms-borderColor-communicationTint40--hover:hover {
  border-color: #eff6fc;
}

.ms-borderColor-black,
.ms-borderColor-black--hover:hover {
  border-color: #000000;
}

.ms-borderColor-gray220,
.ms-borderColor-gray220--hover:hover {
  border-color: #11100f;
}

.ms-borderColor-gray210,
.ms-borderColor-gray210--hover:hover {
  border-color: #161514;
}

.ms-borderColor-gray200,
.ms-borderColor-gray200--hover:hover {
  border-color: #1b1a19;
}

.ms-borderColor-gray190,
.ms-borderColor-gray190--hover:hover {
  border-color: #201f1e;
}

.ms-borderColor-gray180,
.ms-borderColor-gray180--hover:hover {
  border-color: #252423;
}

.ms-borderColor-gray170,
.ms-borderColor-gray170--hover:hover {
  border-color: #292827;
}

.ms-borderColor-gray160,
.ms-borderColor-gray160--hover:hover {
  border-color: #323130;
}

.ms-borderColor-gray150,
.ms-borderColor-gray150--hover:hover {
  border-color: #3b3a39;
}

.ms-borderColor-gray140,
.ms-borderColor-gray140--hover:hover {
  border-color: #484644;
}

.ms-borderColor-gray130,
.ms-borderColor-gray130--hover:hover {
  border-color: #605e5c;
}

.ms-borderColor-gray120,
.ms-borderColor-gray120--hover:hover {
  border-color: #797775;
}

.ms-borderColor-gray110,
.ms-borderColor-gray110--hover:hover {
  border-color: #8a8886;
}

.ms-borderColor-gray100,
.ms-borderColor-gray100--hover:hover {
  border-color: #979593;
}

.ms-borderColor-gray90,
.ms-borderColor-gray90--hover:hover {
  border-color: #a19f9d;
}

.ms-borderColor-gray80,
.ms-borderColor-gray80--hover:hover {
  border-color: #b3b0ad;
}

.ms-borderColor-gray70,
.ms-borderColor-gray70--hover:hover {
  border-color: #bebbb8;
}

.ms-borderColor-gray60,
.ms-borderColor-gray60--hover:hover {
  border-color: #c8c6c4;
}

.ms-borderColor-gray50,
.ms-borderColor-gray50--hover:hover {
  border-color: #d2d0ce;
}

.ms-borderColor-gray40,
.ms-borderColor-gray40--hover:hover {
  border-color: #e1dfdd;
}

.ms-borderColor-gray30,
.ms-borderColor-gray30--hover:hover {
  border-color: #edebe9;
}

.ms-borderColor-gray20,
.ms-borderColor-gray20--hover:hover {
  border-color: #f3f2f1;
}

.ms-borderColor-gray10,
.ms-borderColor-gray10--hover:hover {
  border-color: #faf9f8;
}

.ms-borderColor-white,
.ms-borderColor-white--hover:hover {
  border-color: #ffffff;
}

.ms-borderColor-sharedPinkRed10,
.ms-borderColor-sharedPinkRed10--hover:hover {
  border-color: #750b1c;
}

.ms-borderColor-sharedRed20,
.ms-borderColor-sharedRed20--hover:hover {
  border-color: #a4262c;
}

.ms-borderColor-sharedRed10,
.ms-borderColor-sharedRed10--hover:hover {
  border-color: #d13438;
}

.ms-borderColor-sharedRedOrange20,
.ms-borderColor-sharedRedOrange20--hover:hover {
  border-color: #603d30;
}

.ms-borderColor-sharedRedOrange10,
.ms-borderColor-sharedRedOrange10--hover:hover {
  border-color: #da3b01;
}

.ms-borderColor-sharedOrange30,
.ms-borderColor-sharedOrange30--hover:hover {
  border-color: #8e562e;
}

.ms-borderColor-sharedOrange20,
.ms-borderColor-sharedOrange20--hover:hover {
  border-color: #ca5010;
}

.ms-borderColor-sharedOrange10,
.ms-borderColor-sharedOrange10--hover:hover {
  border-color: #ffaa44;
}

.ms-borderColor-sharedYellow10,
.ms-borderColor-sharedYellow10--hover:hover {
  border-color: #fce100;
}

.ms-borderColor-sharedOrangeYellow20,
.ms-borderColor-sharedOrangeYellow20--hover:hover {
  border-color: #986f0b;
}

.ms-borderColor-sharedOrangeYellow10,
.ms-borderColor-sharedOrangeYellow10--hover:hover {
  border-color: #c19c00;
}

.ms-borderColor-sharedYellowGreen10,
.ms-borderColor-sharedYellowGreen10--hover:hover {
  border-color: #8cbd18;
}

.ms-borderColor-sharedGreen20,
.ms-borderColor-sharedGreen20--hover:hover {
  border-color: #0b6a0b;
}

.ms-borderColor-sharedGreen10,
.ms-borderColor-sharedGreen10--hover:hover {
  border-color: #498205;
}

.ms-borderColor-sharedGreenCyan10,
.ms-borderColor-sharedGreenCyan10--hover:hover {
  border-color: #00ad56;
}

.ms-borderColor-sharedCyan40,
.ms-borderColor-sharedCyan40--hover:hover {
  border-color: #005e50;
}

.ms-borderColor-sharedCyan30,
.ms-borderColor-sharedCyan30--hover:hover {
  border-color: #005b70;
}

.ms-borderColor-sharedCyan20,
.ms-borderColor-sharedCyan20--hover:hover {
  border-color: #038387;
}

.ms-borderColor-sharedCyan10,
.ms-borderColor-sharedCyan10--hover:hover {
  border-color: #00b7c3;
}

.ms-borderColor-sharedCyanBlue20,
.ms-borderColor-sharedCyanBlue20--hover:hover {
  border-color: #004e8c;
}

.ms-borderColor-sharedCyanBlue10,
.ms-borderColor-sharedCyanBlue10--hover:hover {
  border-color: #0078d4;
}

.ms-borderColor-sharedBlue10,
.ms-borderColor-sharedBlue10--hover:hover {
  border-color: #4f6bed;
}

.ms-borderColor-sharedBlueMagenta40,
.ms-borderColor-sharedBlueMagenta40--hover:hover {
  border-color: #373277;
}

.ms-borderColor-sharedBlueMagenta30,
.ms-borderColor-sharedBlueMagenta30--hover:hover {
  border-color: #5c2e91;
}

.ms-borderColor-sharedBlueMagenta20,
.ms-borderColor-sharedBlueMagenta20--hover:hover {
  border-color: #8764b8;
}

.ms-borderColor-sharedBlueMagenta10,
.ms-borderColor-sharedBlueMagenta10--hover:hover {
  border-color: #8378de;
}

.ms-borderColor-sharedMagenta20,
.ms-borderColor-sharedMagenta20--hover:hover {
  border-color: #881798;
}

.ms-borderColor-sharedMagenta10,
.ms-borderColor-sharedMagenta10--hover:hover {
  border-color: #c239b3;
}

.ms-borderColor-sharedMagentaPink20,
.ms-borderColor-sharedMagentaPink20--hover:hover {
  border-color: #9b0062;
}

.ms-borderColor-sharedMagentaPink10,
.ms-borderColor-sharedMagentaPink10--hover:hover {
  border-color: #e3008c;
}

.ms-borderColor-sharedGray40,
.ms-borderColor-sharedGray40--hover:hover {
  border-color: #393939;
}

.ms-borderColor-sharedGray30,
.ms-borderColor-sharedGray30--hover:hover {
  border-color: #7a7574;
}

.ms-borderColor-sharedGray20,
.ms-borderColor-sharedGray20--hover:hover {
  border-color: #69797e;
}

.ms-borderColor-sharedGray10,
.ms-borderColor-sharedGray10--hover:hover {
  border-color: #a0aeb2;
}

.ms-fontColor-communicationShade30,
.ms-fontColor-communicationShade30--hover:hover {
  color: #004578;
}

.ms-fontColor-communicationShade20,
.ms-fontColor-communicationShade20--hover:hover {
  color: #005a9e;
}

.ms-fontColor-communicationShade10,
.ms-fontColor-communicationShade10--hover:hover {
  color: #106ebe;
}

.ms-fontColor-communicationPrimary,
.ms-fontColor-communicationPrimary--hover:hover {
  color: #0078d4;
}

.ms-fontColor-communicationTint10,
.ms-fontColor-communicationTint10--hover:hover {
  color: #2b88d8;
}

.ms-fontColor-communicationTint20,
.ms-fontColor-communicationTint20--hover:hover {
  color: #c7e0f4;
}

.ms-fontColor-communicationTint30,
.ms-fontColor-communicationTint30--hover:hover {
  color: #deecf9;
}

.ms-fontColor-communicationTint40,
.ms-fontColor-communicationTint40--hover:hover {
  color: #eff6fc;
}

.ms-fontColor-black,
.ms-fontColor-black--hover:hover {
  color: #000000;
}

.ms-fontColor-gray220,
.ms-fontColor-gray220--hover:hover {
  color: #11100f;
}

.ms-fontColor-gray210,
.ms-fontColor-gray210--hover:hover {
  color: #161514;
}

.ms-fontColor-gray200,
.ms-fontColor-gray200--hover:hover {
  color: #1b1a19;
}

.ms-fontColor-gray190,
.ms-fontColor-gray190--hover:hover {
  color: #201f1e;
}

.ms-fontColor-gray180,
.ms-fontColor-gray180--hover:hover {
  color: #252423;
}

.ms-fontColor-gray170,
.ms-fontColor-gray170--hover:hover {
  color: #292827;
}

.ms-fontColor-gray160,
.ms-fontColor-gray160--hover:hover {
  color: #323130;
}

.ms-fontColor-gray150,
.ms-fontColor-gray150--hover:hover {
  color: #3b3a39;
}

.ms-fontColor-gray140,
.ms-fontColor-gray140--hover:hover {
  color: #484644;
}

.ms-fontColor-gray130,
.ms-fontColor-gray130--hover:hover {
  color: #605e5c;
}

.ms-fontColor-gray120,
.ms-fontColor-gray120--hover:hover {
  color: #797775;
}

.ms-fontColor-gray110,
.ms-fontColor-gray110--hover:hover {
  color: #8a8886;
}

.ms-fontColor-gray100,
.ms-fontColor-gray100--hover:hover {
  color: #979593;
}

.ms-fontColor-gray90,
.ms-fontColor-gray90--hover:hover {
  color: #a19f9d;
}

.ms-fontColor-gray80,
.ms-fontColor-gray80--hover:hover {
  color: #b3b0ad;
}

.ms-fontColor-gray70,
.ms-fontColor-gray70--hover:hover {
  color: #bebbb8;
}

.ms-fontColor-gray60,
.ms-fontColor-gray60--hover:hover {
  color: #c8c6c4;
}

.ms-fontColor-gray50,
.ms-fontColor-gray50--hover:hover {
  color: #d2d0ce;
}

.ms-fontColor-gray40,
.ms-fontColor-gray40--hover:hover {
  color: #e1dfdd;
}

.ms-fontColor-gray30,
.ms-fontColor-gray30--hover:hover {
  color: #edebe9;
}

.ms-fontColor-gray20,
.ms-fontColor-gray20--hover:hover {
  color: #f3f2f1;
}

.ms-fontColor-gray10,
.ms-fontColor-gray10--hover:hover {
  color: #faf9f8;
}

.ms-fontColor-white,
.ms-fontColor-white--hover:hover {
  color: #ffffff;
}

.ms-fontColor-sharedPinkRed10,
.ms-fontColor-sharedPinkRed10--hover:hover {
  color: #750b1c;
}

.ms-fontColor-sharedRed20,
.ms-fontColor-sharedRed20--hover:hover {
  color: #a4262c;
}

.ms-fontColor-sharedRed10,
.ms-fontColor-sharedRed10--hover:hover {
  color: #d13438;
}

.ms-fontColor-sharedRedOrange20,
.ms-fontColor-sharedRedOrange20--hover:hover {
  color: #603d30;
}

.ms-fontColor-sharedRedOrange10,
.ms-fontColor-sharedRedOrange10--hover:hover {
  color: #da3b01;
}

.ms-fontColor-sharedOrange30,
.ms-fontColor-sharedOrange30--hover:hover {
  color: #8e562e;
}

.ms-fontColor-sharedOrange20,
.ms-fontColor-sharedOrange20--hover:hover {
  color: #ca5010;
}

.ms-fontColor-sharedOrange10,
.ms-fontColor-sharedOrange10--hover:hover {
  color: #ffaa44;
}

.ms-fontColor-sharedYellow10,
.ms-fontColor-sharedYellow10--hover:hover {
  color: #fce100;
}

.ms-fontColor-sharedOrangeYellow20,
.ms-fontColor-sharedOrangeYellow20--hover:hover {
  color: #986f0b;
}

.ms-fontColor-sharedOrangeYellow10,
.ms-fontColor-sharedOrangeYellow10--hover:hover {
  color: #c19c00;
}

.ms-fontColor-sharedYellowGreen10,
.ms-fontColor-sharedYellowGreen10--hover:hover {
  color: #8cbd18;
}

.ms-fontColor-sharedGreen20,
.ms-fontColor-sharedGreen20--hover:hover {
  color: #0b6a0b;
}

.ms-fontColor-sharedGreen10,
.ms-fontColor-sharedGreen10--hover:hover {
  color: #498205;
}

.ms-fontColor-sharedGreenCyan10,
.ms-fontColor-sharedGreenCyan10--hover:hover {
  color: #00ad56;
}

.ms-fontColor-sharedCyan40,
.ms-fontColor-sharedCyan40--hover:hover {
  color: #005e50;
}

.ms-fontColor-sharedCyan30,
.ms-fontColor-sharedCyan30--hover:hover {
  color: #005b70;
}

.ms-fontColor-sharedCyan20,
.ms-fontColor-sharedCyan20--hover:hover {
  color: #038387;
}

.ms-fontColor-sharedCyan10,
.ms-fontColor-sharedCyan10--hover:hover {
  color: #00b7c3;
}

.ms-fontColor-sharedCyanBlue20,
.ms-fontColor-sharedCyanBlue20--hover:hover {
  color: #004e8c;
}

.ms-fontColor-sharedCyanBlue10,
.ms-fontColor-sharedCyanBlue10--hover:hover {
  color: #0078d4;
}

.ms-fontColor-sharedBlue10,
.ms-fontColor-sharedBlue10--hover:hover {
  color: #4f6bed;
}

.ms-fontColor-sharedBlueMagenta40,
.ms-fontColor-sharedBlueMagenta40--hover:hover {
  color: #373277;
}

.ms-fontColor-sharedBlueMagenta30,
.ms-fontColor-sharedBlueMagenta30--hover:hover {
  color: #5c2e91;
}

.ms-fontColor-sharedBlueMagenta20,
.ms-fontColor-sharedBlueMagenta20--hover:hover {
  color: #8764b8;
}

.ms-fontColor-sharedBlueMagenta10,
.ms-fontColor-sharedBlueMagenta10--hover:hover {
  color: #8378de;
}

.ms-fontColor-sharedMagenta20,
.ms-fontColor-sharedMagenta20--hover:hover {
  color: #881798;
}

.ms-fontColor-sharedMagenta10,
.ms-fontColor-sharedMagenta10--hover:hover {
  color: #c239b3;
}

.ms-fontColor-sharedMagentaPink20,
.ms-fontColor-sharedMagentaPink20--hover:hover {
  color: #9b0062;
}

.ms-fontColor-sharedMagentaPink10,
.ms-fontColor-sharedMagentaPink10--hover:hover {
  color: #e3008c;
}

.ms-fontColor-sharedGray40,
.ms-fontColor-sharedGray40--hover:hover {
  color: #393939;
}

.ms-fontColor-sharedGray30,
.ms-fontColor-sharedGray30--hover:hover {
  color: #7a7574;
}

.ms-fontColor-sharedGray20,
.ms-fontColor-sharedGray20--hover:hover {
  color: #69797e;
}

.ms-fontColor-sharedGray10,
.ms-fontColor-sharedGray10--hover:hover {
  color: #a0aeb2;
}

.ms-depth-0 {
  box-shadow: 0 0 0 0 transparent;
}

.ms-depth-4 {
  box-shadow: 0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132), 0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108);
}

.ms-depth-8 {
  box-shadow: 0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108);
}

.ms-depth-16 {
  box-shadow: 0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132), 0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108);
}

.ms-depth-64 {
  box-shadow: 0 25.6px 57.6px 0 rgba(0, 0, 0, 0.22), 0 4.8px 14.4px 0 rgba(0, 0, 0, 0.18);
}

.ms-fontSize-68 {
  font-size: 68px;
}

.ms-fontSize-42 {
  font-size: 42px;
}

.ms-fontSize-32 {
  font-size: 32px;
}

.ms-fontSize-28 {
  font-size: 28px;
}

.ms-fontSize-24 {
  font-size: 24px;
}

.ms-fontSize-20 {
  font-size: 20px;
}

.ms-fontSize-18 {
  font-size: 18px;
}

.ms-fontSize-16 {
  font-size: 16px;
}

.ms-fontSize-14 {
  font-size: 14px;
}

.ms-fontSize-12 {
  font-size: 12px;
}

.ms-fontSize-10 {
  font-size: 10px;
}

.ms-fontWeight-regular {
  font-weight: 400;
}

.ms-fontWeight-semibold {
  font-weight: 600;
}

.ms-fontWeight-bold {
  font-weight: 700;
}

.ms-font-su {
  font-size: 42px;
  font-weight: 100;
}

.ms-font-xxl {
  font-size: 28px;
  font-weight: 100;
}

.ms-font-xl-plus {
  font-size: 24px;
  font-weight: 100;
}

.ms-font-xl {
  font-size: 21px;
  font-weight: 100;
}

.ms-font-l {
  font-size: 17px;
  font-weight: 300;
}

.ms-font-m-plus {
  font-size: 15px;
  font-weight: 400;
}

.ms-font-m {
  font-size: 14px;
  font-weight: 400;
}

.ms-font-s-plus {
  font-size: 13px;
  font-weight: 400;
}

.ms-font-s {
  font-size: 12px;
  font-weight: 400;
}

.ms-font-xs {
  font-size: 11px;
  font-weight: 400;
}

.ms-font-mi {
  font-size: 10px;
  font-weight: 600;
}

.ms-fontWeight-light {
  font-weight: 100;
}

.ms-fontWeight-semilight {
  font-weight: 300;
}

.ms-fontSize-su {
  font-size: 42px;
}

.ms-fontSize-xxl {
  font-size: 28px;
}

.ms-fontSize-xlPlus {
  font-size: 24px;
}

.ms-fontSize-xl {
  font-size: 21px;
}

.ms-fontSize-l {
  font-size: 17px;
}

.ms-fontSize-mPlus {
  font-size: 15px;
}

.ms-fontSize-m {
  font-size: 14px;
}

.ms-fontSize-sPlus {
  font-size: 13px;
}

.ms-fontSize-s {
  font-size: 12px;
}

.ms-fontSize-xs {
  font-size: 11px;
}

.ms-fontSize-mi {
  font-size: 10px;
}

@font-face {
  font-family: 'Leelawadee UI Web';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/leelawadeeui-thai/leelawadeeui-light.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/leelawadeeui-thai/leelawadeeui-light.woff') format('woff');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'Leelawadee UI Web';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/leelawadeeui-thai/leelawadeeui-semilight.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/leelawadeeui-thai/leelawadeeui-semilight.woff') format('woff');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Leelawadee UI Web';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/leelawadeeui-thai/leelawadeeui-regular.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/leelawadeeui-thai/leelawadeeui-regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Leelawadee UI Web';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/leelawadeeui-thai/leelawadeeui-semibold.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/leelawadeeui-thai/leelawadeeui-semibold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Leelawadee UI Web';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/leelawadeeui-thai/leelawadeeui-bold.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/leelawadeeui-thai/leelawadeeui-bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (Arabic)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-arabic/segoeui-light.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-arabic/segoeui-light.woff') format('woff');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (Arabic)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-arabic/segoeui-semilight.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-arabic/segoeui-semilight.woff') format('woff');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (Arabic)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-arabic/segoeui-regular.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-arabic/segoeui-regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (Arabic)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-arabic/segoeui-semibold.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-arabic/segoeui-semibold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (Arabic)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-arabic/segoeui-bold.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-arabic/segoeui-bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (Cyrillic)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-cyrillic/segoeui-light.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-cyrillic/segoeui-light.woff') format('woff');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (Cyrillic)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-cyrillic/segoeui-semilight.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-cyrillic/segoeui-semilight.woff') format('woff');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (Cyrillic)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-cyrillic/segoeui-regular.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-cyrillic/segoeui-regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (Cyrillic)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-cyrillic/segoeui-semibold.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-cyrillic/segoeui-semibold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (Cyrillic)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-cyrillic/segoeui-bold.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-cyrillic/segoeui-bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (East European)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-easteuropean/segoeui-light.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-easteuropean/segoeui-light.woff') format('woff');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (East European)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-easteuropean/segoeui-semilight.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-easteuropean/segoeui-semilight.woff') format('woff');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (East European)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-easteuropean/segoeui-regular.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-easteuropean/segoeui-regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (East European)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-easteuropean/segoeui-semibold.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-easteuropean/segoeui-semibold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (East European)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-easteuropean/segoeui-bold.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-easteuropean/segoeui-bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (Greek)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-greek/segoeui-light.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-greek/segoeui-light.woff') format('woff');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (Greek)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-greek/segoeui-semilight.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-greek/segoeui-semilight.woff') format('woff');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (Greek)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-greek/segoeui-regular.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-greek/segoeui-regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (Greek)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-greek/segoeui-semibold.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-greek/segoeui-semibold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (Greek)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-greek/segoeui-bold.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-greek/segoeui-bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (Hebrew)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-hebrew/segoeui-light.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-hebrew/segoeui-light.woff') format('woff');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (Hebrew)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-hebrew/segoeui-semilight.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-hebrew/segoeui-semilight.woff') format('woff');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (Hebrew)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-hebrew/segoeui-regular.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-hebrew/segoeui-regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (Hebrew)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-hebrew/segoeui-semibold.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-hebrew/segoeui-semibold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (Hebrew)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-hebrew/segoeui-bold.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-hebrew/segoeui-bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (Vietnamese)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-vietnamese/segoeui-light.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-vietnamese/segoeui-light.woff') format('woff');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (Vietnamese)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-vietnamese/segoeui-semilight.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-vietnamese/segoeui-semilight.woff') format('woff');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (Vietnamese)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-vietnamese/segoeui-regular.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-vietnamese/segoeui-regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (Vietnamese)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-vietnamese/segoeui-semibold.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-vietnamese/segoeui-semibold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (Vietnamese)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-vietnamese/segoeui-bold.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-vietnamese/segoeui-bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (West European)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-light.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-light.woff') format('woff');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (West European)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semilight.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semilight.woff') format('woff');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (West European)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-regular.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (West European)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semibold.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semibold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI Web (West European)';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-bold.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Selawik Web';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/selawik/selawik-light.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/selawik/selawik-light.woff') format('woff');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'Selawik Web';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/selawik/selawik-semilight.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/selawik/selawik-semilight.woff') format('woff');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Selawik Web';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/selawik/selawik-regular.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/selawik/selawik-regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Selawik Web';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/selawik/selawik-semibold.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/selawik/selawik-semibold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Selawik Web';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/selawik/selawik-bold.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/selawik/selawik-bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Leelawadee UI Web';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/leelawadeeui-thai/leelawadeeui-semilight.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/leelawadeeui-thai/leelawadeeui-semilight.woff') format('woff');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'Leelawadee UI Web';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/leelawadeeui-thai/leelawadeeui-bold.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/leelawadeeui-thai/leelawadeeui-bold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}

.ms-Grid {
  box-sizing: border-box;
  zoom: 1;
  padding: 0 8px;
}

.ms-Grid::before,
.ms-Grid::after {
  display: table;
  content: '';
  line-height: 0;
}

.ms-Grid::after {
  clear: both;
}

.ms-Grid-row {
  margin: 0 -8px;
  box-sizing: border-box;
  zoom: 1;
}

.ms-Grid-row::before,
.ms-Grid-row::after {
  display: table;
  content: '';
  line-height: 0;
}

.ms-Grid-row::after {
  clear: both;
}

.ms-Grid-col {
  position: relative;
  min-height: 1px;
  padding-left: 8px;
  padding-right: 8px;
  box-sizing: border-box;
}

[dir='ltr'] .ms-Grid-col {
  float: left;
}

[dir='rtl'] .ms-Grid-col {
  float: right;
}

.ms-Grid-col .ms-Grid {
  padding: 0;
}

.ms-Icon {
  display: inline-block;
  font-family: 'FabricMDL2Icons';
  font-style: normal;
  font-weight: normal;
  speak: none;
}

.ms-Icon--circle {
  margin: 0 0.5em 0 0;
  position: relative;
  display: inline-block;
  font-size: 1rem;
  width: 1em;
  height: 1em;
  padding: 0;
  text-align: left;
}

[dir='rtl'] .ms-Icon--circle {
  margin: 0 0 0 0.5em;
}

.ms-Icon--circle::before,
.ms-Icon--circle::after {
  line-height: 1;
  font-size: inherit;
}

.ms-Icon--circle::before {
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: absolute;
}

.ms-Icon--circle::after {
  content: '\e000';
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(2);
  transform-origin: 50% 50%;
  z-index: 0;
}

.ms-Icon--xs {
  font-size: 10px;
}

.ms-Icon--s {
  font-size: 12px;
}

.ms-Icon--m {
  font-size: 16px;
}

.ms-Icon--l {
  font-size: 20px;
}

.ms-Icon--12PointStar::before {
  content: '';
}

.ms-Icon--6PointStar::before {
  content: '';
}

.ms-Icon--AADLogo::before {
  content: '';
}

.ms-Icon--Accept::before {
  content: '';
}

.ms-Icon--AccessibiltyChecker::before {
  content: '';
}

.ms-Icon--AccessLogo::before {
  content: '';
}

.ms-Icon--AccessLogoFill::before {
  content: '';
}

.ms-Icon--AccountActivity::before {
  content: '';
}

.ms-Icon--AccountBrowser::before {
  content: '';
}

.ms-Icon--AccountManagement::before {
  content: '';
}

.ms-Icon--Accounts::before {
  content: '';
}

.ms-Icon--ActionCenter::before {
  content: '';
}

.ms-Icon--ActivateOrders::before {
  content: '';
}

.ms-Icon--ActivityFeed::before {
  content: '';
}

.ms-Icon--Add::before {
  content: '';
}

.ms-Icon--AddBookmark::before {
  content: '';
}

.ms-Icon--AddEvent::before {
  content: '';
}

.ms-Icon--AddFavorite::before {
  content: '';
}

.ms-Icon--AddFavoriteFill::before {
  content: '';
}

.ms-Icon--AddFriend::before {
  content: '';
}

.ms-Icon--AddGroup::before {
  content: '';
}

.ms-Icon--AddHome::before {
  content: '';
}

.ms-Icon--AddIn::before {
  content: '';
}

.ms-Icon--AddLink::before {
  content: '';
}

.ms-Icon--AddNotes::before {
  content: '';
}

.ms-Icon--AddOnlineMeeting::before {
  content: '';
}

.ms-Icon--AddPhone::before {
  content: '';
}

.ms-Icon--AddReaction::before {
  content: '';
}

.ms-Icon--AddTo::before {
  content: '';
}

.ms-Icon--AddToShoppingList::before {
  content: '';
}

.ms-Icon--AddWork::before {
  content: '';
}

.ms-Icon--Admin::before {
  content: '';
}

.ms-Icon--AdminALogo32::before {
  content: '';
}

.ms-Icon--AdminALogoFill32::before {
  content: '';
}

.ms-Icon--AdminALogoInverse32::before {
  content: '';
}

.ms-Icon--AdminCLogoInverse32::before {
  content: '';
}

.ms-Icon--AdminDLogoInverse32::before {
  content: '';
}

.ms-Icon--AdminELogoInverse32::before {
  content: '';
}

.ms-Icon--AdminLLogoInverse32::before {
  content: '';
}

.ms-Icon--AdminMLogoInverse32::before {
  content: '';
}

.ms-Icon--AdminOLogoInverse32::before {
  content: '';
}

.ms-Icon--AdminPLogoInverse32::before {
  content: '';
}

.ms-Icon--AdminSLogoInverse32::before {
  content: '';
}

.ms-Icon--AdminYLogoInverse32::before {
  content: '';
}

.ms-Icon--Airplane::before {
  content: '';
}

.ms-Icon--AirplaneSolid::before {
  content: '';
}

.ms-Icon--AirTickets::before {
  content: '';
}

.ms-Icon--AlarmClock::before {
  content: '';
}

.ms-Icon--Album::before {
  content: '';
}

.ms-Icon--AlbumRemove::before {
  content: '';
}

.ms-Icon--AlertSettings::before {
  content: '';
}

.ms-Icon--AlertSolid::before {
  content: '';
}

.ms-Icon--AlignCenter::before {
  content: '';
}

.ms-Icon--AlignHorizontalCenter::before {
  content: '';
}

.ms-Icon--AlignHorizontalLeft::before {
  content: '';
}

.ms-Icon--AlignHorizontalRight::before {
  content: '';
}

.ms-Icon--AlignJustify::before {
  content: '';
}

.ms-Icon--AlignLeft::before {
  content: '';
}

.ms-Icon--AlignRight::before {
  content: '';
}

.ms-Icon--AlignVerticalBottom::before {
  content: '';
}

.ms-Icon--AlignVerticalCenter::before {
  content: '';
}

.ms-Icon--AlignVerticalTop::before {
  content: '';
}

[dir='ltr'] .ms-Icon--AllApps::before {
  content: '';
}

[dir='rtl'] .ms-Icon--AllApps::before {
  content: '';
}

[dir='ltr'] .ms-Icon--AllAppsMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--AllAppsMirrored::before {
  content: '';
}

.ms-Icon--AllCurrency::before {
  content: '';
}

.ms-Icon--AnalyticsLogo::before {
  content: '';
}

.ms-Icon--AnalyticsQuery::before {
  content: '';
}

.ms-Icon--AnalyticsReport::before {
  content: '';
}

.ms-Icon--AnalyticsView::before {
  content: '';
}

.ms-Icon--AnchorLock::before {
  content: '';
}

.ms-Icon--Annotation::before {
  content: '';
}

.ms-Icon--AppIconDefault::before {
  content: '';
}

.ms-Icon--AppIconDefaultAdd::before {
  content: '';
}

.ms-Icon--AppIconDefaultList::before {
  content: '';
}

.ms-Icon--Archive::before {
  content: '';
}

.ms-Icon--AreaChart::before {
  content: '';
}

.ms-Icon--ArrangeBringForward::before {
  content: '';
}

.ms-Icon--ArrangeBringToFront::before {
  content: '';
}

.ms-Icon--ArrangeByFrom::before {
  content: '';
}

.ms-Icon--ArrangeSendBackward::before {
  content: '';
}

.ms-Icon--ArrangeSendToBack::before {
  content: '';
}

.ms-Icon--Arrivals::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ArrowDownRight8::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ArrowDownRight8::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ArrowDownRightMirrored8::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ArrowDownRightMirrored8::before {
  content: '';
}

.ms-Icon--ArrowTallDownLeft::before {
  content: '';
}

.ms-Icon--ArrowTallDownRight::before {
  content: '';
}

.ms-Icon--ArrowTallUpLeft::before {
  content: '';
}

.ms-Icon--ArrowTallUpRight::before {
  content: '';
}

.ms-Icon--ArrowUpRight::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ArrowUpRight8::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ArrowUpRight8::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ArrowUpRightMirrored8::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ArrowUpRightMirrored8::before {
  content: '';
}

.ms-Icon--Articles::before {
  content: '';
}

.ms-Icon--Ascending::before {
  content: '';
}

.ms-Icon--AspectRatio::before {
  content: '';
}

.ms-Icon--AssessmentGroup::before {
  content: '';
}

.ms-Icon--AssessmentGroupTemplate::before {
  content: '';
}

.ms-Icon--AssetLibrary::before {
  content: '';
}

.ms-Icon--Assign::before {
  content: '';
}

.ms-Icon--Asterisk::before {
  content: '';
}

.ms-Icon--AsteriskSolid::before {
  content: '';
}

.ms-Icon--ATPLogo::before {
  content: '';
}

.ms-Icon--Attach::before {
  content: '';
}

.ms-Icon--AustralianRules::before {
  content: '';
}

.ms-Icon--AuthenticatorApp::before {
  content: '';
}

.ms-Icon--AutoEnhanceOff::before {
  content: '';
}

.ms-Icon--AutoEnhanceOn::before {
  content: '';
}

.ms-Icon--AutoFillTemplate::before {
  content: '';
}

.ms-Icon--AutoHeight::before {
  content: '';
}

.ms-Icon--AutoRacing::before {
  content: '';
}

.ms-Icon--AwayStatus::before {
  content: '';
}

.ms-Icon--AzureAPIManagement::before {
  content: '';
}

.ms-Icon--AzureKeyVault::before {
  content: '';
}

.ms-Icon--AzureLogo::before {
  content: '';
}

.ms-Icon--AzureServiceEndpoint::before {
  content: '';
}

.ms-Icon--Back::before {
  content: '';
}

.ms-Icon--BackgroundColor::before {
  content: '';
}

.ms-Icon--Backlog::before {
  content: '';
}

.ms-Icon--BacklogBoard::before {
  content: '';
}

.ms-Icon--BacklogList::before {
  content: '';
}

.ms-Icon--BackToWindow::before {
  content: '';
}

.ms-Icon--Badge::before {
  content: '';
}

.ms-Icon--Balloons::before {
  content: '';
}

.ms-Icon--Bank::before {
  content: '';
}

.ms-Icon--BankSolid::before {
  content: '';
}

.ms-Icon--BarChart4::before {
  content: '';
}

.ms-Icon--BarChartHorizontal::before {
  content: '';
}

.ms-Icon--BarChartVertical::before {
  content: '';
}

.ms-Icon--BarChartVerticalEdit::before {
  content: '';
}

.ms-Icon--BarChartVerticalFill::before {
  content: '';
}

.ms-Icon--BarChartVerticalFilter::before {
  content: '';
}

.ms-Icon--BarChartVerticalFilterSolid::before {
  content: '';
}

.ms-Icon--Baseball::before {
  content: '';
}

.ms-Icon--BeerMug::before {
  content: '';
}

.ms-Icon--BIDashboard::before {
  content: '';
}

.ms-Icon--BidiLtr::before {
  content: '';
}

.ms-Icon--BidiRtl::before {
  content: '';
}

.ms-Icon--BingLogo::before {
  content: '';
}

.ms-Icon--BirthdayCake::before {
  content: '';
}

.ms-Icon--BlockContact::before {
  content: '';
}

.ms-Icon--Blocked::before {
  content: '';
}

.ms-Icon--Blocked12::before {
  content: '';
}

.ms-Icon--Blocked2::before {
  content: '';
}

.ms-Icon--Blocked2Solid::before {
  content: '';
}

.ms-Icon--BlockedSite::before {
  content: '';
}

.ms-Icon--BlockedSiteSolid12::before {
  content: '';
}

.ms-Icon--BlockedSolid::before {
  content: '';
}

.ms-Icon--Blog::before {
  content: '';
}

.ms-Icon--BlowingSnow::before {
  content: '';
}

.ms-Icon--Blur::before {
  content: '';
}

.ms-Icon--Boards::before {
  content: '';
}

.ms-Icon--Bold::before {
  content: '';
}

.ms-Icon--BookAnswers::before {
  content: '';
}

.ms-Icon--BookingsLogo::before {
  content: '';
}

.ms-Icon--BookmarkReport::before {
  content: '';
}

[dir='ltr'] .ms-Icon--Bookmarks::before {
  content: '';
}

[dir='rtl'] .ms-Icon--Bookmarks::before {
  content: '';
}

[dir='ltr'] .ms-Icon--BookmarksMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--BookmarksMirrored::before {
  content: '';
}

.ms-Icon--BorderDash::before {
  content: '';
}

.ms-Icon--BorderDot::before {
  content: '';
}

.ms-Icon--BoxAdditionSolid::before {
  content: '';
}

.ms-Icon--BoxCheckmarkSolid::before {
  content: '';
}

.ms-Icon--BoxMultiplySolid::before {
  content: '';
}

.ms-Icon--BoxPlaySolid::before {
  content: '';
}

.ms-Icon--BoxSubtractSolid::before {
  content: '';
}

.ms-Icon--BranchCommit::before {
  content: '';
}

.ms-Icon--BranchCompare::before {
  content: '';
}

.ms-Icon--BranchFork::before {
  content: '';
}

.ms-Icon--BranchFork2::before {
  content: '';
}

.ms-Icon--BranchLocked::before {
  content: '';
}

.ms-Icon--BranchMerge::before {
  content: '';
}

.ms-Icon--BranchPullRequest::before {
  content: '';
}

.ms-Icon--BranchSearch::before {
  content: '';
}

.ms-Icon--BranchShelveset::before {
  content: '';
}

.ms-Icon--Breadcrumb::before {
  content: '';
}

.ms-Icon--Breakfast::before {
  content: '';
}

.ms-Icon--Brightness::before {
  content: '';
}

.ms-Icon--Broom::before {
  content: '';
}

.ms-Icon--BrowserScreenShot::before {
  content: '';
}

.ms-Icon--BrowserTab::before {
  content: '';
}

.ms-Icon--BrowserTabScreenshot::before {
  content: '';
}

.ms-Icon--Brunch::before {
  content: '';
}

.ms-Icon--Brush::before {
  content: '';
}

.ms-Icon--BucketColor::before {
  content: '';
}

.ms-Icon--BucketColorFill::before {
  content: '';
}

.ms-Icon--BufferTimeAfter::before {
  content: '';
}

.ms-Icon--BufferTimeBefore::before {
  content: '';
}

.ms-Icon--BufferTimeBoth::before {
  content: '';
}

.ms-Icon--Bug::before {
  content: '';
}

.ms-Icon--BugSolid::before {
  content: '';
}

.ms-Icon--Build::before {
  content: '';
}

.ms-Icon--BuildDefinition::before {
  content: '';
}

.ms-Icon--BuildIssue::before {
  content: '';
}

.ms-Icon--BuildQueue::before {
  content: '';
}

.ms-Icon--BuildQueueNew::before {
  content: '';
}

.ms-Icon--BulkUpload::before {
  content: '';
}

[dir='ltr'] .ms-Icon--BulletedList2::before {
  content: '';
}

[dir='rtl'] .ms-Icon--BulletedList2::before {
  content: '';
}

[dir='ltr'] .ms-Icon--BulletedList2Mirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--BulletedList2Mirrored::before {
  content: '';
}

[dir='ltr'] .ms-Icon--BulletedListBullet::before {
  content: '';
}

[dir='rtl'] .ms-Icon--BulletedListBullet::before {
  content: '';
}

[dir='ltr'] .ms-Icon--BulletedListBulletMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--BulletedListBulletMirrored::before {
  content: '';
}

[dir='ltr'] .ms-Icon--BulletedList::before {
  content: '';
}

[dir='rtl'] .ms-Icon--BulletedList::before {
  content: '';
}

[dir='ltr'] .ms-Icon--BulletedListMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--BulletedListMirrored::before {
  content: '';
}

[dir='ltr'] .ms-Icon--BulletedListText::before {
  content: '';
}

[dir='rtl'] .ms-Icon--BulletedListText::before {
  content: '';
}

[dir='ltr'] .ms-Icon--BulletedListTextMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--BulletedListTextMirrored::before {
  content: '';
}

.ms-Icon--BulletedTreeList::before {
  content: '';
}

.ms-Icon--Bullseye::before {
  content: '';
}

.ms-Icon--BullseyeTarget::before {
  content: '';
}

.ms-Icon--BullseyeTargetEdit::before {
  content: '';
}

.ms-Icon--Bus::before {
  content: '';
}

.ms-Icon--BusinessCenterLogo::before {
  content: '';
}

.ms-Icon--BusinessHoursSign::before {
  content: '';
}

.ms-Icon--BusSolid::before {
  content: '';
}

.ms-Icon--ButtonControl::before {
  content: '';
}

.ms-Icon--Cafe::before {
  content: '';
}

.ms-Icon--Cake::before {
  content: '';
}

.ms-Icon--Calculator::before {
  content: '';
}

.ms-Icon--CalculatorAddition::before {
  content: '';
}

.ms-Icon--CalculatorEqualTo::before {
  content: '';
}

.ms-Icon--CalculatorMultiply::before {
  content: '';
}

.ms-Icon--CalculatorNotEqualTo::before {
  content: '';
}

.ms-Icon--CalculatorPercentage::before {
  content: '';
}

.ms-Icon--CalculatorSubtract::before {
  content: '';
}

.ms-Icon--CalendarAgenda::before {
  content: '';
}

.ms-Icon--CalendarDay::before {
  content: '';
}

[dir='ltr'] .ms-Icon--Calendar::before {
  content: '';
}

[dir='rtl'] .ms-Icon--Calendar::before {
  content: '';
}

[dir='ltr'] .ms-Icon--CalendarMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--CalendarMirrored::before {
  content: '';
}

.ms-Icon--CalendarReply::before {
  content: '';
}

[dir='ltr'] .ms-Icon--CalendarSettings::before {
  content: '';
}

[dir='rtl'] .ms-Icon--CalendarSettings::before {
  content: '';
}

[dir='ltr'] .ms-Icon--CalendarSettingsMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--CalendarSettingsMirrored::before {
  content: '';
}

.ms-Icon--CalendarWeek::before {
  content: '';
}

.ms-Icon--CalendarWorkWeek::before {
  content: '';
}

.ms-Icon--CalendarYear::before {
  content: '';
}

.ms-Icon--Calories::before {
  content: '';
}

.ms-Icon--CaloriesAdd::before {
  content: '';
}

.ms-Icon--Camera::before {
  content: '';
}

.ms-Icon--CampaignTemplate::before {
  content: '';
}

.ms-Icon--Cancel::before {
  content: '';
}

.ms-Icon--CannedChat::before {
  content: '';
}

.ms-Icon--Car::before {
  content: '';
}

.ms-Icon--CaretBottomLeftCenter8::before {
  content: '';
}

.ms-Icon--CaretBottomLeftSolid8::before {
  content: '';
}

.ms-Icon--CaretBottomRightCenter8::before {
  content: '';
}

.ms-Icon--CaretBottomRightSolid8::before {
  content: '';
}

.ms-Icon--CaretDown8::before {
  content: '';
}

.ms-Icon--CaretDownSolid8::before {
  content: '';
}

[dir='ltr'] .ms-Icon--CaretHollow::before {
  content: '';
}

[dir='rtl'] .ms-Icon--CaretHollow::before {
  content: '';
}

[dir='ltr'] .ms-Icon--CaretHollowMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--CaretHollowMirrored::before {
  content: '';
}

.ms-Icon--CaretLeft8::before {
  content: '';
}

.ms-Icon--CaretLeftSolid8::before {
  content: '';
}

.ms-Icon--CaretRight::before {
  content: '';
}

.ms-Icon--CaretRight8::before {
  content: '';
}

.ms-Icon--CaretRightSolid8::before {
  content: '';
}

.ms-Icon--CaretSolid16::before {
  content: '';
}

.ms-Icon--CaretSolidDown::before {
  content: '';
}

.ms-Icon--CaretSolidLeft::before {
  content: '';
}

[dir='ltr'] .ms-Icon--CaretSolid::before {
  content: '';
}

[dir='rtl'] .ms-Icon--CaretSolid::before {
  content: '';
}

[dir='ltr'] .ms-Icon--CaretSolidMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--CaretSolidMirrored::before {
  content: '';
}

.ms-Icon--CaretSolidRight::before {
  content: '';
}

.ms-Icon--CaretSolidUp::before {
  content: '';
}

.ms-Icon--CaretTopLeftCenter8::before {
  content: '';
}

.ms-Icon--CaretTopLeftSolid8::before {
  content: '';
}

.ms-Icon--CaretTopRightCenter8::before {
  content: '';
}

.ms-Icon--CaretTopRightSolid8::before {
  content: '';
}

.ms-Icon--CaretUp8::before {
  content: '';
}

.ms-Icon--CaretUpSolid8::before {
  content: '';
}

.ms-Icon--Cat::before {
  content: '';
}

.ms-Icon--CellPhone::before {
  content: '';
}

.ms-Icon--Certificate::before {
  content: '';
}

.ms-Icon--CertifiedDatabase::before {
  content: '';
}

.ms-Icon--ChangeEntitlements::before {
  content: '';
}

.ms-Icon--Chart::before {
  content: '';
}

.ms-Icon--ChartSeries::before {
  content: '';
}

.ms-Icon--ChartTemplate::before {
  content: '';
}

.ms-Icon--ChartXAngle::before {
  content: '';
}

.ms-Icon--ChartYAngle::before {
  content: '';
}

.ms-Icon--Chat::before {
  content: '';
}

.ms-Icon--ChatBot::before {
  content: '';
}

.ms-Icon--ChatInviteFriend::before {
  content: '';
}

.ms-Icon--ChatSolid::before {
  content: '';
}

.ms-Icon--Checkbox::before {
  content: '';
}

.ms-Icon--CheckboxComposite::before {
  content: '';
}

.ms-Icon--CheckboxCompositeReversed::before {
  content: '';
}

.ms-Icon--CheckboxFill::before {
  content: '';
}

.ms-Icon--CheckboxIndeterminate::before {
  content: '';
}

.ms-Icon--CheckedOutByOther12::before {
  content: '';
}

.ms-Icon--CheckedOutByYou12::before {
  content: '';
}

.ms-Icon--CheckList::before {
  content: '';
}

[dir='ltr'] .ms-Icon--CheckListCheck::before {
  content: '';
}

[dir='rtl'] .ms-Icon--CheckListCheck::before {
  content: '';
}

[dir='ltr'] .ms-Icon--CheckListCheckMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--CheckListCheckMirrored::before {
  content: '';
}

[dir='ltr'] .ms-Icon--CheckListText::before {
  content: '';
}

[dir='rtl'] .ms-Icon--CheckListText::before {
  content: '';
}

[dir='ltr'] .ms-Icon--CheckListTextMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--CheckListTextMirrored::before {
  content: '';
}

.ms-Icon--CheckMark::before {
  content: '';
}

.ms-Icon--ChevronDown::before {
  content: '';
}

.ms-Icon--ChevronDownEnd6::before {
  content: '';
}

.ms-Icon--ChevronDownMed::before {
  content: '';
}

.ms-Icon--ChevronDownSmall::before {
  content: '';
}

.ms-Icon--ChevronFold10::before {
  content: '';
}

.ms-Icon--ChevronLeft::before {
  content: '';
}

.ms-Icon--ChevronLeftEnd6::before {
  content: '';
}

.ms-Icon--ChevronLeftMed::before {
  content: '';
}

.ms-Icon--ChevronLeftSmall::before {
  content: '';
}

.ms-Icon--ChevronRight::before {
  content: '';
}

.ms-Icon--ChevronRightEnd6::before {
  content: '';
}

.ms-Icon--ChevronRightMed::before {
  content: '';
}

.ms-Icon--ChevronRightSmall::before {
  content: '';
}

.ms-Icon--ChevronUnfold10::before {
  content: '';
}

.ms-Icon--ChevronUp::before {
  content: '';
}

.ms-Icon--ChevronUpEnd6::before {
  content: '';
}

.ms-Icon--ChevronUpMed::before {
  content: '';
}

.ms-Icon--ChevronUpSmall::before {
  content: '';
}

.ms-Icon--Childof::before {
  content: '';
}

.ms-Icon--Chopsticks::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ChromeBack::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ChromeBack::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ChromeBackMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ChromeBackMirrored::before {
  content: '';
}

.ms-Icon--ChromeClose::before {
  content: '';
}

.ms-Icon--ChromeFullScreen::before {
  content: '';
}

.ms-Icon--ChromeMinimize::before {
  content: '';
}

.ms-Icon--ChromeRestore::before {
  content: '';
}

.ms-Icon--CircleAddition::before {
  content: '';
}

.ms-Icon--CircleAdditionSolid::before {
  content: '';
}

.ms-Icon--CircleFill::before {
  content: '';
}

.ms-Icon--CircleHalfFull::before {
  content: '';
}

.ms-Icon--CirclePause::before {
  content: '';
}

.ms-Icon--CirclePauseSolid::before {
  content: '';
}

.ms-Icon--CirclePlus::before {
  content: '';
}

.ms-Icon--CircleRing::before {
  content: '';
}

.ms-Icon--CircleShapeSolid::before {
  content: '';
}

.ms-Icon--CircleStop::before {
  content: '';
}

.ms-Icon--CircleStopSolid::before {
  content: '';
}

.ms-Icon--CityNext::before {
  content: '';
}

.ms-Icon--CityNext2::before {
  content: '';
}

.ms-Icon--ClassNotebookLogo16::before {
  content: '';
}

.ms-Icon--ClassNotebookLogo32::before {
  content: '';
}

.ms-Icon--ClassNotebookLogoFill16::before {
  content: '';
}

.ms-Icon--ClassNotebookLogoFill32::before {
  content: '';
}

.ms-Icon--ClassNotebookLogoInverse::before {
  content: '';
}

.ms-Icon--ClassNotebookLogoInverse16::before {
  content: '';
}

.ms-Icon--ClassNotebookLogoInverse32::before {
  content: '';
}

.ms-Icon--ClassroomLogo::before {
  content: '';
}

.ms-Icon--Clear::before {
  content: '';
}

.ms-Icon--ClearFilter::before {
  content: '';
}

.ms-Icon--ClearFormatting::before {
  content: '';
}

.ms-Icon--ClearFormattingA::before {
  content: '';
}

.ms-Icon--ClearFormattingEraser::before {
  content: '';
}

.ms-Icon--ClearNight::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ClearSelection::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ClearSelection::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ClearSelectionMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ClearSelectionMirrored::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ClipboardList::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ClipboardList::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ClipboardListMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ClipboardListMirrored::before {
  content: '';
}

.ms-Icon--ClipboardSolid::before {
  content: '';
}

.ms-Icon--Clock::before {
  content: '';
}

.ms-Icon--CloneToDesktop::before {
  content: '';
}

.ms-Icon--ClosedCaption::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ClosePane::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ClosePane::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ClosePaneMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ClosePaneMirrored::before {
  content: '';
}

.ms-Icon--Cloud::before {
  content: '';
}

.ms-Icon--CloudAdd::before {
  content: '';
}

.ms-Icon--CloudDownload::before {
  content: '';
}

.ms-Icon--CloudImportExport::before {
  content: '';
}

.ms-Icon--CloudUpload::before {
  content: '';
}

.ms-Icon--CloudWeather::before {
  content: '';
}

.ms-Icon--Cloudy::before {
  content: '';
}

.ms-Icon--Cocktails::before {
  content: '';
}

.ms-Icon--Code::before {
  content: '';
}

.ms-Icon--CodeEdit::before {
  content: '';
}

.ms-Icon--Coffee::before {
  content: '';
}

.ms-Icon--CoffeeScript::before {
  content: '';
}

.ms-Icon--CollapseContent::before {
  content: '';
}

.ms-Icon--CollapseContentSingle::before {
  content: '';
}

.ms-Icon--CollapseMenu::before {
  content: '';
}

.ms-Icon--CollegeFootball::before {
  content: '';
}

.ms-Icon--CollegeHoops::before {
  content: '';
}

.ms-Icon--Color::before {
  content: '';
}

.ms-Icon--ColorSolid::before {
  content: '';
}

.ms-Icon--ColumnLeftTwoThirds::before {
  content: '';
}

.ms-Icon--ColumnLeftTwoThirdsEdit::before {
  content: '';
}

.ms-Icon--ColumnOptions::before {
  content: '';
}

.ms-Icon--ColumnRightTwoThirds::before {
  content: '';
}

.ms-Icon--ColumnRightTwoThirdsEdit::before {
  content: '';
}

.ms-Icon--ColumnVerticalSection::before {
  content: '';
}

.ms-Icon--ColumnVerticalSectionEdit::before {
  content: '';
}

.ms-Icon--Combine::before {
  content: '';
}

.ms-Icon--Combobox::before {
  content: '';
}

.ms-Icon--CommandPrompt::before {
  content: '';
}

.ms-Icon--Comment::before {
  content: '';
}

.ms-Icon--CommentActive::before {
  content: '';
}

.ms-Icon--CommentAdd::before {
  content: '';
}

.ms-Icon--CommentNext::before {
  content: '';
}

.ms-Icon--CommentPrevious::before {
  content: '';
}

.ms-Icon--CommentSolid::before {
  content: '';
}

.ms-Icon--CommentUrgent::before {
  content: '';
}

.ms-Icon--Commitments::before {
  content: '';
}

.ms-Icon--Communications::before {
  content: '';
}

[dir='ltr'] .ms-Icon--CompanyDirectory::before {
  content: '';
}

[dir='rtl'] .ms-Icon--CompanyDirectory::before {
  content: '';
}

[dir='ltr'] .ms-Icon--CompanyDirectoryMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--CompanyDirectoryMirrored::before {
  content: '';
}

.ms-Icon--Compare::before {
  content: '';
}

.ms-Icon--CompassNW::before {
  content: '';
}

.ms-Icon--Completed::before {
  content: '';
}

.ms-Icon--CompletedSolid::before {
  content: '';
}

.ms-Icon--ComplianceAudit::before {
  content: '';
}

.ms-Icon--ConfigurationSolid::before {
  content: '';
}

.ms-Icon--ConnectContacts::before {
  content: '';
}

.ms-Icon--ConnectVirtualMachine::before {
  content: '';
}

.ms-Icon--ConstructionCone::before {
  content: '';
}

.ms-Icon--ConstructionConeSolid::before {
  content: '';
}

.ms-Icon--Contact::before {
  content: '';
}

.ms-Icon--ContactCard::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ContactCardSettings::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ContactCardSettings::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ContactCardSettingsMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ContactCardSettingsMirrored::before {
  content: '';
}

.ms-Icon--ContactHeart::before {
  content: '';
}

.ms-Icon--ContactInfo::before {
  content: '';
}

.ms-Icon--ContactLink::before {
  content: '';
}

.ms-Icon--ContactList::before {
  content: '';
}

.ms-Icon--ContextMenu::before {
  content: '';
}

.ms-Icon--Contrast::before {
  content: '';
}

.ms-Icon--Copy::before {
  content: '';
}

.ms-Icon--Cotton::before {
  content: '';
}

.ms-Icon--Coupon::before {
  content: '';
}

.ms-Icon--CPlusPlus::before {
  content: '';
}

.ms-Icon--CPlusPlusLanguage::before {
  content: '';
}

.ms-Icon--CreateMailRule::before {
  content: '';
}

.ms-Icon--Cricket::before {
  content: '';
}

.ms-Icon--CRMCustomerInsightsApp::before {
  content: '';
}

.ms-Icon--CRMProcesses::before {
  content: '';
}

.ms-Icon--CRMReport::before {
  content: '';
}

.ms-Icon--CRMServices::before {
  content: '';
}

.ms-Icon--Crop::before {
  content: '';
}

.ms-Icon--Crown::before {
  content: '';
}

.ms-Icon--CrownSolid::before {
  content: '';
}

.ms-Icon--CSharp::before {
  content: '';
}

.ms-Icon--CSharpLanguage::before {
  content: '';
}

.ms-Icon--CSS::before {
  content: '';
}

.ms-Icon--CubeShape::before {
  content: '';
}

.ms-Icon--CustomizeToolbar::before {
  content: '';
}

[dir='ltr'] .ms-Icon--CustomList::before {
  content: '';
}

[dir='rtl'] .ms-Icon--CustomList::before {
  content: '';
}

[dir='ltr'] .ms-Icon--CustomListMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--CustomListMirrored::before {
  content: '';
}

.ms-Icon--Cut::before {
  content: '';
}

.ms-Icon--Cycling::before {
  content: '';
}

.ms-Icon--D365TalentHRCore::before {
  content: '';
}

.ms-Icon--D365TalentInsight::before {
  content: '';
}

.ms-Icon--D365TalentLearn::before {
  content: '';
}

.ms-Icon--DashboardAdd::before {
  content: '';
}

.ms-Icon--Database::before {
  content: '';
}

.ms-Icon--DatabaseSync::before {
  content: '';
}

.ms-Icon--DataConnectionLibrary::before {
  content: '';
}

.ms-Icon--Dataflows::before {
  content: '';
}

.ms-Icon--DataflowsLink::before {
  content: '';
}

.ms-Icon--DataManagementSettings::before {
  content: '';
}

.ms-Icon--DateTime2::before {
  content: '';
}

[dir='ltr'] .ms-Icon--DateTime::before {
  content: '';
}

[dir='rtl'] .ms-Icon--DateTime::before {
  content: '';
}

[dir='ltr'] .ms-Icon--DateTimeMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--DateTimeMirrored::before {
  content: '';
}

.ms-Icon--DeactivateOrders::before {
  content: '';
}

.ms-Icon--Decimals::before {
  content: '';
}

.ms-Icon--DecisionSolid::before {
  content: '';
}

.ms-Icon--DeclineCall::before {
  content: '';
}

[dir='ltr'] .ms-Icon--DecreaseIndentArrow::before {
  content: '';
}

[dir='rtl'] .ms-Icon--DecreaseIndentArrow::before {
  content: '';
}

[dir='ltr'] .ms-Icon--DecreaseIndentArrowMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--DecreaseIndentArrowMirrored::before {
  content: '';
}

.ms-Icon--DecreaseIndentLegacy::before {
  content: '';
}

[dir='ltr'] .ms-Icon--DecreaseIndentText::before {
  content: '';
}

[dir='rtl'] .ms-Icon--DecreaseIndentText::before {
  content: '';
}

[dir='ltr'] .ms-Icon--DecreaseIndentTextMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--DecreaseIndentTextMirrored::before {
  content: '';
}

.ms-Icon--DefaultRatio::before {
  content: '';
}

.ms-Icon--DefectSolid::before {
  content: '';
}

.ms-Icon--DefenderTVM::before {
  content: '';
}

.ms-Icon--Delete::before {
  content: '';
}

.ms-Icon--DeleteColumns::before {
  content: '';
}

[dir='ltr'] .ms-Icon--DeleteRows::before {
  content: '';
}

[dir='rtl'] .ms-Icon--DeleteRows::before {
  content: '';
}

[dir='ltr'] .ms-Icon--DeleteRowsMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--DeleteRowsMirrored::before {
  content: '';
}

.ms-Icon--DeleteTable::before {
  content: '';
}

.ms-Icon--DeliveryTruck::before {
  content: '';
}

.ms-Icon--DelveAnalytics::before {
  content: '';
}

.ms-Icon--DelveAnalyticsLogo::before {
  content: '';
}

.ms-Icon--DelveLogo::before {
  content: '';
}

.ms-Icon--DelveLogoFill::before {
  content: '';
}

.ms-Icon--DelveLogoInverse::before {
  content: '';
}

.ms-Icon--DependencyAdd::before {
  content: '';
}

.ms-Icon--DependencyRemove::before {
  content: '';
}

.ms-Icon--Deploy::before {
  content: '';
}

.ms-Icon--Descending::before {
  content: '';
}

.ms-Icon--Design::before {
  content: '';
}

.ms-Icon--DesktopScreenshot::before {
  content: '';
}

.ms-Icon--DeveloperTools::before {
  content: '';
}

.ms-Icon--Devices2::before {
  content: '';
}

.ms-Icon--Devices3::before {
  content: '';
}

.ms-Icon--Devices4::before {
  content: '';
}

.ms-Icon--Diagnostic::before {
  content: '';
}

.ms-Icon--DiagnosticDataBarTooltip::before {
  content: '';
}

.ms-Icon--Dialpad::before {
  content: '';
}

.ms-Icon--Diamond::before {
  content: '';
}

.ms-Icon--DiamondSolid::before {
  content: '';
}

.ms-Icon--Dictionary::before {
  content: '';
}

.ms-Icon--DictionaryRemove::before {
  content: '';
}

.ms-Icon--DietPlanNotebook::before {
  content: '';
}

.ms-Icon--DiffInline::before {
  content: '';
}

.ms-Icon--DiffSideBySide::before {
  content: '';
}

.ms-Icon--DisableUpdates::before {
  content: '';
}

.ms-Icon--DisconnectVirtualMachine::before {
  content: '';
}

.ms-Icon--Dislike::before {
  content: '';
}

.ms-Icon--DislikeSolid::before {
  content: '';
}

.ms-Icon--DistributeDown::before {
  content: '';
}

[dir='ltr'] .ms-Icon--DockLeft::before {
  content: '';
}

[dir='rtl'] .ms-Icon--DockLeft::before {
  content: '';
}

[dir='ltr'] .ms-Icon--DockLeftMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--DockLeftMirrored::before {
  content: '';
}

.ms-Icon--DockRight::before {
  content: '';
}

.ms-Icon--DocLibrary::before {
  content: '';
}

.ms-Icon--DocsLogoInverse::before {
  content: '';
}

.ms-Icon--Document::before {
  content: '';
}

.ms-Icon--DocumentApproval::before {
  content: '';
}

.ms-Icon--Documentation::before {
  content: '';
}

.ms-Icon--DocumentManagement::before {
  content: '';
}

.ms-Icon--DocumentReply::before {
  content: '';
}

.ms-Icon--DocumentSearch::before {
  content: '';
}

.ms-Icon--DocumentSet::before {
  content: '';
}

.ms-Icon--DOM::before {
  content: '';
}

.ms-Icon--DonutChart::before {
  content: '';
}

.ms-Icon--Door::before {
  content: '';
}

.ms-Icon--DoubleBookmark::before {
  content: '';
}

.ms-Icon--DoubleChevronDown::before {
  content: '';
}

.ms-Icon--DoubleChevronDown12::before {
  content: '';
}

.ms-Icon--DoubleChevronDown8::before {
  content: '';
}

.ms-Icon--DoubleChevronLeft::before {
  content: '';
}

.ms-Icon--DoubleChevronLeft12::before {
  content: '';
}

.ms-Icon--DoubleChevronLeft8::before {
  content: '';
}

[dir='ltr'] .ms-Icon--DoubleChevronLeftMed::before {
  content: '';
}

[dir='rtl'] .ms-Icon--DoubleChevronLeftMed::before {
  content: '';
}

[dir='ltr'] .ms-Icon--DoubleChevronLeftMedMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--DoubleChevronLeftMedMirrored::before {
  content: '';
}

.ms-Icon--DoubleChevronRight::before {
  content: '';
}

.ms-Icon--DoubleChevronRight12::before {
  content: '';
}

.ms-Icon--DoubleChevronRight8::before {
  content: '';
}

.ms-Icon--DoubleChevronUp::before {
  content: '';
}

.ms-Icon--DoubleChevronUp12::before {
  content: '';
}

.ms-Icon--DoubleChevronUp8::before {
  content: '';
}

.ms-Icon--DoubleColumn::before {
  content: '';
}

.ms-Icon--DoubleColumnEdit::before {
  content: '';
}

.ms-Icon--DoubleDownArrow::before {
  content: '';
}

.ms-Icon--Down::before {
  content: '';
}

.ms-Icon--Download::before {
  content: '';
}

.ms-Icon--DownloadDocument::before {
  content: '';
}

.ms-Icon--DragObject::before {
  content: '';
}

.ms-Icon--DrillDown::before {
  content: '';
}

.ms-Icon--DrillDownSolid::before {
  content: '';
}

.ms-Icon--DrillExpand::before {
  content: '';
}

.ms-Icon--DrillShow::before {
  content: '';
}

.ms-Icon--DrillThrough::before {
  content: '';
}

.ms-Icon--DRM::before {
  content: '';
}

.ms-Icon--Drop::before {
  content: '';
}

.ms-Icon--Dropdown::before {
  content: '';
}

.ms-Icon--DropShapeSolid::before {
  content: '';
}

.ms-Icon--DuplicateRow::before {
  content: '';
}

.ms-Icon--Duststorm::before {
  content: '';
}

.ms-Icon--Dynamics365Logo::before {
  content: '';
}

.ms-Icon--DynamicSMBLogo::before {
  content: '';
}

.ms-Icon--EaseOfAccess::before {
  content: '';
}

.ms-Icon--EatDrink::before {
  content: '';
}

.ms-Icon--EdgeLogo::before {
  content: '';
}

.ms-Icon--eDiscovery::before {
  content: '';
}

.ms-Icon--EditContact::before {
  content: '';
}

.ms-Icon--EditCreate::before {
  content: '';
}

.ms-Icon--EditMail::before {
  content: '';
}

[dir='ltr'] .ms-Icon--Edit::before {
  content: '';
}

[dir='rtl'] .ms-Icon--Edit::before {
  content: '';
}

[dir='ltr'] .ms-Icon--EditMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--EditMirrored::before {
  content: '';
}

.ms-Icon--EditNote::before {
  content: '';
}

.ms-Icon--EditPhoto::before {
  content: '';
}

[dir='ltr'] .ms-Icon--EditSolid12::before {
  content: '';
}

[dir='rtl'] .ms-Icon--EditSolid12::before {
  content: '';
}

[dir='ltr'] .ms-Icon--EditSolidMirrored12::before {
  content: '';
}

[dir='rtl'] .ms-Icon--EditSolidMirrored12::before {
  content: '';
}

.ms-Icon--EditStyle::before {
  content: '';
}

.ms-Icon--Education::before {
  content: '';
}

.ms-Icon--Ellipse::before {
  content: '';
}

.ms-Icon--Embed::before {
  content: '';
}

.ms-Icon--EMI::before {
  content: '';
}

.ms-Icon--Emoji::before {
  content: '';
}

.ms-Icon--Emoji2::before {
  content: '';
}

.ms-Icon--EmojiDisappointed::before {
  content: '';
}

.ms-Icon--EmojiNeutral::before {
  content: '';
}

.ms-Icon--EmojiTabSymbols::before {
  content: '';
}

.ms-Icon--EmptyRecycleBin::before {
  content: '';
}

.ms-Icon--Encryption::before {
  content: '';
}

.ms-Icon--EngineeringGroup::before {
  content: '';
}

.ms-Icon--EntitlementPolicy::before {
  content: '';
}

.ms-Icon--EntitlementRedemption::before {
  content: '';
}

.ms-Icon--EntryDecline::before {
  content: '';
}

.ms-Icon--EntryView::before {
  content: '';
}

.ms-Icon--Equalizer::before {
  content: '';
}

.ms-Icon--EraseTool::before {
  content: '';
}

.ms-Icon--Error::before {
  content: '';
}

.ms-Icon--ErrorBadge::before {
  content: '';
}

.ms-Icon--Event::before {
  content: '';
}

.ms-Icon--Event12::before {
  content: '';
}

.ms-Icon--EventAccepted::before {
  content: '';
}

.ms-Icon--EventDate::before {
  content: '';
}

.ms-Icon--EventDateMissed12::before {
  content: '';
}

.ms-Icon--EventDeclined::before {
  content: '';
}

.ms-Icon--EventInfo::before {
  content: '';
}

[dir='ltr'] .ms-Icon--EventTentative::before {
  content: '';
}

[dir='rtl'] .ms-Icon--EventTentative::before {
  content: '';
}

[dir='ltr'] .ms-Icon--EventTentativeMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--EventTentativeMirrored::before {
  content: '';
}

.ms-Icon--EventToDoLogo::before {
  content: '';
}

.ms-Icon--ExcelDocument::before {
  content: '';
}

.ms-Icon--ExcelLogo::before {
  content: '';
}

.ms-Icon--ExcelLogo16::before {
  content: '';
}

.ms-Icon--ExcelLogoFill::before {
  content: '';
}

.ms-Icon--ExcelLogoFill16::before {
  content: '';
}

.ms-Icon--ExcelLogoInverse::before {
  content: '';
}

.ms-Icon--ExcelLogoInverse16::before {
  content: '';
}

.ms-Icon--ExchangeLogo::before {
  content: '';
}

.ms-Icon--ExchangeLogoFill::before {
  content: '';
}

.ms-Icon--ExchangeLogoInverse::before {
  content: '';
}

.ms-Icon--ExerciseTracker::before {
  content: '';
}

.ms-Icon--ExpandMenu::before {
  content: '';
}

.ms-Icon--ExploreContent::before {
  content: '';
}

.ms-Icon--ExploreContentSingle::before {
  content: '';
}

.ms-Icon--ExploreData::before {
  content: '';
}

[dir='ltr'] .ms-Icon--Export::before {
  content: '';
}

[dir='rtl'] .ms-Icon--Export::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ExportMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ExportMirrored::before {
  content: '';
}

.ms-Icon--ExternalBuild::before {
  content: '';
}

.ms-Icon--ExternalTFVC::before {
  content: '';
}

.ms-Icon--ExternalXAML::before {
  content: '';
}

.ms-Icon--Eyedropper::before {
  content: '';
}

.ms-Icon--EyeShadow::before {
  content: '';
}

.ms-Icon--F12DevTools::before {
  content: '';
}

.ms-Icon--FabricAssetLibrary::before {
  content: '';
}

.ms-Icon--FabricDataConnectionLibrary::before {
  content: '';
}

.ms-Icon--FabricDocLibrary::before {
  content: '';
}

.ms-Icon--FabricFolder::before {
  content: '';
}

.ms-Icon--FabricFolderConfirm::before {
  content: '';
}

.ms-Icon--FabricFolderFill::before {
  content: '';
}

.ms-Icon--FabricFolderSearch::before {
  content: '';
}

[dir='ltr'] .ms-Icon--FabricFormLibrary::before {
  content: '';
}

[dir='rtl'] .ms-Icon--FabricFormLibrary::before {
  content: '';
}

[dir='ltr'] .ms-Icon--FabricFormLibraryMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--FabricFormLibraryMirrored::before {
  content: '';
}

.ms-Icon--FabricMovetoFolder::before {
  content: '';
}

.ms-Icon--FabricNetworkFolder::before {
  content: '';
}

.ms-Icon--FabricNewFolder::before {
  content: '';
}

.ms-Icon--FabricOpenFolderHorizontal::before {
  content: '';
}

.ms-Icon--FabricPictureLibrary::before {
  content: '';
}

.ms-Icon--FabricPublicFolder::before {
  content: '';
}

[dir='ltr'] .ms-Icon--FabricReportLibrary::before {
  content: '';
}

[dir='rtl'] .ms-Icon--FabricReportLibrary::before {
  content: '';
}

[dir='ltr'] .ms-Icon--FabricReportLibraryMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--FabricReportLibraryMirrored::before {
  content: '';
}

.ms-Icon--FabricSyncFolder::before {
  content: '';
}

.ms-Icon--FabricTextHighlight::before {
  content: '';
}

.ms-Icon--FabricTextHighlightComposite::before {
  content: '';
}

.ms-Icon--FabricUnsyncFolder::before {
  content: '';
}

.ms-Icon--FabricUserFolder::before {
  content: '';
}

.ms-Icon--Family::before {
  content: '';
}

.ms-Icon--FangBody::before {
  content: '';
}

.ms-Icon--FastForward::before {
  content: '';
}

.ms-Icon--FastMode::before {
  content: '';
}

.ms-Icon--Favicon::before {
  content: '';
}

.ms-Icon--FavoriteList::before {
  content: '';
}

.ms-Icon--FavoriteStar::before {
  content: '';
}

.ms-Icon--FavoriteStarFill::before {
  content: '';
}

.ms-Icon--Fax::before {
  content: '';
}

.ms-Icon--Feedback::before {
  content: '';
}

[dir='ltr'] .ms-Icon--FeedbackRequestSolid::before {
  content: '';
}

[dir='rtl'] .ms-Icon--FeedbackRequestSolid::before {
  content: '';
}

[dir='ltr'] .ms-Icon--FeedbackRequestMirroredSolid::before {
  content: '';
}

[dir='rtl'] .ms-Icon--FeedbackRequestMirroredSolid::before {
  content: '';
}

.ms-Icon--FeedbackResponseSolid::before {
  content: '';
}

.ms-Icon--Ferry::before {
  content: '';
}

.ms-Icon--FerrySolid::before {
  content: '';
}

.ms-Icon--FieldChanged::before {
  content: '';
}

.ms-Icon--FieldEmpty::before {
  content: '';
}

.ms-Icon--FieldFilled::before {
  content: '';
}

.ms-Icon--FieldNotChanged::before {
  content: '';
}

.ms-Icon--FieldReadOnly::before {
  content: '';
}

.ms-Icon--FieldRequired::before {
  content: '';
}

.ms-Icon--FileASPX::before {
  content: '';
}

.ms-Icon--FileBug::before {
  content: '';
}

.ms-Icon--FileCode::before {
  content: '';
}

.ms-Icon--FileComment::before {
  content: '';
}

.ms-Icon--FileCSS::before {
  content: '';
}

.ms-Icon--FileHTML::before {
  content: '';
}

.ms-Icon--FileImage::before {
  content: '';
}

.ms-Icon--FileJAVA::before {
  content: '';
}

.ms-Icon--FileLess::before {
  content: '';
}

.ms-Icon--FilePDB::before {
  content: '';
}

.ms-Icon--FileRequest::before {
  content: '';
}

.ms-Icon--FileSass::before {
  content: '';
}

.ms-Icon--FileSQL::before {
  content: '';
}

.ms-Icon--FileSymlink::before {
  content: '';
}

.ms-Icon--FileTemplate::before {
  content: '';
}

.ms-Icon--FileTypeSolution::before {
  content: '';
}

.ms-Icon--FileYML::before {
  content: '';
}

.ms-Icon--Filter::before {
  content: '';
}

.ms-Icon--Filters::before {
  content: '';
}

.ms-Icon--FilterSettings::before {
  content: '';
}

.ms-Icon--FilterSolid::before {
  content: '';
}

.ms-Icon--FiltersSolid::before {
  content: '';
}

.ms-Icon--Financial::before {
  content: '';
}

[dir='ltr'] .ms-Icon--FinancialSolid::before {
  content: '';
}

[dir='rtl'] .ms-Icon--FinancialSolid::before {
  content: '';
}

[dir='ltr'] .ms-Icon--FinancialMirroredSolid::before {
  content: '';
}

[dir='rtl'] .ms-Icon--FinancialMirroredSolid::before {
  content: '';
}

.ms-Icon--Fingerprint::before {
  content: '';
}

.ms-Icon--FitPage::before {
  content: '';
}

.ms-Icon--FitWidth::before {
  content: '';
}

.ms-Icon--FiveTileGrid::before {
  content: '';
}

.ms-Icon--Flag::before {
  content: '';
}

.ms-Icon--FlameSolid::before {
  content: '';
}

.ms-Icon--Flashlight::before {
  content: '';
}

.ms-Icon--FlickDown::before {
  content: '';
}

.ms-Icon--FlickLeft::before {
  content: '';
}

.ms-Icon--FlickRight::before {
  content: '';
}

.ms-Icon--FlickUp::before {
  content: '';
}

.ms-Icon--Flow::before {
  content: '';
}

.ms-Icon--FlowChart::before {
  content: '';
}

.ms-Icon--Flower::before {
  content: '';
}

.ms-Icon--FocalPoint::before {
  content: '';
}

.ms-Icon--Focus::before {
  content: '';
}

.ms-Icon--Fog::before {
  content: '';
}

.ms-Icon--Folder::before {
  content: '';
}

.ms-Icon--FolderFill::before {
  content: '';
}

.ms-Icon--FolderHorizontal::before {
  content: '';
}

[dir='ltr'] .ms-Icon--FolderList::before {
  content: '';
}

[dir='rtl'] .ms-Icon--FolderList::before {
  content: '';
}

[dir='ltr'] .ms-Icon--FolderListMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--FolderListMirrored::before {
  content: '';
}

.ms-Icon--FolderOpen::before {
  content: '';
}

.ms-Icon--FolderQuery::before {
  content: '';
}

.ms-Icon--FolderSearch::before {
  content: '';
}

.ms-Icon--FollowUser::before {
  content: '';
}

.ms-Icon--Font::before {
  content: '';
}

.ms-Icon--FontColor::before {
  content: '';
}

.ms-Icon--FontColorA::before {
  content: '';
}

.ms-Icon--FontColorSwatch::before {
  content: '';
}

.ms-Icon--FontDecrease::before {
  content: '';
}

.ms-Icon--FontIncrease::before {
  content: '';
}

.ms-Icon--FontSize::before {
  content: '';
}

.ms-Icon--Footer::before {
  content: '';
}

[dir='ltr'] .ms-Icon--FormLibrary::before {
  content: '';
}

[dir='rtl'] .ms-Icon--FormLibrary::before {
  content: '';
}

[dir='ltr'] .ms-Icon--FormLibraryMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--FormLibraryMirrored::before {
  content: '';
}

.ms-Icon--Forum::before {
  content: '';
}

.ms-Icon--Forward::before {
  content: '';
}

.ms-Icon--ForwardEvent::before {
  content: '';
}

.ms-Icon--Freezing::before {
  content: '';
}

.ms-Icon--Frigid::before {
  content: '';
}

.ms-Icon--FrontCamera::before {
  content: '';
}

.ms-Icon--FSharp::before {
  content: '';
}

.ms-Icon--FSharpLanguage::before {
  content: '';
}

.ms-Icon--FullCircleMask::before {
  content: '';
}

.ms-Icon--FullHistory::before {
  content: '';
}

.ms-Icon--FullScreen::before {
  content: '';
}

.ms-Icon--FullWidth::before {
  content: '';
}

.ms-Icon--FullWidthEdit::before {
  content: '';
}

.ms-Icon--FunctionalManagerDashboard::before {
  content: '';
}

.ms-Icon--FunnelChart::before {
  content: '';
}

.ms-Icon--GallatinLogo::before {
  content: '';
}

.ms-Icon--Game::before {
  content: '';
}

.ms-Icon--Generate::before {
  content: '';
}

.ms-Icon--GenericScan::before {
  content: '';
}

.ms-Icon--GenericScanFilled::before {
  content: '';
}

.ms-Icon--GIF::before {
  content: '';
}

.ms-Icon--Giftbox::before {
  content: '';
}

.ms-Icon--GiftboxOpen::before {
  content: '';
}

.ms-Icon--GiftBoxSolid::before {
  content: '';
}

.ms-Icon--GiftCard::before {
  content: '';
}

.ms-Icon--GitGraph::before {
  content: '';
}

.ms-Icon--Glasses::before {
  content: '';
}

.ms-Icon--Glimmer::before {
  content: '';
}

.ms-Icon--GlobalNavButton::before {
  content: '';
}

.ms-Icon--GlobalNavButtonActive::before {
  content: '';
}

.ms-Icon--Globe::before {
  content: '';
}

.ms-Icon--Globe2::before {
  content: '';
}

.ms-Icon--GlobeFavorite::before {
  content: '';
}

.ms-Icon--Golf::before {
  content: '';
}

[dir='ltr'] .ms-Icon--Go::before {
  content: '';
}

[dir='rtl'] .ms-Icon--Go::before {
  content: '';
}

[dir='ltr'] .ms-Icon--GoMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--GoMirrored::before {
  content: '';
}

.ms-Icon--GoToDashboard::before {
  content: '';
}

.ms-Icon--GotoToday::before {
  content: '';
}

.ms-Icon--GreetingCard::before {
  content: '';
}

.ms-Icon--GridViewLarge::before {
  content: '';
}

.ms-Icon--GridViewMedium::before {
  content: '';
}

.ms-Icon--GridViewSmall::before {
  content: '';
}

.ms-Icon--GripperBarHorizontal::before {
  content: '';
}

.ms-Icon--GripperBarVertical::before {
  content: '';
}

.ms-Icon--GripperDotsVertical::before {
  content: '';
}

.ms-Icon--GripperTool::before {
  content: '';
}

.ms-Icon--Group::before {
  content: '';
}

.ms-Icon--GroupedAscending::before {
  content: '';
}

.ms-Icon--GroupedDescending::before {
  content: '';
}

.ms-Icon--GroupedList::before {
  content: '';
}

.ms-Icon--GroupList::before {
  content: '';
}

.ms-Icon--GroupObject::before {
  content: '';
}

.ms-Icon--GUID::before {
  content: '';
}

.ms-Icon--Guitar::before {
  content: '';
}

.ms-Icon--HailDay::before {
  content: '';
}

.ms-Icon--HailNight::before {
  content: '';
}

.ms-Icon--HalfAlpha::before {
  content: '';
}

.ms-Icon--HalfCircle::before {
  content: '';
}

.ms-Icon--HandsFree::before {
  content: '';
}

.ms-Icon--Handwriting::before {
  content: '';
}

.ms-Icon--HardDrive::before {
  content: '';
}

.ms-Icon--HardDriveGroup::before {
  content: '';
}

.ms-Icon--HardDriveLock::before {
  content: '';
}

.ms-Icon--HardDriveUnlock::before {
  content: '';
}

.ms-Icon--Header::before {
  content: '';
}

.ms-Icon--Header1::before {
  content: '';
}

.ms-Icon--Header2::before {
  content: '';
}

.ms-Icon--Header3::before {
  content: '';
}

.ms-Icon--Header4::before {
  content: '';
}

.ms-Icon--Headset::before {
  content: '';
}

.ms-Icon--HeadsetSolid::before {
  content: '';
}

.ms-Icon--Health::before {
  content: '';
}

.ms-Icon--HealthSolid::before {
  content: '';
}

.ms-Icon--Heart::before {
  content: '';
}

.ms-Icon--HeartBroken::before {
  content: '';
}

.ms-Icon--HeartFill::before {
  content: '';
}

[dir='ltr'] .ms-Icon--Help::before {
  content: '';
}

[dir='rtl'] .ms-Icon--Help::before {
  content: '';
}

[dir='ltr'] .ms-Icon--HelpMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--HelpMirrored::before {
  content: '';
}

.ms-Icon--Hexagon::before {
  content: '';
}

.ms-Icon--Hide::before {
  content: '';
}

.ms-Icon--Hide2::before {
  content: '';
}

.ms-Icon--Hide3::before {
  content: '';
}

.ms-Icon--Highlight::before {
  content: '';
}

.ms-Icon--HighlightMappedShapes::before {
  content: '';
}

.ms-Icon--HintText::before {
  content: '';
}

.ms-Icon--HistoricalWeather::before {
  content: '';
}

.ms-Icon--History::before {
  content: '';
}

.ms-Icon--Home::before {
  content: '';
}

.ms-Icon--HomeGroup::before {
  content: '';
}

.ms-Icon--HomeSolid::before {
  content: '';
}

.ms-Icon--HomeVerify::before {
  content: '';
}

.ms-Icon--HorizontalDistributeCenter::before {
  content: '';
}

.ms-Icon--HorizontalTabKey::before {
  content: '';
}

.ms-Icon--Hospital::before {
  content: '';
}

.ms-Icon--Hotel::before {
  content: '';
}

.ms-Icon--HourGlass::before {
  content: '';
}

.ms-Icon--IconSetsFlag::before {
  content: '';
}

.ms-Icon--IDBadge::before {
  content: '';
}

.ms-Icon--IgnoreConversation::before {
  content: '';
}

.ms-Icon--ImageCrosshair::before {
  content: '';
}

.ms-Icon--ImageDiff::before {
  content: '';
}

.ms-Icon--ImagePixel::before {
  content: '';
}

.ms-Icon--ImageSearch::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ImportAll::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ImportAllMirrored::before {
  content: '';
}

.ms-Icon--Important::before {
  content: '';
}

[dir='ltr'] .ms-Icon--Import::before {
  content: '';
}

[dir='rtl'] .ms-Icon--Import::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ImportMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ImportMirrored::before {
  content: '';
}

.ms-Icon--Inbox::before {
  content: '';
}

.ms-Icon--InboxCheck::before {
  content: '';
}

.ms-Icon--IncidentTriangle::before {
  content: '';
}

.ms-Icon--IncomingCall::before {
  content: '';
}

[dir='ltr'] .ms-Icon--IncreaseIndentArrow::before {
  content: '';
}

[dir='rtl'] .ms-Icon--IncreaseIndentArrow::before {
  content: '';
}

[dir='ltr'] .ms-Icon--IncreaseIndentArrowMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--IncreaseIndentArrowMirrored::before {
  content: '';
}

.ms-Icon--IncreaseIndentLegacy::before {
  content: '';
}

[dir='ltr'] .ms-Icon--IncreaseIndentText::before {
  content: '';
}

[dir='rtl'] .ms-Icon--IncreaseIndentText::before {
  content: '';
}

[dir='ltr'] .ms-Icon--IncreaseIndentTextMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--IncreaseIndentTextMirrored::before {
  content: '';
}

.ms-Icon--Info::before {
  content: '';
}

.ms-Icon--Info2::before {
  content: '';
}

.ms-Icon--InformationBarriers::before {
  content: '';
}

.ms-Icon--InfoSolid::before {
  content: '';
}

.ms-Icon--InkingTool::before {
  content: '';
}

.ms-Icon--Insert::before {
  content: '';
}

.ms-Icon--InsertColumnsLeft::before {
  content: '';
}

.ms-Icon--InsertColumnsRight::before {
  content: '';
}

.ms-Icon--InsertRowsAbove::before {
  content: '';
}

.ms-Icon--InsertRowsBelow::before {
  content: '';
}

.ms-Icon--InsertSignatureLine::before {
  content: '';
}

.ms-Icon--InsertTextBox::before {
  content: '';
}

.ms-Icon--Installation::before {
  content: '';
}

.ms-Icon--InstallToDrive::before {
  content: '';
}

.ms-Icon--InternalInvestigation::before {
  content: '';
}

.ms-Icon--InternetSharing::before {
  content: '';
}

[dir='ltr'] .ms-Icon--IRMForward::before {
  content: '';
}

[dir='rtl'] .ms-Icon--IRMForward::before {
  content: '';
}

[dir='ltr'] .ms-Icon--IRMForwardMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--IRMForwardMirrored::before {
  content: '';
}

[dir='ltr'] .ms-Icon--IRMReply::before {
  content: '';
}

[dir='rtl'] .ms-Icon--IRMReply::before {
  content: '';
}

[dir='ltr'] .ms-Icon--IRMReplyMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--IRMReplyMirrored::before {
  content: '';
}

.ms-Icon--IssueSolid::before {
  content: '';
}

[dir='ltr'] .ms-Icon--IssueTracking::before {
  content: '';
}

[dir='rtl'] .ms-Icon--IssueTracking::before {
  content: '';
}

[dir='ltr'] .ms-Icon--IssueTrackingMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--IssueTrackingMirrored::before {
  content: '';
}

.ms-Icon--Italic::before {
  content: '';
}

.ms-Icon--JavaScriptLanguage::before {
  content: '';
}

.ms-Icon--JoinOnlineMeeting::before {
  content: '';
}

.ms-Icon--JS::before {
  content: '';
}

.ms-Icon--KaizalaLogo::before {
  content: '';
}

.ms-Icon--KeyboardClassic::before {
  content: '';
}

.ms-Icon--KnowledgeArticle::before {
  content: '';
}

.ms-Icon--Label::before {
  content: '';
}

.ms-Icon--LadybugSolid::before {
  content: '';
}

.ms-Icon--Lamp::before {
  content: '';
}

.ms-Icon--LandscapeOrientation::before {
  content: '';
}

.ms-Icon--LaptopSecure::before {
  content: '';
}

.ms-Icon--LaptopSelected::before {
  content: '';
}

.ms-Icon--LargeGrid::before {
  content: '';
}

.ms-Icon--Leave::before {
  content: '';
}

.ms-Icon--Library::before {
  content: '';
}

.ms-Icon--Lifesaver::before {
  content: '';
}

.ms-Icon--LifesaverLock::before {
  content: '';
}

.ms-Icon--Light::before {
  content: '';
}

.ms-Icon--Lightbulb::before {
  content: '';
}

.ms-Icon--LightningBolt::before {
  content: '';
}

.ms-Icon--LightWeight::before {
  content: '';
}

.ms-Icon--Like::before {
  content: '';
}

.ms-Icon--LikeSolid::before {
  content: '';
}

.ms-Icon--Line::before {
  content: '';
}

.ms-Icon--LineChart::before {
  content: '';
}

.ms-Icon--LineSpacing::before {
  content: '';
}

.ms-Icon--LineStyle::before {
  content: '';
}

.ms-Icon--LineThickness::before {
  content: '';
}

.ms-Icon--Link::before {
  content: '';
}

.ms-Icon--Link12::before {
  content: '';
}

.ms-Icon--LinkedDatabase::before {
  content: '';
}

.ms-Icon--LinkedInLogo::before {
  content: '';
}

[dir='ltr'] .ms-Icon--List::before {
  content: '';
}

[dir='rtl'] .ms-Icon--List::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ListMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ListMirrored::before {
  content: '';
}

.ms-Icon--LocaleLanguage::before {
  content: '';
}

.ms-Icon--Location::before {
  content: '';
}

.ms-Icon--LocationCircle::before {
  content: '';
}

.ms-Icon--LocationDot::before {
  content: '';
}

.ms-Icon--LocationFill::before {
  content: '';
}

.ms-Icon--LocationOutline::before {
  content: '';
}

.ms-Icon--Lock::before {
  content: '';
}

.ms-Icon--Lock12::before {
  content: '';
}

.ms-Icon--LockSolid::before {
  content: '';
}

.ms-Icon--LogRemove::before {
  content: '';
}

.ms-Icon--LookupEntities::before {
  content: '';
}

.ms-Icon--LowerBrightness::before {
  content: '';
}

.ms-Icon--LyncLogo::before {
  content: '';
}

.ms-Icon--M365InvoicingLogo::before {
  content: '';
}

.ms-Icon--Mail::before {
  content: '';
}

.ms-Icon--MailAlert::before {
  content: '';
}

.ms-Icon--MailAttached::before {
  content: '';
}

.ms-Icon--MailCheck::before {
  content: '';
}

.ms-Icon--MailFill::before {
  content: '';
}

[dir='ltr'] .ms-Icon--MailForward::before {
  content: '';
}

[dir='rtl'] .ms-Icon--MailForward::before {
  content: '';
}

[dir='ltr'] .ms-Icon--MailForwardMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--MailForwardMirrored::before {
  content: '';
}

.ms-Icon--MailLowImportance::before {
  content: '';
}

.ms-Icon--MailOptions::before {
  content: '';
}

.ms-Icon--MailPause::before {
  content: '';
}

.ms-Icon--MailReminder::before {
  content: '';
}

.ms-Icon--MailRepeat::before {
  content: '';
}

[dir='ltr'] .ms-Icon--MailReplyAll::before {
  content: '';
}

[dir='rtl'] .ms-Icon--MailReplyAll::before {
  content: '';
}

[dir='ltr'] .ms-Icon--MailReplyAllMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--MailReplyAllMirrored::before {
  content: '';
}

[dir='ltr'] .ms-Icon--MailReply::before {
  content: '';
}

[dir='rtl'] .ms-Icon--MailReply::before {
  content: '';
}

[dir='ltr'] .ms-Icon--MailReplyMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--MailReplyMirrored::before {
  content: '';
}

.ms-Icon--MailSchedule::before {
  content: '';
}

.ms-Icon--MailSolid::before {
  content: '';
}

[dir='ltr'] .ms-Icon--MailTentative::before {
  content: '';
}

[dir='rtl'] .ms-Icon--MailTentative::before {
  content: '';
}

[dir='ltr'] .ms-Icon--MailTentativeMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--MailTentativeMirrored::before {
  content: '';
}

.ms-Icon--MailUndelivered::before {
  content: '';
}

.ms-Icon--ManagerSelfService::before {
  content: '';
}

.ms-Icon--Manufacturing::before {
  content: '';
}

.ms-Icon--MapDirections::before {
  content: '';
}

.ms-Icon--MapLayers::before {
  content: '';
}

.ms-Icon--MapPin::before {
  content: '';
}

.ms-Icon--MapPinSolid::before {
  content: '';
}

.ms-Icon--MarkAsProtected::before {
  content: '';
}

.ms-Icon--MarkDownLanguage::before {
  content: '';
}

.ms-Icon--Market::before {
  content: '';
}

.ms-Icon--MarketDown::before {
  content: '';
}

.ms-Icon--MasterDatabase::before {
  content: '';
}

.ms-Icon--MaximumValue::before {
  content: '';
}

.ms-Icon--Medal::before {
  content: '';
}

.ms-Icon--MedalSolid::before {
  content: '';
}

.ms-Icon--Media::before {
  content: '';
}

.ms-Icon--MediaAdd::before {
  content: '';
}

.ms-Icon--Medical::before {
  content: '';
}

.ms-Icon--Megaphone::before {
  content: '';
}

.ms-Icon--MegaphoneSolid::before {
  content: '';
}

.ms-Icon--Memo::before {
  content: '';
}

.ms-Icon--Merge::before {
  content: '';
}

.ms-Icon--MergeDuplicate::before {
  content: '';
}

.ms-Icon--Message::before {
  content: '';
}

.ms-Icon--MessageFill::before {
  content: '';
}

.ms-Icon--MicOff::before {
  content: '';
}

.ms-Icon--MicOff2::before {
  content: '';
}

.ms-Icon--Microphone::before {
  content: '';
}

.ms-Icon--MicrosoftFlowLogo::before {
  content: '';
}

.ms-Icon--MicrosoftStaffhubLogo::before {
  content: '';
}

.ms-Icon--MicrosoftTranslatorLogo::before {
  content: '';
}

.ms-Icon--MicrosoftTranslatorLogoBlue::before {
  content: '';
}

.ms-Icon--MicrosoftTranslatorLogoGreen::before {
  content: '';
}

[dir='ltr'] .ms-Icon--MiniContract::before {
  content: '';
}

[dir='rtl'] .ms-Icon--MiniContract::before {
  content: '';
}

[dir='ltr'] .ms-Icon--MiniContractMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--MiniContractMirrored::before {
  content: '';
}

[dir='ltr'] .ms-Icon--MiniExpand::before {
  content: '';
}

[dir='rtl'] .ms-Icon--MiniExpand::before {
  content: '';
}

[dir='ltr'] .ms-Icon--MiniExpandMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--MiniExpandMirrored::before {
  content: '';
}

.ms-Icon--MiniLink::before {
  content: '';
}

.ms-Icon--MinimumValue::before {
  content: '';
}

.ms-Icon--MobileReport::before {
  content: '';
}

.ms-Icon--MobileSelected::before {
  content: '';
}

.ms-Icon--ModelingView::before {
  content: '';
}

.ms-Icon--Money::before {
  content: '';
}

.ms-Icon--More::before {
  content: '';
}

.ms-Icon--MoreSports::before {
  content: '';
}

.ms-Icon--MoreVertical::before {
  content: '';
}

.ms-Icon--MountainClimbing::before {
  content: '';
}

.ms-Icon--Move::before {
  content: '';
}

.ms-Icon--Movers::before {
  content: '';
}

.ms-Icon--MoveToFolder::before {
  content: '';
}

.ms-Icon--MSNLogo::before {
  content: '';
}

.ms-Icon--MSNVideos::before {
  content: '';
}

.ms-Icon--MSNVideosSolid::before {
  content: '';
}

[dir='ltr'] .ms-Icon--MultiSelect::before {
  content: '';
}

[dir='rtl'] .ms-Icon--MultiSelect::before {
  content: '';
}

[dir='ltr'] .ms-Icon--MultiSelectMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--MultiSelectMirrored::before {
  content: '';
}

.ms-Icon--MusicInCollection::before {
  content: '';
}

.ms-Icon--MusicInCollectionFill::before {
  content: '';
}

.ms-Icon--MusicNote::before {
  content: '';
}

.ms-Icon--MuteChat::before {
  content: '';
}

.ms-Icon--MyMoviesTV::before {
  content: '';
}

.ms-Icon--Nav2DMapView::before {
  content: '';
}

[dir='ltr'] .ms-Icon--NavigateBack::before {
  content: '';
}

[dir='rtl'] .ms-Icon--NavigateBack::before {
  content: '';
}

[dir='ltr'] .ms-Icon--NavigateBackMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--NavigateBackMirrored::before {
  content: '';
}

.ms-Icon--NavigateExternalInline::before {
  content: '';
}

[dir='ltr'] .ms-Icon--NavigateForward::before {
  content: '';
}

[dir='rtl'] .ms-Icon--NavigateForward::before {
  content: '';
}

[dir='ltr'] .ms-Icon--NavigateForwardMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--NavigateForwardMirrored::before {
  content: '';
}

.ms-Icon--NavigationFlipper::before {
  content: '';
}

.ms-Icon--NetworkTower::before {
  content: '';
}

.ms-Icon--NewAnalyticsQuery::before {
  content: '';
}

.ms-Icon--NewFolder::before {
  content: '';
}

.ms-Icon--NewMail::before {
  content: '';
}

.ms-Icon--News::before {
  content: '';
}

.ms-Icon--NewsSearch::before {
  content: '';
}

.ms-Icon--NewTeamProject::before {
  content: '';
}

.ms-Icon--Next::before {
  content: '';
}

.ms-Icon--NormalWeight::before {
  content: '';
}

.ms-Icon--NoteForward::before {
  content: '';
}

.ms-Icon--NotePinned::before {
  content: '';
}

.ms-Icon--NoteReply::before {
  content: '';
}

.ms-Icon--NotExecuted::before {
  content: '';
}

.ms-Icon--NotImpactedSolid::before {
  content: '';
}

.ms-Icon--NugetLogo::before {
  content: '';
}

.ms-Icon--NumberedList::before {
  content: '';
}

[dir='ltr'] .ms-Icon--NumberedListNumber::before {
  content: '';
}

[dir='rtl'] .ms-Icon--NumberedListNumber::before {
  content: '';
}

[dir='ltr'] .ms-Icon--NumberedListNumberMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--NumberedListNumberMirrored::before {
  content: '';
}

[dir='ltr'] .ms-Icon--NumberedListText::before {
  content: '';
}

[dir='rtl'] .ms-Icon--NumberedListText::before {
  content: '';
}

[dir='ltr'] .ms-Icon--NumberedListTextMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--NumberedListTextMirrored::before {
  content: '';
}

.ms-Icon--NumberField::before {
  content: '';
}

.ms-Icon--NumberSequence::before {
  content: '';
}

.ms-Icon--NumberSymbol::before {
  content: '';
}

.ms-Icon--Octagon::before {
  content: '';
}

.ms-Icon--OEM::before {
  content: '';
}

.ms-Icon--OfficeAddinsLogo::before {
  content: '';
}

.ms-Icon--OfficeAssistantLogo::before {
  content: '';
}

.ms-Icon--OfficeChat::before {
  content: '';
}

.ms-Icon--OfficeChatSolid::before {
  content: '';
}

.ms-Icon--OfficeFormsLogo::before {
  content: '';
}

.ms-Icon--OfficeFormsLogo16::before {
  content: '';
}

.ms-Icon--OfficeFormsLogo24::before {
  content: '';
}

.ms-Icon--OfficeFormsLogoFill::before {
  content: '';
}

.ms-Icon--OfficeFormsLogoFill16::before {
  content: '';
}

.ms-Icon--OfficeFormsLogoFill24::before {
  content: '';
}

.ms-Icon--OfficeFormsLogoInverse::before {
  content: '';
}

.ms-Icon--OfficeFormsLogoInverse16::before {
  content: '';
}

.ms-Icon--OfficeFormsLogoInverse24::before {
  content: '';
}

.ms-Icon--OfficeLogo::before {
  content: '';
}

.ms-Icon--OfficeStoreLogo::before {
  content: '';
}

.ms-Icon--OfficeVideoLogo::before {
  content: '';
}

.ms-Icon--OfficeVideoLogoFill::before {
  content: '';
}

.ms-Icon--OfficeVideoLogoInverse::before {
  content: '';
}

.ms-Icon--OfflineOneDriveParachute::before {
  content: '';
}

.ms-Icon--OfflineOneDriveParachuteDisabled::before {
  content: '';
}

.ms-Icon--OfflineStorage::before {
  content: '';
}

.ms-Icon--OfflineStorageSolid::before {
  content: '';
}

.ms-Icon--Onboarding::before {
  content: '';
}

.ms-Icon--OneDriveAdd::before {
  content: '';
}

.ms-Icon--OneDriveFolder16::before {
  content: '';
}

.ms-Icon--OneDriveLogo::before {
  content: '';
}

.ms-Icon--OneNoteEduLogoInverse::before {
  content: '';
}

.ms-Icon--OneNoteLogo::before {
  content: '';
}

.ms-Icon--OneNoteLogo16::before {
  content: '';
}

.ms-Icon--OneNoteLogoFill::before {
  content: '';
}

.ms-Icon--OneNoteLogoFill16::before {
  content: '';
}

.ms-Icon--OneNoteLogoInverse::before {
  content: '';
}

.ms-Icon--OneNoteLogoInverse16::before {
  content: '';
}

.ms-Icon--OpenEnrollment::before {
  content: '';
}

.ms-Icon--OpenFile::before {
  content: '';
}

.ms-Icon--OpenFolderHorizontal::before {
  content: '';
}

.ms-Icon--OpenInNewTab::before {
  content: '';
}

.ms-Icon--OpenInNewWindow::before {
  content: '';
}

[dir='ltr'] .ms-Icon--OpenPane::before {
  content: '';
}

[dir='rtl'] .ms-Icon--OpenPane::before {
  content: '';
}

[dir='ltr'] .ms-Icon--OpenPaneMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--OpenPaneMirrored::before {
  content: '';
}

.ms-Icon--OpenSource::before {
  content: '';
}

[dir='ltr'] .ms-Icon--OpenWith::before {
  content: '';
}

[dir='rtl'] .ms-Icon--OpenWith::before {
  content: '';
}

[dir='ltr'] .ms-Icon--OpenWithMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--OpenWithMirrored::before {
  content: '';
}

.ms-Icon--Org::before {
  content: '';
}

.ms-Icon--Orientation::before {
  content: '';
}

.ms-Icon--Orientation2::before {
  content: '';
}

.ms-Icon--OutlookLogo::before {
  content: '';
}

.ms-Icon--OutlookLogo16::before {
  content: '';
}

.ms-Icon--OutlookLogoFill::before {
  content: '';
}

.ms-Icon--OutlookLogoFill16::before {
  content: '';
}

.ms-Icon--OutlookLogoInverse::before {
  content: '';
}

.ms-Icon--OutlookLogoInverse16::before {
  content: '';
}

.ms-Icon--OutOfOffice::before {
  content: '';
}

.ms-Icon--Package::before {
  content: '';
}

.ms-Icon--Packages::before {
  content: '';
}

.ms-Icon--Padding::before {
  content: '';
}

.ms-Icon--PaddingBottom::before {
  content: '';
}

.ms-Icon--PaddingLeft::before {
  content: '';
}

.ms-Icon--PaddingRight::before {
  content: '';
}

.ms-Icon--PaddingTop::before {
  content: '';
}

.ms-Icon--Page::before {
  content: '';
}

.ms-Icon--PageAdd::before {
  content: '';
}

.ms-Icon--PageArrowRight::before {
  content: '';
}

.ms-Icon--PageCheckedin::before {
  content: '';
}

.ms-Icon--PageCheckedOut::before {
  content: '';
}

.ms-Icon--PageData::before {
  content: '';
}

.ms-Icon--PageEdit::before {
  content: '';
}

.ms-Icon--PageHeader::before {
  content: '';
}

.ms-Icon--PageHeaderEdit::before {
  content: '';
}

.ms-Icon--PageLeft::before {
  content: '';
}

.ms-Icon--PageLink::before {
  content: '';
}

.ms-Icon--PageList::before {
  content: '';
}

.ms-Icon--PageListFilter::before {
  content: '';
}

[dir='ltr'] .ms-Icon--PageListSolid::before {
  content: '';
}

[dir='rtl'] .ms-Icon--PageListSolid::before {
  content: '';
}

[dir='ltr'] .ms-Icon--PageListMirroredSolid::before {
  content: '';
}

[dir='rtl'] .ms-Icon--PageListMirroredSolid::before {
  content: '';
}

.ms-Icon--PageLock::before {
  content: '';
}

.ms-Icon--PageRemove::before {
  content: '';
}

.ms-Icon--PageRight::before {
  content: '';
}

.ms-Icon--PageShared::before {
  content: '';
}

.ms-Icon--PageSolid::before {
  content: '';
}

.ms-Icon--PanoIndicator::before {
  content: '';
}

.ms-Icon--Parachute::before {
  content: '';
}

.ms-Icon--ParachuteSolid::before {
  content: '';
}

.ms-Icon--Parameter::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ParkingLocation::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ParkingLocation::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ParkingLocationMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ParkingLocationMirrored::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ParkingSolid::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ParkingSolid::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ParkingMirroredSolid::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ParkingMirroredSolid::before {
  content: '';
}

.ms-Icon--PartlyCloudyDay::before {
  content: '';
}

.ms-Icon--PartlyCloudyNight::before {
  content: '';
}

.ms-Icon--PartyLeader::before {
  content: '';
}

.ms-Icon--PassiveAuthentication::before {
  content: '';
}

.ms-Icon--PasswordField::before {
  content: '';
}

.ms-Icon--Paste::before {
  content: '';
}

.ms-Icon--PasteAsCode::before {
  content: '';
}

.ms-Icon--PasteAsText::before {
  content: '';
}

.ms-Icon--Pause::before {
  content: '';
}

.ms-Icon--PaymentCard::before {
  content: '';
}

.ms-Icon--PC1::before {
  content: '';
}

.ms-Icon--PDF::before {
  content: '';
}

.ms-Icon--PencilReply::before {
  content: '';
}

.ms-Icon--Pentagon::before {
  content: '';
}

.ms-Icon--PenWorkspace::before {
  content: '';
}

.ms-Icon--People::before {
  content: '';
}

.ms-Icon--PeopleAdd::before {
  content: '';
}

.ms-Icon--PeopleAlert::before {
  content: '';
}

.ms-Icon--PeopleBlock::before {
  content: '';
}

.ms-Icon--PeoplePause::before {
  content: '';
}

.ms-Icon--PeopleRepeat::before {
  content: '';
}

.ms-Icon--Permissions::before {
  content: '';
}

.ms-Icon--PermissionsSolid::before {
  content: '';
}

.ms-Icon--Personalize::before {
  content: '';
}

.ms-Icon--Phishing::before {
  content: '';
}

.ms-Icon--Phone::before {
  content: '';
}

.ms-Icon--Photo::before {
  content: '';
}

.ms-Icon--Photo2::before {
  content: '';
}

.ms-Icon--Photo2Add::before {
  content: '';
}

.ms-Icon--Photo2Fill::before {
  content: '';
}

.ms-Icon--Photo2Remove::before {
  content: '';
}

.ms-Icon--PhotoCollection::before {
  content: '';
}

.ms-Icon--PhotoVideoMedia::before {
  content: '';
}

.ms-Icon--Picture::before {
  content: '';
}

.ms-Icon--PictureCenter::before {
  content: '';
}

.ms-Icon--PictureFill::before {
  content: '';
}

.ms-Icon--PictureLibrary::before {
  content: '';
}

.ms-Icon--PicturePosition::before {
  content: '';
}

.ms-Icon--PictureStretch::before {
  content: '';
}

.ms-Icon--PictureTile::before {
  content: '';
}

.ms-Icon--PieDouble::before {
  content: '';
}

.ms-Icon--PieSingle::before {
  content: '';
}

.ms-Icon--PieSingleSolid::before {
  content: '';
}

.ms-Icon--Pill::before {
  content: '';
}

.ms-Icon--Pin::before {
  content: '';
}

.ms-Icon--Pinned::before {
  content: '';
}

.ms-Icon--PinnedFill::before {
  content: '';
}

.ms-Icon--PinnedSolid::before {
  content: '';
}

.ms-Icon--PinSolid12::before {
  content: '';
}

.ms-Icon--PinSolidOff12::before {
  content: '';
}

.ms-Icon--PivotChart::before {
  content: '';
}

.ms-Icon--PlainText::before {
  content: '';
}

.ms-Icon--PlannerLogo::before {
  content: '';
}

.ms-Icon--PlanView::before {
  content: '';
}

.ms-Icon--Play::before {
  content: '';
}

.ms-Icon--PlaybackRate1x::before {
  content: '';
}

.ms-Icon--PlayerSettings::before {
  content: '';
}

.ms-Icon--PlayResume::before {
  content: '';
}

.ms-Icon--PlayReverse::before {
  content: '';
}

.ms-Icon--PlayReverseResume::before {
  content: '';
}

.ms-Icon--Plug::before {
  content: '';
}

.ms-Icon--PlugConnected::before {
  content: '';
}

.ms-Icon--PlugDisconnected::before {
  content: '';
}

.ms-Icon--PlugSolid::before {
  content: '';
}

.ms-Icon--POI::before {
  content: '';
}

.ms-Icon--POISolid::before {
  content: '';
}

.ms-Icon--PollResults::before {
  content: '';
}

.ms-Icon--PostUpdate::before {
  content: '';
}

.ms-Icon--PowerApps::before {
  content: '';
}

.ms-Icon--PowerApps2Logo::before {
  content: '';
}

.ms-Icon--PowerAppsCDS::before {
  content: '';
}

.ms-Icon--PowerAppsLogo::before {
  content: '';
}

.ms-Icon--PowerBILogo::before {
  content: '';
}

.ms-Icon--PowerBILogo16::before {
  content: '';
}

.ms-Icon--PowerBILogoBackplate16::before {
  content: '';
}

.ms-Icon--PowerButton::before {
  content: '';
}

.ms-Icon--PowerPointDocument::before {
  content: '';
}

.ms-Icon--PowerPointLogo::before {
  content: '';
}

.ms-Icon--PowerPointLogo16::before {
  content: '';
}

.ms-Icon--PowerPointLogoFill::before {
  content: '';
}

.ms-Icon--PowerPointLogoFill16::before {
  content: '';
}

.ms-Icon--PowerPointLogoInverse::before {
  content: '';
}

.ms-Icon--PowerPointLogoInverse16::before {
  content: '';
}

.ms-Icon--PowerShell::before {
  content: '';
}

.ms-Icon--PowerShell2::before {
  content: '';
}

.ms-Icon--Precipitation::before {
  content: '';
}

.ms-Icon--PresenceChickletVideo::before {
  content: '';
}

.ms-Icon--Presentation::before {
  content: '';
}

.ms-Icon--Presentation12::before {
  content: '';
}

.ms-Icon--Preview::before {
  content: '';
}

.ms-Icon--PreviewLink::before {
  content: '';
}

.ms-Icon--Previous::before {
  content: '';
}

.ms-Icon--PrimaryCalendar::before {
  content: '';
}

.ms-Icon--Print::before {
  content: '';
}

.ms-Icon--PrintfaxPrinterFile::before {
  content: '';
}

.ms-Icon--Processing::before {
  content: '';
}

.ms-Icon--ProcessMetaTask::before {
  content: '';
}

.ms-Icon--Product::before {
  content: '';
}

.ms-Icon--ProductCatalog::before {
  content: '';
}

.ms-Icon--ProductionFloorManagement::before {
  content: '';
}

.ms-Icon--ProductList::before {
  content: '';
}

.ms-Icon--ProductRelease::before {
  content: '';
}

.ms-Icon--ProductVariant::before {
  content: '';
}

.ms-Icon--ProfileSearch::before {
  content: '';
}

.ms-Icon--ProFootball::before {
  content: '';
}

.ms-Icon--ProgressLoopInner::before {
  content: '';
}

.ms-Icon--ProgressLoopOuter::before {
  content: '';
}

.ms-Icon--ProgressRingDots::before {
  content: '';
}

.ms-Icon--ProHockey::before {
  content: '';
}

.ms-Icon--ProjectCollection::before {
  content: '';
}

.ms-Icon--ProjectDocument::before {
  content: '';
}

.ms-Icon--ProjectLogo16::before {
  content: '';
}

.ms-Icon--ProjectLogo32::before {
  content: '';
}

.ms-Icon--ProjectLogoFill16::before {
  content: '';
}

.ms-Icon--ProjectLogoFill32::before {
  content: '';
}

.ms-Icon--ProjectLogoInverse::before {
  content: '';
}

.ms-Icon--PromotedDatabase::before {
  content: '';
}

.ms-Icon--ProtectedDocument::before {
  content: '';
}

.ms-Icon--ProtectionCenterLogo32::before {
  content: '';
}

.ms-Icon--ProtectRestrict::before {
  content: '';
}

.ms-Icon--PublicCalendar::before {
  content: '';
}

[dir='ltr'] .ms-Icon--PublicContactCard::before {
  content: '';
}

[dir='rtl'] .ms-Icon--PublicContactCard::before {
  content: '';
}

[dir='ltr'] .ms-Icon--PublicContactCardMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--PublicContactCardMirrored::before {
  content: '';
}

.ms-Icon--PublicEmail::before {
  content: '';
}

.ms-Icon--PublicFolder::before {
  content: '';
}

.ms-Icon--PublishContent::before {
  content: '';
}

.ms-Icon--PublishCourse::before {
  content: '';
}

.ms-Icon--PublisherLogo::before {
  content: '';
}

.ms-Icon--PublisherLogo16::before {
  content: '';
}

.ms-Icon--PublisherLogoFill::before {
  content: '';
}

.ms-Icon--PublisherLogoFill16::before {
  content: '';
}

.ms-Icon--PublisherLogoInverse16::before {
  content: '';
}

.ms-Icon--Puzzle::before {
  content: '';
}

.ms-Icon--PY::before {
  content: '';
}

.ms-Icon--PythonLanguage::before {
  content: '';
}

.ms-Icon--QandA::before {
  content: '';
}

.ms-Icon--QandAMirror::before {
  content: '';
}

.ms-Icon--QRCode::before {
  content: '';
}

.ms-Icon--QuadColumn::before {
  content: '';
}

.ms-Icon--Quantity::before {
  content: '';
}

.ms-Icon--QuarterCircle::before {
  content: '';
}

.ms-Icon--QueryList::before {
  content: '';
}

[dir='ltr'] .ms-Icon--Questionnaire::before {
  content: '';
}

[dir='rtl'] .ms-Icon--Questionnaire::before {
  content: '';
}

[dir='ltr'] .ms-Icon--QuestionnaireMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--QuestionnaireMirrored::before {
  content: '';
}

.ms-Icon--QuickNote::before {
  content: '';
}

.ms-Icon--QuickNoteSolid::before {
  content: '';
}

.ms-Icon--R::before {
  content: '';
}

.ms-Icon--RadioBtnOff::before {
  content: '';
}

.ms-Icon--RadioBtnOn::before {
  content: '';
}

.ms-Icon--RadioBullet::before {
  content: '';
}

.ms-Icon--Rain::before {
  content: '';
}

.ms-Icon--RainShowersDay::before {
  content: '';
}

.ms-Icon--RainShowersNight::before {
  content: '';
}

.ms-Icon--RainSnow::before {
  content: '';
}

.ms-Icon--RawSource::before {
  content: '';
}

.ms-Icon--Read::before {
  content: '';
}

.ms-Icon--ReadingMode::before {
  content: '';
}

.ms-Icon--ReadingModeSolid::before {
  content: '';
}

.ms-Icon--ReadOutLoud::before {
  content: '';
}

.ms-Icon--RealEstate::before {
  content: '';
}

.ms-Icon--ReceiptCheck::before {
  content: '';
}

.ms-Icon--ReceiptForward::before {
  content: '';
}

.ms-Icon--ReceiptReply::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ReceiptTentative::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ReceiptTentative::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ReceiptTentativeMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ReceiptTentativeMirrored::before {
  content: '';
}

.ms-Icon--ReceiptUndelivered::before {
  content: '';
}

.ms-Icon--Recent::before {
  content: '';
}

.ms-Icon--Record2::before {
  content: '';
}

.ms-Icon--RecruitmentManagement::before {
  content: '';
}

.ms-Icon--RectangleShape::before {
  content: '';
}

.ms-Icon--RectangleShapeSolid::before {
  content: '';
}

.ms-Icon--RectangularClipping::before {
  content: '';
}

.ms-Icon--RecurringEvent::before {
  content: '';
}

.ms-Icon--RecurringTask::before {
  content: '';
}

.ms-Icon--RecycleBin::before {
  content: '';
}

.ms-Icon--Redeploy::before {
  content: '';
}

.ms-Icon--RedEye::before {
  content: '';
}

.ms-Icon--Redo::before {
  content: '';
}

.ms-Icon--Refresh::before {
  content: '';
}

.ms-Icon--Relationship::before {
  content: '';
}

.ms-Icon--ReleaseDefinition::before {
  content: '';
}

.ms-Icon--ReleaseGate::before {
  content: '';
}

.ms-Icon--ReleaseGateCheck::before {
  content: '';
}

.ms-Icon--ReleaseGateError::before {
  content: '';
}

.ms-Icon--ReminderGroup::before {
  content: '';
}

.ms-Icon--ReminderPerson::before {
  content: '';
}

.ms-Icon--ReminderTime::before {
  content: '';
}

.ms-Icon--Remote::before {
  content: '';
}

.ms-Icon--Remove::before {
  content: '';
}

.ms-Icon--RemoveEvent::before {
  content: '';
}

.ms-Icon--RemoveFilter::before {
  content: '';
}

.ms-Icon--RemoveFromShoppingList::before {
  content: '';
}

.ms-Icon--RemoveFromTrash::before {
  content: '';
}

.ms-Icon--RemoveLink::before {
  content: '';
}

.ms-Icon--RemoveLinkChain::before {
  content: '';
}

.ms-Icon--RemoveLinkX::before {
  content: '';
}

.ms-Icon--RemoveOccurrence::before {
  content: '';
}

.ms-Icon--Rename::before {
  content: '';
}

.ms-Icon--RenewalCurrent::before {
  content: '';
}

.ms-Icon--RenewalFuture::before {
  content: '';
}

.ms-Icon--ReopenPages::before {
  content: '';
}

.ms-Icon--Repair::before {
  content: '';
}

.ms-Icon--RepeatAll::before {
  content: '';
}

.ms-Icon--RepeatOne::before {
  content: '';
}

.ms-Icon--ReplyAllAlt::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ReplyAll::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ReplyAll::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ReplyAllMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ReplyAllMirrored::before {
  content: '';
}

.ms-Icon--ReplyAlt::before {
  content: '';
}

[dir='ltr'] .ms-Icon--Reply::before {
  content: '';
}

[dir='rtl'] .ms-Icon--Reply::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ReplyMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ReplyMirrored::before {
  content: '';
}

.ms-Icon--Repo::before {
  content: '';
}

.ms-Icon--ReportAdd::before {
  content: '';
}

.ms-Icon--ReportDocument::before {
  content: '';
}

.ms-Icon--ReportHacked::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ReportLibrary::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ReportLibrary::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ReportLibraryMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ReportLibraryMirrored::before {
  content: '';
}

.ms-Icon--ReportLock::before {
  content: '';
}

.ms-Icon--ReportWarning::before {
  content: '';
}

.ms-Icon--RepoSolid::before {
  content: '';
}

.ms-Icon--Rerun::before {
  content: '';
}

.ms-Icon--ReservationOrders::before {
  content: '';
}

.ms-Icon--ResetDevice::before {
  content: '';
}

.ms-Icon--ResponsesMenu::before {
  content: '';
}

.ms-Icon--ReturnKey::before {
  content: '';
}

.ms-Icon--ReturnToSession::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ReviewRequestSolid::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ReviewRequestSolid::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ReviewRequestMirroredSolid::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ReviewRequestMirroredSolid::before {
  content: '';
}

.ms-Icon--ReviewResponseSolid::before {
  content: '';
}

.ms-Icon--ReviewSolid::before {
  content: '';
}

.ms-Icon--RevToggleKey::before {
  content: '';
}

.ms-Icon--Rewind::before {
  content: '';
}

.ms-Icon--Ribbon::before {
  content: '';
}

.ms-Icon--RibbonSolid::before {
  content: '';
}

.ms-Icon--RightDoubleQuote::before {
  content: '';
}

.ms-Icon--RightTriangle::before {
  content: '';
}

.ms-Icon--Ringer::before {
  content: '';
}

.ms-Icon--RingerOff::before {
  content: '';
}

.ms-Icon--RingerRemove::before {
  content: '';
}

.ms-Icon--RingerSolid::before {
  content: '';
}

.ms-Icon--Robot::before {
  content: '';
}

.ms-Icon--Rocket::before {
  content: '';
}

.ms-Icon--Room::before {
  content: '';
}

.ms-Icon--Rotate::before {
  content: '';
}

.ms-Icon--Rotate90Clockwise::before {
  content: '';
}

.ms-Icon--Rotate90CounterClockwise::before {
  content: '';
}

.ms-Icon--RowsChild::before {
  content: '';
}

.ms-Icon--RowsGroup::before {
  content: '';
}

.ms-Icon--Rugby::before {
  content: '';
}

.ms-Icon--Running::before {
  content: '';
}

.ms-Icon--Sad::before {
  content: '';
}

.ms-Icon--SadSolid::before {
  content: '';
}

.ms-Icon--Save::before {
  content: '';
}

.ms-Icon--SaveAll::before {
  content: '';
}

.ms-Icon--SaveAndClose::before {
  content: '';
}

.ms-Icon--SaveAs::before {
  content: '';
}

.ms-Icon--SaveTemplate::before {
  content: '';
}

.ms-Icon--SaveToMobile::before {
  content: '';
}

.ms-Icon--Savings::before {
  content: '';
}

.ms-Icon--ScaleUp::before {
  content: '';
}

.ms-Icon--ScaleVolume::before {
  content: '';
}

.ms-Icon--ScatterChart::before {
  content: '';
}

.ms-Icon--ScheduleEventAction::before {
  content: '';
}

.ms-Icon--SchoolDataSyncLogo::before {
  content: '';
}

.ms-Icon--ScopeTemplate::before {
  content: '';
}

.ms-Icon--ScreenCast::before {
  content: '';
}

.ms-Icon--Script::before {
  content: '';
}

.ms-Icon--ScrollUpDown::before {
  content: '';
}

.ms-Icon--Search::before {
  content: '';
}

.ms-Icon--SearchAndApps::before {
  content: '';
}

.ms-Icon--SearchBookmark::before {
  content: '';
}

.ms-Icon--SearchCalendar::before {
  content: '';
}

.ms-Icon--SearchData::before {
  content: '';
}

[dir='ltr'] .ms-Icon--SearchIssue::before {
  content: '';
}

[dir='rtl'] .ms-Icon--SearchIssue::before {
  content: '';
}

[dir='ltr'] .ms-Icon--SearchIssueMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--SearchIssueMirrored::before {
  content: '';
}

.ms-Icon--SearchNearby::before {
  content: '';
}

.ms-Icon--SecondaryNav::before {
  content: '';
}

.ms-Icon--Section::before {
  content: '';
}

.ms-Icon--Sections::before {
  content: '';
}

.ms-Icon--SecurityGroup::before {
  content: '';
}

.ms-Icon--SeeDo::before {
  content: '';
}

.ms-Icon--SelectAll::before {
  content: '';
}

.ms-Icon--Sell::before {
  content: '';
}

.ms-Icon--SemiboldWeight::before {
  content: '';
}

[dir='ltr'] .ms-Icon--Send::before {
  content: '';
}

[dir='rtl'] .ms-Icon--Send::before {
  content: '';
}

[dir='ltr'] .ms-Icon--SendMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--SendMirrored::before {
  content: '';
}

.ms-Icon--Separator::before {
  content: '';
}

.ms-Icon--Server::before {
  content: '';
}

.ms-Icon--ServerEnviroment::before {
  content: '';
}

.ms-Icon--ServerProcesses::before {
  content: '';
}

.ms-Icon--SetAction::before {
  content: '';
}

.ms-Icon--Settings::before {
  content: '';
}

.ms-Icon--ShakeDevice::before {
  content: '';
}

.ms-Icon--Shapes::before {
  content: '';
}

.ms-Icon--Share::before {
  content: '';
}

.ms-Icon--ShareiOS::before {
  content: '';
}

.ms-Icon--SharepointAppIcon16::before {
  content: '';
}

.ms-Icon--SharepointLogo::before {
  content: '';
}

.ms-Icon--SharepointLogoFill::before {
  content: '';
}

.ms-Icon--SharepointLogoInverse::before {
  content: '';
}

.ms-Icon--Shield::before {
  content: '';
}

.ms-Icon--ShieldAlert::before {
  content: '';
}

.ms-Icon--ShieldSolid::before {
  content: '';
}

.ms-Icon--Shirt::before {
  content: '';
}

.ms-Icon--Shop::before {
  content: '';
}

.ms-Icon--ShoppingCart::before {
  content: '';
}

.ms-Icon--ShoppingCartSolid::before {
  content: '';
}

.ms-Icon--ShopServer::before {
  content: '';
}

.ms-Icon--ShowGrid::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ShowResults::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ShowResults::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ShowResultsMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ShowResultsMirrored::before {
  content: '';
}

.ms-Icon--ShowTimeAs::before {
  content: '';
}

[dir='ltr'] .ms-Icon--SidePanel::before {
  content: '';
}

[dir='rtl'] .ms-Icon--SidePanel::before {
  content: '';
}

[dir='ltr'] .ms-Icon--SidePanelMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--SidePanelMirrored::before {
  content: '';
}

.ms-Icon--Signin::before {
  content: '';
}

.ms-Icon--SignOut::before {
  content: '';
}

.ms-Icon--SingleBookmark::before {
  content: '';
}

.ms-Icon--SingleBookmarkSolid::before {
  content: '';
}

.ms-Icon--SingleColumn::before {
  content: '';
}

.ms-Icon--SingleColumnEdit::before {
  content: '';
}

.ms-Icon--SIPMove::before {
  content: '';
}

.ms-Icon--SiteScan::before {
  content: '';
}

.ms-Icon--SizeLegacy::before {
  content: '';
}

.ms-Icon--SkiResorts::before {
  content: '';
}

.ms-Icon--SkypeArrow::before {
  content: '';
}

.ms-Icon--SkypeCheck::before {
  content: '';
}

.ms-Icon--SkypeCircleArrow::before {
  content: '';
}

.ms-Icon--SkypeCircleCheck::before {
  content: '';
}

.ms-Icon--SkypeCircleClock::before {
  content: '';
}

.ms-Icon--SkypeCircleMinus::before {
  content: '';
}

.ms-Icon--SkypeCircleSlash::before {
  content: '';
}

.ms-Icon--SkypeClock::before {
  content: '';
}

.ms-Icon--SkypeForBusinessLogo::before {
  content: '';
}

.ms-Icon--SkypeForBusinessLogo16::before {
  content: '';
}

.ms-Icon--SkypeForBusinessLogoFill::before {
  content: '';
}

.ms-Icon--SkypeForBusinessLogoFill16::before {
  content: '';
}

.ms-Icon--SkypeLogo::before {
  content: '';
}

.ms-Icon--SkypeLogo16::before {
  content: '';
}

.ms-Icon--SkypeMessage::before {
  content: '';
}

.ms-Icon--SkypeMinus::before {
  content: '';
}

.ms-Icon--SkypeSlash::before {
  content: '';
}

.ms-Icon--Slider::before {
  content: '';
}

.ms-Icon--SliderHandleSize::before {
  content: '';
}

.ms-Icon--SliderThumb::before {
  content: '';
}

.ms-Icon--Slideshow::before {
  content: '';
}

.ms-Icon--SmartGlassRemote::before {
  content: '';
}

.ms-Icon--SnapToGrid::before {
  content: '';
}

.ms-Icon--Snooze::before {
  content: '';
}

.ms-Icon--Snow::before {
  content: '';
}

.ms-Icon--Snowflake::before {
  content: '';
}

.ms-Icon--SnowShowerDay::before {
  content: '';
}

.ms-Icon--SnowShowerNight::before {
  content: '';
}

.ms-Icon--Soccer::before {
  content: '';
}

.ms-Icon--SocialListeningLogo::before {
  content: '';
}

.ms-Icon--Sort::before {
  content: '';
}

.ms-Icon--SortDown::before {
  content: '';
}

.ms-Icon--SortLines::before {
  content: '';
}

.ms-Icon--SortUp::before {
  content: '';
}

.ms-Icon--Source::before {
  content: '';
}

.ms-Icon--Spacer::before {
  content: '';
}

.ms-Icon--Speakers::before {
  content: '';
}

.ms-Icon--SpecialEvent::before {
  content: '';
}

.ms-Icon--SpeedHigh::before {
  content: '';
}

.ms-Icon--Split::before {
  content: '';
}

.ms-Icon--SplitObject::before {
  content: '';
}

.ms-Icon--Sprint::before {
  content: '';
}

.ms-Icon--Squalls::before {
  content: '';
}

.ms-Icon--SquareShapeSolid::before {
  content: '';
}

.ms-Icon--Stack::before {
  content: '';
}

.ms-Icon--StackColumnChart::before {
  content: '';
}

.ms-Icon--StackedBarChart::before {
  content: '';
}

.ms-Icon--StackedColumnChart2::before {
  content: '';
}

.ms-Icon--StackedColumnChart2Fill::before {
  content: '';
}

.ms-Icon--StackedLineChart::before {
  content: '';
}

.ms-Icon--StackIndicator::before {
  content: '';
}

.ms-Icon--StaffNotebookLogo16::before {
  content: '';
}

.ms-Icon--StaffNotebookLogo32::before {
  content: '';
}

.ms-Icon--StaffNotebookLogoFill16::before {
  content: '';
}

.ms-Icon--StaffNotebookLogoFill32::before {
  content: '';
}

.ms-Icon--StaffNotebookLogoInverted16::before {
  content: '';
}

.ms-Icon--StaffNotebookLogoInverted32::before {
  content: '';
}

.ms-Icon--Starburst::before {
  content: '';
}

.ms-Icon--StarburstSolid::before {
  content: '';
}

.ms-Icon--StatusCircleBlock::before {
  content: '';
}

.ms-Icon--StatusCircleBlock2::before {
  content: '';
}

.ms-Icon--StatusCircleCheckmark::before {
  content: '';
}

.ms-Icon--StatusCircleErrorX::before {
  content: '';
}

.ms-Icon--StatusCircleExclamation::before {
  content: '';
}

.ms-Icon--StatusCircleInfo::before {
  content: '';
}

.ms-Icon--StatusCircleInner::before {
  content: '';
}

.ms-Icon--StatusCircleOuter::before {
  content: '';
}

.ms-Icon--StatusCircleQuestionMark::before {
  content: '';
}

.ms-Icon--StatusCircleRing::before {
  content: '';
}

.ms-Icon--StatusCircleSync::before {
  content: '';
}

.ms-Icon--StatusErrorFull::before {
  content: '';
}

.ms-Icon--StatusTriangle::before {
  content: '';
}

.ms-Icon--StatusTriangleExclamation::before {
  content: '';
}

.ms-Icon--StatusTriangleInner::before {
  content: '';
}

.ms-Icon--StatusTriangleOuter::before {
  content: '';
}

.ms-Icon--Step::before {
  content: '';
}

.ms-Icon--StepInsert::before {
  content: '';
}

.ms-Icon--StepShared::before {
  content: '';
}

.ms-Icon--StepSharedAdd::before {
  content: '';
}

.ms-Icon--StepSharedInsert::before {
  content: '';
}

.ms-Icon--StickyNotesOutlineAppIcon::before {
  content: '';
}

.ms-Icon--StickyNotesSolidAppIcon::before {
  content: '';
}

.ms-Icon--StockDown::before {
  content: '';
}

.ms-Icon--StockUp::before {
  content: '';
}

.ms-Icon--Stop::before {
  content: '';
}

.ms-Icon--StopSolid::before {
  content: '';
}

.ms-Icon--Stopwatch::before {
  content: '';
}

.ms-Icon--StorageOptical::before {
  content: '';
}

.ms-Icon--StoreLogo16::before {
  content: '';
}

.ms-Icon--StoreLogoMed20::before {
  content: '';
}

.ms-Icon--Storyboard::before {
  content: '';
}

.ms-Icon--Streaming::before {
  content: '';
}

.ms-Icon--StreamingOff::before {
  content: '';
}

.ms-Icon--StreamLogo::before {
  content: '';
}

.ms-Icon--Street::before {
  content: '';
}

.ms-Icon--StreetsideSplitMinimize::before {
  content: '';
}

.ms-Icon--Strikethrough::before {
  content: '';
}

.ms-Icon--Subscribe::before {
  content: '';
}

.ms-Icon--Subscript::before {
  content: '';
}

.ms-Icon--SubstitutionsIn::before {
  content: '';
}

.ms-Icon--Suitcase::before {
  content: '';
}

.ms-Icon--SunAdd::before {
  content: '';
}

.ms-Icon--Sunny::before {
  content: '';
}

.ms-Icon--SunQuestionMark::before {
  content: '';
}

.ms-Icon--Superscript::before {
  content: '';
}

.ms-Icon--SurveyQuestions::before {
  content: '';
}

.ms-Icon--SwayLogo16::before {
  content: '';
}

.ms-Icon--SwayLogo32::before {
  content: '';
}

.ms-Icon--SwayLogoFill16::before {
  content: '';
}

.ms-Icon--SwayLogoFill32::before {
  content: '';
}

.ms-Icon--SwayLogoInverse::before {
  content: '';
}

.ms-Icon--Switch::before {
  content: '';
}

.ms-Icon--SwitcherStartEnd::before {
  content: '';
}

.ms-Icon--Sync::before {
  content: '';
}

.ms-Icon--SyncFolder::before {
  content: '';
}

.ms-Icon--SyncOccurence::before {
  content: '';
}

.ms-Icon--SyncStatus::before {
  content: '';
}

.ms-Icon--SyncStatusSolid::before {
  content: '';
}

.ms-Icon--SyncToPC::before {
  content: '';
}

.ms-Icon--System::before {
  content: '';
}

.ms-Icon--Tab::before {
  content: '';
}

.ms-Icon--TabCenter::before {
  content: '';
}

.ms-Icon--Table::before {
  content: '';
}

.ms-Icon--TableComputed::before {
  content: '';
}

.ms-Icon--TableGroup::before {
  content: '';
}

.ms-Icon--TableLink::before {
  content: '';
}

.ms-Icon--Tablet::before {
  content: '';
}

.ms-Icon--TabletMode::before {
  content: '';
}

.ms-Icon--TabletSelected::before {
  content: '';
}

.ms-Icon--TabOneColumn::before {
  content: '';
}

.ms-Icon--TabThreeColumn::before {
  content: '';
}

.ms-Icon--TabTwoColumn::before {
  content: '';
}

.ms-Icon--Tag::before {
  content: '';
}

.ms-Icon--TagSolid::before {
  content: '';
}

.ms-Icon--TagUnknown::before {
  content: '';
}

.ms-Icon--TagUnknown12::before {
  content: '';
}

.ms-Icon--TagUnknown12Mirror::before {
  content: '';
}

.ms-Icon--TagUnknownMirror::before {
  content: '';
}

.ms-Icon--Taskboard::before {
  content: '';
}

[dir='ltr'] .ms-Icon--TaskGroup::before {
  content: '';
}

[dir='rtl'] .ms-Icon--TaskGroup::before {
  content: '';
}

[dir='ltr'] .ms-Icon--TaskGroupMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--TaskGroupMirrored::before {
  content: '';
}

.ms-Icon--TaskLogo::before {
  content: '';
}

[dir='ltr'] .ms-Icon--TaskManager::before {
  content: '';
}

[dir='rtl'] .ms-Icon--TaskManager::before {
  content: '';
}

[dir='ltr'] .ms-Icon--TaskManagerMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--TaskManagerMirrored::before {
  content: '';
}

.ms-Icon--TaskSolid::before {
  content: '';
}

.ms-Icon--Taxi::before {
  content: '';
}

.ms-Icon--TeamFavorite::before {
  content: '';
}

.ms-Icon--TeamsLogo::before {
  content: '';
}

.ms-Icon--TeamsLogo16::before {
  content: '';
}

.ms-Icon--TeamsLogoFill::before {
  content: '';
}

.ms-Icon--TeamsLogoFill16::before {
  content: '';
}

.ms-Icon--TeamsLogoInverse::before {
  content: '';
}

.ms-Icon--Teamwork::before {
  content: '';
}

.ms-Icon--Teeth::before {
  content: '';
}

.ms-Icon--Telemarketer::before {
  content: '';
}

.ms-Icon--TemporaryUser::before {
  content: '';
}

.ms-Icon--Tennis::before {
  content: '';
}

.ms-Icon--TestAutoSolid::before {
  content: '';
}

.ms-Icon--TestBeaker::before {
  content: '';
}

.ms-Icon--TestBeakerSolid::before {
  content: '';
}

.ms-Icon--TestCase::before {
  content: '';
}

.ms-Icon--TestExploreSolid::before {
  content: '';
}

.ms-Icon--TestImpactSolid::before {
  content: '';
}

.ms-Icon--TestParameter::before {
  content: '';
}

.ms-Icon--TestPlan::before {
  content: '';
}

.ms-Icon--TestStep::before {
  content: '';
}

.ms-Icon--TestSuite::before {
  content: '';
}

.ms-Icon--TestUserSolid::before {
  content: '';
}

.ms-Icon--TextBox::before {
  content: '';
}

.ms-Icon--TextCallout::before {
  content: '';
}

.ms-Icon--TextDocument::before {
  content: '';
}

.ms-Icon--TextDocumentShared::before {
  content: '';
}

.ms-Icon--TextField::before {
  content: '';
}

.ms-Icon--TextOverflow::before {
  content: '';
}

.ms-Icon--TFVCLogo::before {
  content: '';
}

.ms-Icon--ThisPC::before {
  content: '';
}

.ms-Icon--ThreeQuarterCircle::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ThumbnailView::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ThumbnailView::before {
  content: '';
}

[dir='ltr'] .ms-Icon--ThumbnailViewMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--ThumbnailViewMirrored::before {
  content: '';
}

.ms-Icon--Thunderstorms::before {
  content: '';
}

.ms-Icon--Ticket::before {
  content: '';
}

.ms-Icon--Tiles::before {
  content: '';
}

.ms-Icon--Tiles2::before {
  content: '';
}

.ms-Icon--TimeEntry::before {
  content: '';
}

.ms-Icon--Timeline::before {
  content: '';
}

.ms-Icon--TimelineDelivery::before {
  content: '';
}

.ms-Icon--TimelineMatrixView::before {
  content: '';
}

.ms-Icon--TimelineProgress::before {
  content: '';
}

.ms-Icon--TimePicker::before {
  content: '';
}

.ms-Icon--Timer::before {
  content: '';
}

.ms-Icon--TimeSheet::before {
  content: '';
}

.ms-Icon--ToDoLogoBottom::before {
  content: '';
}

.ms-Icon--ToDoLogoInverse::before {
  content: '';
}

.ms-Icon--ToDoLogoOutline::before {
  content: '';
}

.ms-Icon--ToDoLogoTop::before {
  content: '';
}

.ms-Icon--ToggleBorder::before {
  content: '';
}

.ms-Icon--ToggleFilled::before {
  content: '';
}

.ms-Icon--ToggleLeft::before {
  content: '';
}

.ms-Icon--ToggleRight::before {
  content: '';
}

.ms-Icon--ToggleThumb::before {
  content: '';
}

.ms-Icon--Toll::before {
  content: '';
}

.ms-Icon--Toolbox::before {
  content: '';
}

.ms-Icon--Touch::before {
  content: '';
}

.ms-Icon--TouchPointer::before {
  content: '';
}

[dir='ltr'] .ms-Icon--Trackers::before {
  content: '';
}

[dir='rtl'] .ms-Icon--Trackers::before {
  content: '';
}

[dir='ltr'] .ms-Icon--TrackersMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--TrackersMirrored::before {
  content: '';
}

.ms-Icon--Train::before {
  content: '';
}

.ms-Icon--TrainSolid::before {
  content: '';
}

.ms-Icon--TransferCall::before {
  content: '';
}

.ms-Icon--Transition::before {
  content: '';
}

.ms-Icon--TransitionEffect::before {
  content: '';
}

.ms-Icon--TransitionPop::before {
  content: '';
}

.ms-Icon--TransitionPush::before {
  content: '';
}

.ms-Icon--Translate::before {
  content: '';
}

.ms-Icon--Trending12::before {
  content: '';
}

.ms-Icon--TriangleDown12::before {
  content: '';
}

.ms-Icon--TriangleLeft12::before {
  content: '';
}

.ms-Icon--TriangleRight12::before {
  content: '';
}

.ms-Icon--TriangleShape::before {
  content: '';
}

.ms-Icon--TriangleShapeSolid::before {
  content: '';
}

.ms-Icon--TriangleSolid::before {
  content: '';
}

.ms-Icon--TriangleSolidDown12::before {
  content: '';
}

.ms-Icon--TriangleSolidLeft12::before {
  content: '';
}

.ms-Icon--TriangleSolidRight12::before {
  content: '';
}

.ms-Icon--TriangleSolidUp12::before {
  content: '';
}

.ms-Icon--TriangleUp12::before {
  content: '';
}

.ms-Icon--TriggerApproval::before {
  content: '';
}

.ms-Icon--TriggerAuto::before {
  content: '';
}

.ms-Icon--TriggerUser::before {
  content: '';
}

.ms-Icon--Trim::before {
  content: '';
}

.ms-Icon--TrimEnd::before {
  content: '';
}

.ms-Icon--TrimStart::before {
  content: '';
}

.ms-Icon--TripleColumn::before {
  content: '';
}

.ms-Icon--TripleColumnEdit::before {
  content: '';
}

.ms-Icon--TripleColumnWide::before {
  content: '';
}

.ms-Icon--Trophy::before {
  content: '';
}

.ms-Icon--Trophy2::before {
  content: '';
}

.ms-Icon--Trophy2Solid::before {
  content: '';
}

.ms-Icon--TurnRight::before {
  content: '';
}

.ms-Icon--TVMonitor::before {
  content: '';
}

.ms-Icon--TVMonitorSelected::before {
  content: '';
}

.ms-Icon--TypeScriptLanguage::before {
  content: '';
}

.ms-Icon--Umbrella::before {
  content: '';
}

.ms-Icon--Underline::before {
  content: '';
}

.ms-Icon--Undo::before {
  content: '';
}

[dir='ltr'] .ms-Icon--Uneditable2::before {
  content: '';
}

[dir='rtl'] .ms-Icon--Uneditable2::before {
  content: '';
}

[dir='ltr'] .ms-Icon--Uneditable2Mirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--Uneditable2Mirrored::before {
  content: '';
}

[dir='ltr'] .ms-Icon--Uneditable::before {
  content: '';
}

[dir='rtl'] .ms-Icon--Uneditable::before {
  content: '';
}

[dir='ltr'] .ms-Icon--UneditableMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--UneditableMirrored::before {
  content: '';
}

[dir='ltr'] .ms-Icon--UneditableSolid12::before {
  content: '';
}

[dir='rtl'] .ms-Icon--UneditableSolid12::before {
  content: '';
}

[dir='ltr'] .ms-Icon--UneditableSolidMirrored12::before {
  content: '';
}

[dir='rtl'] .ms-Icon--UneditableSolidMirrored12::before {
  content: '';
}

.ms-Icon--Unfavorite::before {
  content: '';
}

.ms-Icon--UngroupObject::before {
  content: '';
}

.ms-Icon--UnknownCall::before {
  content: '';
}

[dir='ltr'] .ms-Icon--Unknown::before {
  content: '';
}

[dir='rtl'] .ms-Icon--Unknown::before {
  content: '';
}

[dir='ltr'] .ms-Icon--UnknownMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--UnknownMirrored::before {
  content: '';
}

[dir='ltr'] .ms-Icon--UnknownSolid::before {
  content: '';
}

[dir='rtl'] .ms-Icon--UnknownSolid::before {
  content: '';
}

[dir='ltr'] .ms-Icon--UnknownMirroredSolid::before {
  content: '';
}

[dir='rtl'] .ms-Icon--UnknownMirroredSolid::before {
  content: '';
}

.ms-Icon--Unlock::before {
  content: '';
}

.ms-Icon--UnlockSolid::before {
  content: '';
}

.ms-Icon--Unpin::before {
  content: '';
}

.ms-Icon--UnpublishContent::before {
  content: '';
}

.ms-Icon--UnSetColor::before {
  content: '';
}

.ms-Icon--UnstackSelected::before {
  content: '';
}

.ms-Icon--Unsubscribe::before {
  content: '';
}

.ms-Icon--UnsyncFolder::before {
  content: '';
}

.ms-Icon--UnsyncOccurence::before {
  content: '';
}

.ms-Icon--Untag::before {
  content: '';
}

.ms-Icon--Up::before {
  content: '';
}

.ms-Icon--UpgradeAnalysis::before {
  content: '';
}

.ms-Icon--Upload::before {
  content: '';
}

.ms-Icon--USB::before {
  content: '';
}

.ms-Icon--UserEvent::before {
  content: '';
}

.ms-Icon--UserFollowed::before {
  content: '';
}

.ms-Icon--UserGauge::before {
  content: '';
}

.ms-Icon--UserOptional::before {
  content: '';
}

.ms-Icon--UserPause::before {
  content: '';
}

.ms-Icon--UserRemove::before {
  content: '';
}

.ms-Icon--UserSync::before {
  content: '';
}

.ms-Icon--UserWarning::before {
  content: '';
}

.ms-Icon--Vacation::before {
  content: '';
}

.ms-Icon--Variable::before {
  content: '';
}

.ms-Icon--Variable2::before {
  content: '';
}

.ms-Icon--VariableGroup::before {
  content: '';
}

.ms-Icon--VB::before {
  content: '';
}

.ms-Icon--VennDiagram::before {
  content: '';
}

.ms-Icon--VerifiedBrand::before {
  content: '';
}

.ms-Icon--VerifiedBrandSolid::before {
  content: '';
}

.ms-Icon--VersionControlPush::before {
  content: '';
}

.ms-Icon--VerticalDistributeCenter::before {
  content: '';
}

.ms-Icon--Video::before {
  content: '';
}

.ms-Icon--Video360Generic::before {
  content: '';
}

.ms-Icon--VideoLightOff::before {
  content: '';
}

.ms-Icon--VideoOff::before {
  content: '';
}

.ms-Icon--VideoSearch::before {
  content: '';
}

.ms-Icon--VideoSolid::before {
  content: '';
}

.ms-Icon--View::before {
  content: '';
}

.ms-Icon--ViewAll::before {
  content: '';
}

.ms-Icon--ViewAll2::before {
  content: '';
}

.ms-Icon--ViewDashboard::before {
  content: '';
}

.ms-Icon--ViewList::before {
  content: '';
}

.ms-Icon--ViewListGroup::before {
  content: '';
}

.ms-Icon--ViewListTree::before {
  content: '';
}

.ms-Icon--ViewOriginal::before {
  content: '';
}

.ms-Icon--VisioDiagram::before {
  content: '';
}

.ms-Icon--VisioDiagramSync::before {
  content: '';
}

.ms-Icon--VisioDocument::before {
  content: '';
}

.ms-Icon--VisioLogo::before {
  content: '';
}

.ms-Icon--VisioLogo16::before {
  content: '';
}

.ms-Icon--VisioLogoFill::before {
  content: '';
}

.ms-Icon--VisioLogoFill16::before {
  content: '';
}

.ms-Icon--VisioLogoInverse::before {
  content: '';
}

.ms-Icon--VisioLogoInverse16::before {
  content: '';
}

.ms-Icon--VisualBasicLanguage::before {
  content: '';
}

.ms-Icon--VisuallyImpaired::before {
  content: '';
}

.ms-Icon--VisualsFolder::before {
  content: '';
}

.ms-Icon--VisualsStore::before {
  content: '';
}

.ms-Icon--VisualStudioIDELogo32::before {
  content: '';
}

.ms-Icon--VisualStudioLogo::before {
  content: '';
}

.ms-Icon--VoicemailForward::before {
  content: '';
}

.ms-Icon--VoicemailIRM::before {
  content: '';
}

.ms-Icon--VoicemailReply::before {
  content: '';
}

.ms-Icon--Volume0::before {
  content: '';
}

.ms-Icon--Volume1::before {
  content: '';
}

.ms-Icon--Volume2::before {
  content: '';
}

.ms-Icon--Volume3::before {
  content: '';
}

.ms-Icon--VolumeDisabled::before {
  content: '';
}

.ms-Icon--VSTSAltLogo1::before {
  content: '';
}

.ms-Icon--VSTSAltLogo2::before {
  content: '';
}

.ms-Icon--VSTSLogo::before {
  content: '';
}

.ms-Icon--Waffle::before {
  content: '';
}

.ms-Icon--WaffleOffice365::before {
  content: '';
}

[dir='ltr'] .ms-Icon--WaitlistConfirm::before {
  content: '';
}

[dir='rtl'] .ms-Icon--WaitlistConfirm::before {
  content: '';
}

[dir='ltr'] .ms-Icon--WaitlistConfirmMirrored::before {
  content: '';
}

[dir='rtl'] .ms-Icon--WaitlistConfirmMirrored::before {
  content: '';
}

.ms-Icon--Warning::before {
  content: '';
}

.ms-Icon--Warning12::before {
  content: '';
}

.ms-Icon--WarningSolid::before {
  content: '';
}

.ms-Icon--WavingHand::before {
  content: '';
}

.ms-Icon--WebAppBuilderFragment::before {
  content: '';
}

.ms-Icon--WebAppBuilderFragmentCreate::before {
  content: '';
}

.ms-Icon--WebAppBuilderModule::before {
  content: '';
}

.ms-Icon--WebAppBuilderSlot::before {
  content: '';
}

.ms-Icon--Webcam2::before {
  content: '';
}

.ms-Icon--Webcam2Off::before {
  content: '';
}

.ms-Icon--WebComponents::before {
  content: '';
}

.ms-Icon--WebPublish::before {
  content: '';
}

.ms-Icon--Website::before {
  content: '';
}

.ms-Icon--WebTemplate::before {
  content: '';
}

.ms-Icon--Weights::before {
  content: '';
}

.ms-Icon--Wheelchair::before {
  content: '';
}

.ms-Icon--WhiteBoardApp16::before {
  content: '';
}

.ms-Icon--WhiteBoardApp32::before {
  content: '';
}

.ms-Icon--WifiEthernet::before {
  content: '';
}

.ms-Icon--WifiWarning4::before {
  content: '';
}

.ms-Icon--WindDirection::before {
  content: '';
}

.ms-Icon--WindowEdit::before {
  content: '';
}

.ms-Icon--WindowsLogo::before {
  content: '';
}

.ms-Icon--Wines::before {
  content: '';
}

.ms-Icon--WipePhone::before {
  content: '';
}

.ms-Icon--WordDocument::before {
  content: '';
}

.ms-Icon--WordLogo::before {
  content: '';
}

.ms-Icon--WordLogo16::before {
  content: '';
}

.ms-Icon--WordLogoFill::before {
  content: '';
}

.ms-Icon--WordLogoFill16::before {
  content: '';
}

.ms-Icon--WordLogoInverse::before {
  content: '';
}

.ms-Icon--WordLogoInverse16::before {
  content: '';
}

.ms-Icon--Work::before {
  content: '';
}

.ms-Icon--WorkFlow::before {
  content: '';
}

.ms-Icon--WorkforceManagement::before {
  content: '';
}

.ms-Icon--WorkItem::before {
  content: '';
}

.ms-Icon--WorkItemAlert::before {
  content: '';
}

.ms-Icon--WorkItemBar::before {
  content: '';
}

.ms-Icon--WorkItemBarSolid::before {
  content: '';
}

.ms-Icon--WorkItemBug::before {
  content: '';
}

.ms-Icon--World::before {
  content: '';
}

.ms-Icon--WorldClock::before {
  content: '';
}

.ms-Icon--YammerLogo::before {
  content: '';
}

.ms-Icon--ZipFolder::before {
  content: '';
}

.ms-Icon--Zoom::before {
  content: '';
}

.ms-Icon--ZoomIn::before {
  content: '';
}

.ms-Icon--ZoomOut::before {
  content: '';
}

.ms-Icon--ZoomToFit::before {
  content: '';
}

.ms-Icon--HumanResources::before {
  content: '';
}

.ms-Icon--StoreLogo::before {
  content: '';
}

.ms-Icon--OneDrive::before {
  content: '';
}

.ms-Icon--ToggleOff::before {
  content: '';
}

.ms-Icon--StoreLogoMed::before {
  content: '';
}

/*
  Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license
*/
@font-face {
  font-family: 'FabricMDL2Icons';
  src: url('https://static2.sharepointonline.com/files/fabric/assets/icons/fabricmdl2icons-3.54.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@media (max-width: 479.99999px) {
  .ms-hiddenSm,
  .ms-hiddenMdDown,
  .ms-hiddenLgDown,
  .ms-hiddenXlDown,
  .ms-hiddenXxlDown {
    display: none !important;
  }
}

@media (min-width: 480px) and (max-width: 639.99999px) {
  .ms-hiddenMd,
  .ms-hiddenMdUp,
  .ms-hiddenMdDown,
  .ms-hiddenLgDown,
  .ms-hiddenXlDown,
  .ms-hiddenXxlDown {
    display: none !important;
  }
}

@media (min-width: 640px) and (max-width: 1023.99999px) {
  .ms-hiddenMdUp,
  .ms-hiddenLg,
  .ms-hiddenLgUp,
  .ms-hiddenLgDown,
  .ms-hiddenXlDown,
  .ms-hiddenXxlDown {
    display: none !important;
  }
}

@media (min-width: 1024px) and (max-width: 1365.99999px) {
  .ms-hiddenMdUp,
  .ms-hiddenLgUp,
  .ms-hiddenXl,
  .ms-hiddenXlUp,
  .ms-hiddenXlDown,
  .ms-hiddenXxlDown {
    display: none !important;
  }
}

@media (min-width: 1366px) and (max-width: 1919.99999px) {
  .ms-hiddenMdUp,
  .ms-hiddenLgUp,
  .ms-hiddenXlUp,
  .ms-hiddenXxl,
  .ms-hiddenXxlUp,
  .ms-hiddenXxlDown {
    display: none !important;
  }
}

@media (min-width: 1920px) {
  .ms-hiddenMdUp,
  .ms-hiddenLgUp,
  .ms-hiddenXlUp,
  .ms-hiddenXxlUp,
  .ms-hiddenXxxl {
    display: none !important;
  }
}

.ms-sm12 {
  width: 100%;
}

.ms-sm11 {
  width: 91.66666666666666%;
}

.ms-sm10 {
  width: 83.33333333333334%;
}

.ms-sm9 {
  width: 75%;
}

.ms-sm8 {
  width: 66.66666666666666%;
}

.ms-sm7 {
  width: 58.333333333333336%;
}

.ms-sm6 {
  width: 50%;
}

.ms-sm5 {
  width: 41.66666666666667%;
}

.ms-sm4 {
  width: 33.33333333333333%;
}

.ms-sm3 {
  width: 25%;
}

.ms-sm2 {
  width: 16.666666666666664%;
}

.ms-sm1 {
  width: 8.333333333333332%;
}

[dir='ltr'] .ms-smPull12 {
  right: 100%;
}

[dir='rtl'] .ms-smPull12 {
  left: 100%;
}

[dir='ltr'] .ms-smPull11 {
  right: 91.66667%;
}

[dir='rtl'] .ms-smPull11 {
  left: 91.66667%;
}

[dir='ltr'] .ms-smPull10 {
  right: 83.33333%;
}

[dir='rtl'] .ms-smPull10 {
  left: 83.33333%;
}

[dir='ltr'] .ms-smPull9 {
  right: 75%;
}

[dir='rtl'] .ms-smPull9 {
  left: 75%;
}

[dir='ltr'] .ms-smPull8 {
  right: 66.66667%;
}

[dir='rtl'] .ms-smPull8 {
  left: 66.66667%;
}

[dir='ltr'] .ms-smPull7 {
  right: 58.33333%;
}

[dir='rtl'] .ms-smPull7 {
  left: 58.33333%;
}

[dir='ltr'] .ms-smPull6 {
  right: 50%;
}

[dir='rtl'] .ms-smPull6 {
  left: 50%;
}

[dir='ltr'] .ms-smPull5 {
  right: 41.66667%;
}

[dir='rtl'] .ms-smPull5 {
  left: 41.66667%;
}

[dir='ltr'] .ms-smPull4 {
  right: 33.33333%;
}

[dir='rtl'] .ms-smPull4 {
  left: 33.33333%;
}

[dir='ltr'] .ms-smPull3 {
  right: 25%;
}

[dir='rtl'] .ms-smPull3 {
  left: 25%;
}

[dir='ltr'] .ms-smPull2 {
  right: 16.66667%;
}

[dir='rtl'] .ms-smPull2 {
  left: 16.66667%;
}

[dir='ltr'] .ms-smPull1 {
  right: 8.33333%;
}

[dir='rtl'] .ms-smPull1 {
  left: 8.33333%;
}

[dir='ltr'] .ms-smPull0 {
  right: auto;
}

[dir='rtl'] .ms-smPull0 {
  left: auto;
}

[dir='ltr'] .ms-smPush12 {
  left: 100%;
}

[dir='rtl'] .ms-smPush12 {
  right: 100%;
}

[dir='ltr'] .ms-smPush11 {
  left: 91.66667%;
}

[dir='rtl'] .ms-smPush11 {
  right: 91.66667%;
}

[dir='ltr'] .ms-smPush10 {
  left: 83.33333%;
}

[dir='rtl'] .ms-smPush10 {
  right: 83.33333%;
}

[dir='ltr'] .ms-smPush9 {
  left: 75%;
}

[dir='rtl'] .ms-smPush9 {
  right: 75%;
}

[dir='ltr'] .ms-smPush8 {
  left: 66.66667%;
}

[dir='rtl'] .ms-smPush8 {
  right: 66.66667%;
}

[dir='ltr'] .ms-smPush7 {
  left: 58.33333%;
}

[dir='rtl'] .ms-smPush7 {
  right: 58.33333%;
}

[dir='ltr'] .ms-smPush6 {
  left: 50%;
}

[dir='rtl'] .ms-smPush6 {
  right: 50%;
}

[dir='ltr'] .ms-smPush5 {
  left: 41.66667%;
}

[dir='rtl'] .ms-smPush5 {
  right: 41.66667%;
}

[dir='ltr'] .ms-smPush4 {
  left: 33.33333%;
}

[dir='rtl'] .ms-smPush4 {
  right: 33.33333%;
}

[dir='ltr'] .ms-smPush3 {
  left: 25%;
}

[dir='rtl'] .ms-smPush3 {
  right: 25%;
}

[dir='ltr'] .ms-smPush2 {
  left: 16.66667%;
}

[dir='rtl'] .ms-smPush2 {
  right: 16.66667%;
}

[dir='ltr'] .ms-smPush1 {
  left: 8.33333%;
}

[dir='rtl'] .ms-smPush1 {
  right: 8.33333%;
}

[dir='ltr'] .ms-smPush0 {
  left: auto;
}

[dir='rtl'] .ms-smPush0 {
  right: auto;
}

[dir='ltr'] .ms-smOffset11 {
  margin-left: 91.66667%;
}

[dir='rtl'] .ms-smOffset11 {
  margin-right: 91.66667%;
}

[dir='ltr'] .ms-smOffset10 {
  margin-left: 83.33333%;
}

[dir='rtl'] .ms-smOffset10 {
  margin-right: 83.33333%;
}

[dir='ltr'] .ms-smOffset9 {
  margin-left: 75%;
}

[dir='rtl'] .ms-smOffset9 {
  margin-right: 75%;
}

[dir='ltr'] .ms-smOffset8 {
  margin-left: 66.66667%;
}

[dir='rtl'] .ms-smOffset8 {
  margin-right: 66.66667%;
}

[dir='ltr'] .ms-smOffset7 {
  margin-left: 58.33333%;
}

[dir='rtl'] .ms-smOffset7 {
  margin-right: 58.33333%;
}

[dir='ltr'] .ms-smOffset6 {
  margin-left: 50%;
}

[dir='rtl'] .ms-smOffset6 {
  margin-right: 50%;
}

[dir='ltr'] .ms-smOffset5 {
  margin-left: 41.66667%;
}

[dir='rtl'] .ms-smOffset5 {
  margin-right: 41.66667%;
}

[dir='ltr'] .ms-smOffset4 {
  margin-left: 33.33333%;
}

[dir='rtl'] .ms-smOffset4 {
  margin-right: 33.33333%;
}

[dir='ltr'] .ms-smOffset3 {
  margin-left: 25%;
}

[dir='rtl'] .ms-smOffset3 {
  margin-right: 25%;
}

[dir='ltr'] .ms-smOffset2 {
  margin-left: 16.66667%;
}

[dir='rtl'] .ms-smOffset2 {
  margin-right: 16.66667%;
}

[dir='ltr'] .ms-smOffset1 {
  margin-left: 8.33333%;
}

[dir='rtl'] .ms-smOffset1 {
  margin-right: 8.33333%;
}

[dir='ltr'] .ms-smOffset0 {
  margin-left: 0;
}

[dir='rtl'] .ms-smOffset0 {
  margin-right: 0;
}

@media (min-width: 480px) {
  .ms-md12 {
    width: 100%;
  }
}

@media (min-width: 480px) {
  .ms-md11 {
    width: 91.66666666666666%;
  }
}

@media (min-width: 480px) {
  .ms-md10 {
    width: 83.33333333333334%;
  }
}

@media (min-width: 480px) {
  .ms-md9 {
    width: 75%;
  }
}

@media (min-width: 480px) {
  .ms-md8 {
    width: 66.66666666666666%;
  }
}

@media (min-width: 480px) {
  .ms-md7 {
    width: 58.333333333333336%;
  }
}

@media (min-width: 480px) {
  .ms-md6 {
    width: 50%;
  }
}

@media (min-width: 480px) {
  .ms-md5 {
    width: 41.66666666666667%;
  }
}

@media (min-width: 480px) {
  .ms-md4 {
    width: 33.33333333333333%;
  }
}

@media (min-width: 480px) {
  .ms-md3 {
    width: 25%;
  }
}

@media (min-width: 480px) {
  .ms-md2 {
    width: 16.666666666666664%;
  }
}

@media (min-width: 480px) {
  .ms-md1 {
    width: 8.333333333333332%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdPull12 {
    right: 100%;
  }

  [dir='rtl'] .ms-mdPull12 {
    left: 100%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdPull11 {
    right: 91.66667%;
  }

  [dir='rtl'] .ms-mdPull11 {
    left: 91.66667%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdPull10 {
    right: 83.33333%;
  }

  [dir='rtl'] .ms-mdPull10 {
    left: 83.33333%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdPull9 {
    right: 75%;
  }

  [dir='rtl'] .ms-mdPull9 {
    left: 75%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdPull8 {
    right: 66.66667%;
  }

  [dir='rtl'] .ms-mdPull8 {
    left: 66.66667%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdPull7 {
    right: 58.33333%;
  }

  [dir='rtl'] .ms-mdPull7 {
    left: 58.33333%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdPull6 {
    right: 50%;
  }

  [dir='rtl'] .ms-mdPull6 {
    left: 50%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdPull5 {
    right: 41.66667%;
  }

  [dir='rtl'] .ms-mdPull5 {
    left: 41.66667%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdPull4 {
    right: 33.33333%;
  }

  [dir='rtl'] .ms-mdPull4 {
    left: 33.33333%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdPull3 {
    right: 25%;
  }

  [dir='rtl'] .ms-mdPull3 {
    left: 25%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdPull2 {
    right: 16.66667%;
  }

  [dir='rtl'] .ms-mdPull2 {
    left: 16.66667%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdPull1 {
    right: 8.33333%;
  }

  [dir='rtl'] .ms-mdPull1 {
    left: 8.33333%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdPull0 {
    right: auto;
  }

  [dir='rtl'] .ms-mdPull0 {
    left: auto;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdPush12 {
    left: 100%;
  }

  [dir='rtl'] .ms-mdPush12 {
    right: 100%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdPush11 {
    left: 91.66667%;
  }

  [dir='rtl'] .ms-mdPush11 {
    right: 91.66667%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdPush10 {
    left: 83.33333%;
  }

  [dir='rtl'] .ms-mdPush10 {
    right: 83.33333%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdPush9 {
    left: 75%;
  }

  [dir='rtl'] .ms-mdPush9 {
    right: 75%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdPush8 {
    left: 66.66667%;
  }

  [dir='rtl'] .ms-mdPush8 {
    right: 66.66667%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdPush7 {
    left: 58.33333%;
  }

  [dir='rtl'] .ms-mdPush7 {
    right: 58.33333%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdPush6 {
    left: 50%;
  }

  [dir='rtl'] .ms-mdPush6 {
    right: 50%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdPush5 {
    left: 41.66667%;
  }

  [dir='rtl'] .ms-mdPush5 {
    right: 41.66667%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdPush4 {
    left: 33.33333%;
  }

  [dir='rtl'] .ms-mdPush4 {
    right: 33.33333%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdPush3 {
    left: 25%;
  }

  [dir='rtl'] .ms-mdPush3 {
    right: 25%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdPush2 {
    left: 16.66667%;
  }

  [dir='rtl'] .ms-mdPush2 {
    right: 16.66667%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdPush1 {
    left: 8.33333%;
  }

  [dir='rtl'] .ms-mdPush1 {
    right: 8.33333%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdPush0 {
    left: auto;
  }

  [dir='rtl'] .ms-mdPush0 {
    right: auto;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdOffset11 {
    margin-left: 91.66667%;
  }

  [dir='rtl'] .ms-mdOffset11 {
    margin-right: 91.66667%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdOffset10 {
    margin-left: 83.33333%;
  }

  [dir='rtl'] .ms-mdOffset10 {
    margin-right: 83.33333%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdOffset9 {
    margin-left: 75%;
  }

  [dir='rtl'] .ms-mdOffset9 {
    margin-right: 75%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdOffset8 {
    margin-left: 66.66667%;
  }

  [dir='rtl'] .ms-mdOffset8 {
    margin-right: 66.66667%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdOffset7 {
    margin-left: 58.33333%;
  }

  [dir='rtl'] .ms-mdOffset7 {
    margin-right: 58.33333%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdOffset6 {
    margin-left: 50%;
  }

  [dir='rtl'] .ms-mdOffset6 {
    margin-right: 50%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdOffset5 {
    margin-left: 41.66667%;
  }

  [dir='rtl'] .ms-mdOffset5 {
    margin-right: 41.66667%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdOffset4 {
    margin-left: 33.33333%;
  }

  [dir='rtl'] .ms-mdOffset4 {
    margin-right: 33.33333%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdOffset3 {
    margin-left: 25%;
  }

  [dir='rtl'] .ms-mdOffset3 {
    margin-right: 25%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdOffset2 {
    margin-left: 16.66667%;
  }

  [dir='rtl'] .ms-mdOffset2 {
    margin-right: 16.66667%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdOffset1 {
    margin-left: 8.33333%;
  }

  [dir='rtl'] .ms-mdOffset1 {
    margin-right: 8.33333%;
  }
}

@media (min-width: 480px) {
  [dir='ltr'] .ms-mdOffset0 {
    margin-left: 0;
  }

  [dir='rtl'] .ms-mdOffset0 {
    margin-right: 0;
  }
}

@media (min-width: 640px) {
  .ms-lg12 {
    width: 100%;
  }
}

@media (min-width: 640px) {
  .ms-lg11 {
    width: 91.66666666666666%;
  }
}

@media (min-width: 640px) {
  .ms-lg10 {
    width: 83.33333333333334%;
  }
}

@media (min-width: 640px) {
  .ms-lg9 {
    width: 75%;
  }
}

@media (min-width: 640px) {
  .ms-lg8 {
    width: 66.66666666666666%;
  }
}

@media (min-width: 640px) {
  .ms-lg7 {
    width: 58.333333333333336%;
  }
}

@media (min-width: 640px) {
  .ms-lg6 {
    width: 50%;
  }
}

@media (min-width: 640px) {
  .ms-lg5 {
    width: 41.66666666666667%;
  }
}

@media (min-width: 640px) {
  .ms-lg4 {
    width: 33.33333333333333%;
  }
}

@media (min-width: 640px) {
  .ms-lg3 {
    width: 25%;
  }
}

@media (min-width: 640px) {
  .ms-lg2 {
    width: 16.666666666666664%;
  }
}

@media (min-width: 640px) {
  .ms-lg1 {
    width: 8.333333333333332%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgPull12 {
    right: 100%;
  }

  [dir='rtl'] .ms-lgPull12 {
    left: 100%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgPull11 {
    right: 91.66667%;
  }

  [dir='rtl'] .ms-lgPull11 {
    left: 91.66667%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgPull10 {
    right: 83.33333%;
  }

  [dir='rtl'] .ms-lgPull10 {
    left: 83.33333%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgPull9 {
    right: 75%;
  }

  [dir='rtl'] .ms-lgPull9 {
    left: 75%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgPull8 {
    right: 66.66667%;
  }

  [dir='rtl'] .ms-lgPull8 {
    left: 66.66667%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgPull7 {
    right: 58.33333%;
  }

  [dir='rtl'] .ms-lgPull7 {
    left: 58.33333%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgPull6 {
    right: 50%;
  }

  [dir='rtl'] .ms-lgPull6 {
    left: 50%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgPull5 {
    right: 41.66667%;
  }

  [dir='rtl'] .ms-lgPull5 {
    left: 41.66667%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgPull4 {
    right: 33.33333%;
  }

  [dir='rtl'] .ms-lgPull4 {
    left: 33.33333%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgPull3 {
    right: 25%;
  }

  [dir='rtl'] .ms-lgPull3 {
    left: 25%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgPull2 {
    right: 16.66667%;
  }

  [dir='rtl'] .ms-lgPull2 {
    left: 16.66667%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgPull1 {
    right: 8.33333%;
  }

  [dir='rtl'] .ms-lgPull1 {
    left: 8.33333%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgPull0 {
    right: auto;
  }

  [dir='rtl'] .ms-lgPull0 {
    left: auto;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgPush12 {
    left: 100%;
  }

  [dir='rtl'] .ms-lgPush12 {
    right: 100%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgPush11 {
    left: 91.66667%;
  }

  [dir='rtl'] .ms-lgPush11 {
    right: 91.66667%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgPush10 {
    left: 83.33333%;
  }

  [dir='rtl'] .ms-lgPush10 {
    right: 83.33333%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgPush9 {
    left: 75%;
  }

  [dir='rtl'] .ms-lgPush9 {
    right: 75%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgPush8 {
    left: 66.66667%;
  }

  [dir='rtl'] .ms-lgPush8 {
    right: 66.66667%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgPush7 {
    left: 58.33333%;
  }

  [dir='rtl'] .ms-lgPush7 {
    right: 58.33333%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgPush6 {
    left: 50%;
  }

  [dir='rtl'] .ms-lgPush6 {
    right: 50%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgPush5 {
    left: 41.66667%;
  }

  [dir='rtl'] .ms-lgPush5 {
    right: 41.66667%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgPush4 {
    left: 33.33333%;
  }

  [dir='rtl'] .ms-lgPush4 {
    right: 33.33333%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgPush3 {
    left: 25%;
  }

  [dir='rtl'] .ms-lgPush3 {
    right: 25%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgPush2 {
    left: 16.66667%;
  }

  [dir='rtl'] .ms-lgPush2 {
    right: 16.66667%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgPush1 {
    left: 8.33333%;
  }

  [dir='rtl'] .ms-lgPush1 {
    right: 8.33333%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgPush0 {
    left: auto;
  }

  [dir='rtl'] .ms-lgPush0 {
    right: auto;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgOffset11 {
    margin-left: 91.66667%;
  }

  [dir='rtl'] .ms-lgOffset11 {
    margin-right: 91.66667%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgOffset10 {
    margin-left: 83.33333%;
  }

  [dir='rtl'] .ms-lgOffset10 {
    margin-right: 83.33333%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgOffset9 {
    margin-left: 75%;
  }

  [dir='rtl'] .ms-lgOffset9 {
    margin-right: 75%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgOffset8 {
    margin-left: 66.66667%;
  }

  [dir='rtl'] .ms-lgOffset8 {
    margin-right: 66.66667%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgOffset7 {
    margin-left: 58.33333%;
  }

  [dir='rtl'] .ms-lgOffset7 {
    margin-right: 58.33333%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgOffset6 {
    margin-left: 50%;
  }

  [dir='rtl'] .ms-lgOffset6 {
    margin-right: 50%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgOffset5 {
    margin-left: 41.66667%;
  }

  [dir='rtl'] .ms-lgOffset5 {
    margin-right: 41.66667%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgOffset4 {
    margin-left: 33.33333%;
  }

  [dir='rtl'] .ms-lgOffset4 {
    margin-right: 33.33333%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgOffset3 {
    margin-left: 25%;
  }

  [dir='rtl'] .ms-lgOffset3 {
    margin-right: 25%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgOffset2 {
    margin-left: 16.66667%;
  }

  [dir='rtl'] .ms-lgOffset2 {
    margin-right: 16.66667%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgOffset1 {
    margin-left: 8.33333%;
  }

  [dir='rtl'] .ms-lgOffset1 {
    margin-right: 8.33333%;
  }
}

@media (min-width: 640px) {
  [dir='ltr'] .ms-lgOffset0 {
    margin-left: 0;
  }

  [dir='rtl'] .ms-lgOffset0 {
    margin-right: 0;
  }
}

@media (min-width: 1024px) {
  .ms-xl12 {
    width: 100%;
  }
}

@media (min-width: 1024px) {
  .ms-xl11 {
    width: 91.66666666666666%;
  }
}

@media (min-width: 1024px) {
  .ms-xl10 {
    width: 83.33333333333334%;
  }
}

@media (min-width: 1024px) {
  .ms-xl9 {
    width: 75%;
  }
}

@media (min-width: 1024px) {
  .ms-xl8 {
    width: 66.66666666666666%;
  }
}

@media (min-width: 1024px) {
  .ms-xl7 {
    width: 58.333333333333336%;
  }
}

@media (min-width: 1024px) {
  .ms-xl6 {
    width: 50%;
  }
}

@media (min-width: 1024px) {
  .ms-xl5 {
    width: 41.66666666666667%;
  }
}

@media (min-width: 1024px) {
  .ms-xl4 {
    width: 33.33333333333333%;
  }
}

@media (min-width: 1024px) {
  .ms-xl3 {
    width: 25%;
  }
}

@media (min-width: 1024px) {
  .ms-xl2 {
    width: 16.666666666666664%;
  }
}

@media (min-width: 1024px) {
  .ms-xl1 {
    width: 8.333333333333332%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlPull12 {
    right: 100%;
  }

  [dir='rtl'] .ms-xlPull12 {
    left: 100%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlPull11 {
    right: 91.66667%;
  }

  [dir='rtl'] .ms-xlPull11 {
    left: 91.66667%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlPull10 {
    right: 83.33333%;
  }

  [dir='rtl'] .ms-xlPull10 {
    left: 83.33333%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlPull9 {
    right: 75%;
  }

  [dir='rtl'] .ms-xlPull9 {
    left: 75%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlPull8 {
    right: 66.66667%;
  }

  [dir='rtl'] .ms-xlPull8 {
    left: 66.66667%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlPull7 {
    right: 58.33333%;
  }

  [dir='rtl'] .ms-xlPull7 {
    left: 58.33333%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlPull6 {
    right: 50%;
  }

  [dir='rtl'] .ms-xlPull6 {
    left: 50%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlPull5 {
    right: 41.66667%;
  }

  [dir='rtl'] .ms-xlPull5 {
    left: 41.66667%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlPull4 {
    right: 33.33333%;
  }

  [dir='rtl'] .ms-xlPull4 {
    left: 33.33333%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlPull3 {
    right: 25%;
  }

  [dir='rtl'] .ms-xlPull3 {
    left: 25%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlPull2 {
    right: 16.66667%;
  }

  [dir='rtl'] .ms-xlPull2 {
    left: 16.66667%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlPull1 {
    right: 8.33333%;
  }

  [dir='rtl'] .ms-xlPull1 {
    left: 8.33333%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlPull0 {
    right: auto;
  }

  [dir='rtl'] .ms-xlPull0 {
    left: auto;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlPush12 {
    left: 100%;
  }

  [dir='rtl'] .ms-xlPush12 {
    right: 100%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlPush11 {
    left: 91.66667%;
  }

  [dir='rtl'] .ms-xlPush11 {
    right: 91.66667%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlPush10 {
    left: 83.33333%;
  }

  [dir='rtl'] .ms-xlPush10 {
    right: 83.33333%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlPush9 {
    left: 75%;
  }

  [dir='rtl'] .ms-xlPush9 {
    right: 75%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlPush8 {
    left: 66.66667%;
  }

  [dir='rtl'] .ms-xlPush8 {
    right: 66.66667%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlPush7 {
    left: 58.33333%;
  }

  [dir='rtl'] .ms-xlPush7 {
    right: 58.33333%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlPush6 {
    left: 50%;
  }

  [dir='rtl'] .ms-xlPush6 {
    right: 50%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlPush5 {
    left: 41.66667%;
  }

  [dir='rtl'] .ms-xlPush5 {
    right: 41.66667%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlPush4 {
    left: 33.33333%;
  }

  [dir='rtl'] .ms-xlPush4 {
    right: 33.33333%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlPush3 {
    left: 25%;
  }

  [dir='rtl'] .ms-xlPush3 {
    right: 25%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlPush2 {
    left: 16.66667%;
  }

  [dir='rtl'] .ms-xlPush2 {
    right: 16.66667%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlPush1 {
    left: 8.33333%;
  }

  [dir='rtl'] .ms-xlPush1 {
    right: 8.33333%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlPush0 {
    left: auto;
  }

  [dir='rtl'] .ms-xlPush0 {
    right: auto;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlOffset11 {
    margin-left: 91.66667%;
  }

  [dir='rtl'] .ms-xlOffset11 {
    margin-right: 91.66667%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlOffset10 {
    margin-left: 83.33333%;
  }

  [dir='rtl'] .ms-xlOffset10 {
    margin-right: 83.33333%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlOffset9 {
    margin-left: 75%;
  }

  [dir='rtl'] .ms-xlOffset9 {
    margin-right: 75%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlOffset8 {
    margin-left: 66.66667%;
  }

  [dir='rtl'] .ms-xlOffset8 {
    margin-right: 66.66667%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlOffset7 {
    margin-left: 58.33333%;
  }

  [dir='rtl'] .ms-xlOffset7 {
    margin-right: 58.33333%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlOffset6 {
    margin-left: 50%;
  }

  [dir='rtl'] .ms-xlOffset6 {
    margin-right: 50%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlOffset5 {
    margin-left: 41.66667%;
  }

  [dir='rtl'] .ms-xlOffset5 {
    margin-right: 41.66667%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlOffset4 {
    margin-left: 33.33333%;
  }

  [dir='rtl'] .ms-xlOffset4 {
    margin-right: 33.33333%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlOffset3 {
    margin-left: 25%;
  }

  [dir='rtl'] .ms-xlOffset3 {
    margin-right: 25%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlOffset2 {
    margin-left: 16.66667%;
  }

  [dir='rtl'] .ms-xlOffset2 {
    margin-right: 16.66667%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlOffset1 {
    margin-left: 8.33333%;
  }

  [dir='rtl'] .ms-xlOffset1 {
    margin-right: 8.33333%;
  }
}

@media (min-width: 1024px) {
  [dir='ltr'] .ms-xlOffset0 {
    margin-left: 0;
  }

  [dir='rtl'] .ms-xlOffset0 {
    margin-right: 0;
  }
}

@media (min-width: 1366px) {
  .ms-xxl12 {
    width: 100%;
  }
}

@media (min-width: 1366px) {
  .ms-xxl11 {
    width: 91.66666666666666%;
  }
}

@media (min-width: 1366px) {
  .ms-xxl10 {
    width: 83.33333333333334%;
  }
}

@media (min-width: 1366px) {
  .ms-xxl9 {
    width: 75%;
  }
}

@media (min-width: 1366px) {
  .ms-xxl8 {
    width: 66.66666666666666%;
  }
}

@media (min-width: 1366px) {
  .ms-xxl7 {
    width: 58.333333333333336%;
  }
}

@media (min-width: 1366px) {
  .ms-xxl6 {
    width: 50%;
  }
}

@media (min-width: 1366px) {
  .ms-xxl5 {
    width: 41.66666666666667%;
  }
}

@media (min-width: 1366px) {
  .ms-xxl4 {
    width: 33.33333333333333%;
  }
}

@media (min-width: 1366px) {
  .ms-xxl3 {
    width: 25%;
  }
}

@media (min-width: 1366px) {
  .ms-xxl2 {
    width: 16.666666666666664%;
  }
}

@media (min-width: 1366px) {
  .ms-xxl1 {
    width: 8.333333333333332%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlPull12 {
    right: 100%;
  }

  [dir='rtl'] .ms-xxlPull12 {
    left: 100%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlPull11 {
    right: 91.66667%;
  }

  [dir='rtl'] .ms-xxlPull11 {
    left: 91.66667%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlPull10 {
    right: 83.33333%;
  }

  [dir='rtl'] .ms-xxlPull10 {
    left: 83.33333%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlPull9 {
    right: 75%;
  }

  [dir='rtl'] .ms-xxlPull9 {
    left: 75%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlPull8 {
    right: 66.66667%;
  }

  [dir='rtl'] .ms-xxlPull8 {
    left: 66.66667%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlPull7 {
    right: 58.33333%;
  }

  [dir='rtl'] .ms-xxlPull7 {
    left: 58.33333%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlPull6 {
    right: 50%;
  }

  [dir='rtl'] .ms-xxlPull6 {
    left: 50%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlPull5 {
    right: 41.66667%;
  }

  [dir='rtl'] .ms-xxlPull5 {
    left: 41.66667%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlPull4 {
    right: 33.33333%;
  }

  [dir='rtl'] .ms-xxlPull4 {
    left: 33.33333%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlPull3 {
    right: 25%;
  }

  [dir='rtl'] .ms-xxlPull3 {
    left: 25%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlPull2 {
    right: 16.66667%;
  }

  [dir='rtl'] .ms-xxlPull2 {
    left: 16.66667%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlPull1 {
    right: 8.33333%;
  }

  [dir='rtl'] .ms-xxlPull1 {
    left: 8.33333%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlPull0 {
    right: auto;
  }

  [dir='rtl'] .ms-xxlPull0 {
    left: auto;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlPush12 {
    left: 100%;
  }

  [dir='rtl'] .ms-xxlPush12 {
    right: 100%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlPush11 {
    left: 91.66667%;
  }

  [dir='rtl'] .ms-xxlPush11 {
    right: 91.66667%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlPush10 {
    left: 83.33333%;
  }

  [dir='rtl'] .ms-xxlPush10 {
    right: 83.33333%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlPush9 {
    left: 75%;
  }

  [dir='rtl'] .ms-xxlPush9 {
    right: 75%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlPush8 {
    left: 66.66667%;
  }

  [dir='rtl'] .ms-xxlPush8 {
    right: 66.66667%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlPush7 {
    left: 58.33333%;
  }

  [dir='rtl'] .ms-xxlPush7 {
    right: 58.33333%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlPush6 {
    left: 50%;
  }

  [dir='rtl'] .ms-xxlPush6 {
    right: 50%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlPush5 {
    left: 41.66667%;
  }

  [dir='rtl'] .ms-xxlPush5 {
    right: 41.66667%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlPush4 {
    left: 33.33333%;
  }

  [dir='rtl'] .ms-xxlPush4 {
    right: 33.33333%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlPush3 {
    left: 25%;
  }

  [dir='rtl'] .ms-xxlPush3 {
    right: 25%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlPush2 {
    left: 16.66667%;
  }

  [dir='rtl'] .ms-xxlPush2 {
    right: 16.66667%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlPush1 {
    left: 8.33333%;
  }

  [dir='rtl'] .ms-xxlPush1 {
    right: 8.33333%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlPush0 {
    left: auto;
  }

  [dir='rtl'] .ms-xxlPush0 {
    right: auto;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlOffset11 {
    margin-left: 91.66667%;
  }

  [dir='rtl'] .ms-xxlOffset11 {
    margin-right: 91.66667%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlOffset10 {
    margin-left: 83.33333%;
  }

  [dir='rtl'] .ms-xxlOffset10 {
    margin-right: 83.33333%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlOffset9 {
    margin-left: 75%;
  }

  [dir='rtl'] .ms-xxlOffset9 {
    margin-right: 75%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlOffset8 {
    margin-left: 66.66667%;
  }

  [dir='rtl'] .ms-xxlOffset8 {
    margin-right: 66.66667%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlOffset7 {
    margin-left: 58.33333%;
  }

  [dir='rtl'] .ms-xxlOffset7 {
    margin-right: 58.33333%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlOffset6 {
    margin-left: 50%;
  }

  [dir='rtl'] .ms-xxlOffset6 {
    margin-right: 50%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlOffset5 {
    margin-left: 41.66667%;
  }

  [dir='rtl'] .ms-xxlOffset5 {
    margin-right: 41.66667%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlOffset4 {
    margin-left: 33.33333%;
  }

  [dir='rtl'] .ms-xxlOffset4 {
    margin-right: 33.33333%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlOffset3 {
    margin-left: 25%;
  }

  [dir='rtl'] .ms-xxlOffset3 {
    margin-right: 25%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlOffset2 {
    margin-left: 16.66667%;
  }

  [dir='rtl'] .ms-xxlOffset2 {
    margin-right: 16.66667%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlOffset1 {
    margin-left: 8.33333%;
  }

  [dir='rtl'] .ms-xxlOffset1 {
    margin-right: 8.33333%;
  }
}

@media (min-width: 1366px) {
  [dir='ltr'] .ms-xxlOffset0 {
    margin-left: 0;
  }

  [dir='rtl'] .ms-xxlOffset0 {
    margin-right: 0;
  }
}

@media (min-width: 1920px) {
  .ms-xxxl12 {
    width: 100%;
  }
}

@media (min-width: 1920px) {
  .ms-xxxl11 {
    width: 91.66666666666666%;
  }
}

@media (min-width: 1920px) {
  .ms-xxxl10 {
    width: 83.33333333333334%;
  }
}

@media (min-width: 1920px) {
  .ms-xxxl9 {
    width: 75%;
  }
}

@media (min-width: 1920px) {
  .ms-xxxl8 {
    width: 66.66666666666666%;
  }
}

@media (min-width: 1920px) {
  .ms-xxxl7 {
    width: 58.333333333333336%;
  }
}

@media (min-width: 1920px) {
  .ms-xxxl6 {
    width: 50%;
  }
}

@media (min-width: 1920px) {
  .ms-xxxl5 {
    width: 41.66666666666667%;
  }
}

@media (min-width: 1920px) {
  .ms-xxxl4 {
    width: 33.33333333333333%;
  }
}

@media (min-width: 1920px) {
  .ms-xxxl3 {
    width: 25%;
  }
}

@media (min-width: 1920px) {
  .ms-xxxl2 {
    width: 16.666666666666664%;
  }
}

@media (min-width: 1920px) {
  .ms-xxxl1 {
    width: 8.333333333333332%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlPull12 {
    right: 100%;
  }

  [dir='rtl'] .ms-xxxlPull12 {
    left: 100%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlPull11 {
    right: 91.66667%;
  }

  [dir='rtl'] .ms-xxxlPull11 {
    left: 91.66667%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlPull10 {
    right: 83.33333%;
  }

  [dir='rtl'] .ms-xxxlPull10 {
    left: 83.33333%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlPull9 {
    right: 75%;
  }

  [dir='rtl'] .ms-xxxlPull9 {
    left: 75%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlPull8 {
    right: 66.66667%;
  }

  [dir='rtl'] .ms-xxxlPull8 {
    left: 66.66667%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlPull7 {
    right: 58.33333%;
  }

  [dir='rtl'] .ms-xxxlPull7 {
    left: 58.33333%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlPull6 {
    right: 50%;
  }

  [dir='rtl'] .ms-xxxlPull6 {
    left: 50%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlPull5 {
    right: 41.66667%;
  }

  [dir='rtl'] .ms-xxxlPull5 {
    left: 41.66667%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlPull4 {
    right: 33.33333%;
  }

  [dir='rtl'] .ms-xxxlPull4 {
    left: 33.33333%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlPull3 {
    right: 25%;
  }

  [dir='rtl'] .ms-xxxlPull3 {
    left: 25%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlPull2 {
    right: 16.66667%;
  }

  [dir='rtl'] .ms-xxxlPull2 {
    left: 16.66667%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlPull1 {
    right: 8.33333%;
  }

  [dir='rtl'] .ms-xxxlPull1 {
    left: 8.33333%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlPull0 {
    right: auto;
  }

  [dir='rtl'] .ms-xxxlPull0 {
    left: auto;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlPush12 {
    left: 100%;
  }

  [dir='rtl'] .ms-xxxlPush12 {
    right: 100%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlPush11 {
    left: 91.66667%;
  }

  [dir='rtl'] .ms-xxxlPush11 {
    right: 91.66667%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlPush10 {
    left: 83.33333%;
  }

  [dir='rtl'] .ms-xxxlPush10 {
    right: 83.33333%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlPush9 {
    left: 75%;
  }

  [dir='rtl'] .ms-xxxlPush9 {
    right: 75%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlPush8 {
    left: 66.66667%;
  }

  [dir='rtl'] .ms-xxxlPush8 {
    right: 66.66667%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlPush7 {
    left: 58.33333%;
  }

  [dir='rtl'] .ms-xxxlPush7 {
    right: 58.33333%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlPush6 {
    left: 50%;
  }

  [dir='rtl'] .ms-xxxlPush6 {
    right: 50%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlPush5 {
    left: 41.66667%;
  }

  [dir='rtl'] .ms-xxxlPush5 {
    right: 41.66667%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlPush4 {
    left: 33.33333%;
  }

  [dir='rtl'] .ms-xxxlPush4 {
    right: 33.33333%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlPush3 {
    left: 25%;
  }

  [dir='rtl'] .ms-xxxlPush3 {
    right: 25%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlPush2 {
    left: 16.66667%;
  }

  [dir='rtl'] .ms-xxxlPush2 {
    right: 16.66667%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlPush1 {
    left: 8.33333%;
  }

  [dir='rtl'] .ms-xxxlPush1 {
    right: 8.33333%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlPush0 {
    left: auto;
  }

  [dir='rtl'] .ms-xxxlPush0 {
    right: auto;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlOffset11 {
    margin-left: 91.66667%;
  }

  [dir='rtl'] .ms-xxxlOffset11 {
    margin-right: 91.66667%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlOffset10 {
    margin-left: 83.33333%;
  }

  [dir='rtl'] .ms-xxxlOffset10 {
    margin-right: 83.33333%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlOffset9 {
    margin-left: 75%;
  }

  [dir='rtl'] .ms-xxxlOffset9 {
    margin-right: 75%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlOffset8 {
    margin-left: 66.66667%;
  }

  [dir='rtl'] .ms-xxxlOffset8 {
    margin-right: 66.66667%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlOffset7 {
    margin-left: 58.33333%;
  }

  [dir='rtl'] .ms-xxxlOffset7 {
    margin-right: 58.33333%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlOffset6 {
    margin-left: 50%;
  }

  [dir='rtl'] .ms-xxxlOffset6 {
    margin-right: 50%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlOffset5 {
    margin-left: 41.66667%;
  }

  [dir='rtl'] .ms-xxxlOffset5 {
    margin-right: 41.66667%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlOffset4 {
    margin-left: 33.33333%;
  }

  [dir='rtl'] .ms-xxxlOffset4 {
    margin-right: 33.33333%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlOffset3 {
    margin-left: 25%;
  }

  [dir='rtl'] .ms-xxxlOffset3 {
    margin-right: 25%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlOffset2 {
    margin-left: 16.66667%;
  }

  [dir='rtl'] .ms-xxxlOffset2 {
    margin-right: 16.66667%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlOffset1 {
    margin-left: 8.33333%;
  }

  [dir='rtl'] .ms-xxxlOffset1 {
    margin-right: 8.33333%;
  }
}

@media (min-width: 1920px) {
  [dir='ltr'] .ms-xxxlOffset0 {
    margin-left: 0;
  }

  [dir='rtl'] .ms-xxxlOffset0 {
    margin-right: 0;
  }
}

.ms-borderBox,
.ms-borderBox::before,
.ms-borderBox::after {
  box-sizing: border-box;
}

.ms-borderBase {
  border: 1px solid;
}

.ms-clearfix {
  zoom: 1;
}

.ms-clearfix::before,
.ms-clearfix::after {
  display: table;
  content: '';
  line-height: 0;
}

.ms-clearfix::after {
  clear: both;
}

.ms-normalize {
  box-sizing: border-box;
  box-shadow: none;
  margin: 0;
  padding: 0;
}

[dir='ltr'] .ms-textAlignLeft {
  text-align: left;
}

[dir='rtl'] .ms-textAlignLeft {
  text-align: right;
}

[dir='ltr'] .ms-textAlignRight {
  text-align: right;
}

[dir='rtl'] .ms-textAlignRight {
  text-align: left;
}

.ms-textAlignCenter {
  text-align: center;
}

.ms-screenReaderOnly {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.ms-textTruncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}

.ms-noWrap {
  white-space: nowrap;
}

.ms-Fabric {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #323130;
  font-family: 'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
  font-size: 14px;
}

.ms-Fabric button,
.ms-Fabric input,
.ms-Fabric textarea {
  font-family: inherit;
}

*[lang^='ar'] .ms-Fabric,
.ms-Fabric *[lang^='ar'],
.ms-Fabric[lang^='ar'] {
  font-family: 'Segoe UI Web (Arabic)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
}

*[lang^='bg'] .ms-Fabric,
.ms-Fabric *[lang^='bg'],
.ms-Fabric[lang^='bg'] {
  font-family: 'Segoe UI Web (Cyrillic)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
}

*[lang^='cs'] .ms-Fabric,
.ms-Fabric *[lang^='cs'],
.ms-Fabric[lang^='cs'] {
  font-family: 'Segoe UI Web (East European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
}

*[lang^='el'] .ms-Fabric,
.ms-Fabric *[lang^='el'],
.ms-Fabric[lang^='el'] {
  font-family: 'Segoe UI Web (Greek)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
}

*[lang^='et'] .ms-Fabric,
.ms-Fabric *[lang^='et'],
.ms-Fabric[lang^='et'] {
  font-family: 'Segoe UI Web (East European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
}

*[lang^='he'] .ms-Fabric,
.ms-Fabric *[lang^='he'],
.ms-Fabric[lang^='he'] {
  font-family: 'Segoe UI Web (Hebrew)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
}

*[lang^='hi'] .ms-Fabric,
.ms-Fabric *[lang^='hi'],
.ms-Fabric[lang^='hi'] {
  font-family: 'Nirmala UI', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
}

*[lang^='hr'] .ms-Fabric,
.ms-Fabric *[lang^='hr'],
.ms-Fabric[lang^='hr'] {
  font-family: 'Segoe UI Web (East European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
}

*[lang^='hu'] .ms-Fabric,
.ms-Fabric *[lang^='hu'],
.ms-Fabric[lang^='hu'] {
  font-family: 'Segoe UI Web (East European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
}

*[lang^='ja'] .ms-Fabric,
.ms-Fabric *[lang^='ja'],
.ms-Fabric[lang^='ja'] {
  font-family: 'Yu Gothic UI', 'Meiryo UI', Meiryo, 'MS Pgothic', Osaka, 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
}

*[lang^='kk'] .ms-Fabric,
.ms-Fabric *[lang^='kk'],
.ms-Fabric[lang^='kk'] {
  font-family: 'Segoe UI Web (East European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
}

*[lang^='ko'] .ms-Fabric,
.ms-Fabric *[lang^='ko'],
.ms-Fabric[lang^='ko'] {
  font-family: 'Malgun Gothic', Gulim, 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
}

*[lang^='lo'] .ms-Fabric,
.ms-Fabric *[lang^='lo'],
.ms-Fabric[lang^='lo'] {
  font-family: 'Leelawadee UI Web', 'Lao UI', DokChampa, 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
}

*[lang^='lt'] .ms-Fabric,
.ms-Fabric *[lang^='lt'],
.ms-Fabric[lang^='lt'] {
  font-family: 'Segoe UI Web (East European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
}

*[lang^='lv'] .ms-Fabric,
.ms-Fabric *[lang^='lv'],
.ms-Fabric[lang^='lv'] {
  font-family: 'Segoe UI Web (East European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
}

*[lang^='pl'] .ms-Fabric,
.ms-Fabric *[lang^='pl'],
.ms-Fabric[lang^='pl'] {
  font-family: 'Segoe UI Web (East European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
}

*[lang^='ru'] .ms-Fabric,
.ms-Fabric *[lang^='ru'],
.ms-Fabric[lang^='ru'] {
  font-family: 'Segoe UI Web (Cyrillic)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
}

*[lang^='sk'] .ms-Fabric,
.ms-Fabric *[lang^='sk'],
.ms-Fabric[lang^='sk'] {
  font-family: 'Segoe UI Web (East European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
}

*[lang^='sr-latn'] .ms-Fabric,
.ms-Fabric *[lang^='sr-latn'],
.ms-Fabric[lang^='sr-latn'] {
  font-family: 'Segoe UI Web (East European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
}

*[lang^='th'] .ms-Fabric,
.ms-Fabric *[lang^='th'],
.ms-Fabric[lang^='th'] {
  font-family: 'Leelawadee UI Web', 'Kmer UI', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
}

*[lang^='tr'] .ms-Fabric,
.ms-Fabric *[lang^='tr'],
.ms-Fabric[lang^='tr'] {
  font-family: 'Segoe UI Web (East European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
}

*[lang^='uk'] .ms-Fabric,
.ms-Fabric *[lang^='uk'],
.ms-Fabric[lang^='uk'] {
  font-family: 'Segoe UI Web (Cyrillic)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
}

*[lang^='vi'] .ms-Fabric,
.ms-Fabric *[lang^='vi'],
.ms-Fabric[lang^='vi'] {
  font-family: 'Segoe UI Web (Vietnamese)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
}

*[lang^='zh-hans'] .ms-Fabric,
.ms-Fabric *[lang^='zh-hans'],
.ms-Fabric[lang^='zh-hans'] {
  font-family: 'Microsoft Yahei UI', Verdana, Simsun, 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
}

*[lang^='zh-hant'] .ms-Fabric,
.ms-Fabric *[lang^='zh-hant'],
.ms-Fabric[lang^='zh-hant'] {
  font-family: 'Microsoft Jhenghei UI', Pmingliu, 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
}

.ms-Fabric--selawik {
  font-family: 'Selawik Web', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
}


`;

const FluentCss = () => {
	return (
		<Head>
			<style>{FluentCssString}</style>
		</Head>
	);
};
export default FluentCss;
