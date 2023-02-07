"use strict";(self.webpackChunkpetly_react_node_teamproject=self.webpackChunkpetly_react_node_teamproject||[]).push([[302],{2642:function(n,e,i){i.d(e,{Y:function(){return r},g:function(){return a}});var t=i(2797),r=t.Ry().shape({userName:t.Z_().min(2,"Too Short! Minimum 2 letters").max(32,"Too Long! Maximum 32 letters").matches(/^.*[a-zA-Z]+.*$/,"only letters please").required("Required"),email:t.Z_().email("Invalid email").matches(/^([a-zA-Z0-9]{1}[\w\-.]{0,}[a-zA-Z0-9]{1})+@([\w-]+.)+[\w]{2,4}$/,"Invalid email").min(10,"Email is too short, must be 10 chars min!").max(63,"Email is too long, must be 63 chars max!").required("Required"),password:t.Z_().required("No password provided.").min(7,"Password is too short - should be 7 chars minimum.").max(32,"Too Long!"),city:t.Z_().min(2,"Too Short!").max(14,"Too Long!").matches(/^(?:[A-Za-z]{2,}(?:(\.\s|'s\s|\s?-\s?|\s)?(?=[A-Za-z]+))){1,2}(?:[A-Za-z]+)?$/,"only letters").required("Required"),phone:t.Z_().max(15,"Too Long!").matches(/^\+380[0-9]{9}$/,'The phone contains only numbers and starts with "+380"').required("Required")}),a=t.Ry().shape({email:t.Z_().email("Invalid email").required("Required"),password:t.Z_().required("No password provided.").min(7,"Password is too short - should be 7 chars minimum.").max(32,"Too Long! 32 chars max")})},3302:function(n,e,i){i.r(e),i.d(e,{default:function(){return u}});var t=i(9439),r=i(2691),a=i(9434),o=i(9273),d=i(1087),s=i(5705),h=i(2642),p=i(3329),l=function(n){var e=n.hendeLSumdit,i=n.hendelPassword,t=n.hendeLNext,a=n.next,o=n.chek,l=n.nextStyle;return(0,p.jsxs)(r.IE,{children:[(0,p.jsx)(r.x2,{children:"Register"}),(0,p.jsx)("div",{children:(0,p.jsx)(s.J9,{initialValues:{userName:"",phone:"",city:"",email:"",password:"",cPassword:""},validate:function(n){n.password&&i(n.password,n.cPassword,n.email)},validationSchema:h.Y,onSubmit:function(n){e(n)},children:function(n){var e=n.touched,i=n.errors,t=n.values,d=n.handleChange,s=n.handleBlur,h=n.handleSubmit;return(0,p.jsx)(r.Bt,{onSubmit:h,children:a?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(r.xu,{children:[(0,p.jsxs)(r.__,{children:[(0,p.jsx)(r.II,{name:"userName",onChange:d,onBlur:s,value:t.userName,placeholder:"Name"}),e.userName&&i.userName&&(0,p.jsx)(r.jj,{children:i.userName})]}),(0,p.jsxs)(r.__,{children:[(0,p.jsx)(r.II,{name:"city",type:"text",onChange:d,onBlur:s,placeholder:"City, region",value:t.city})," ",e.city&&i.city&&(0,p.jsx)(r.jj,{children:i.city})]}),(0,p.jsxs)(r.__,{children:[(0,p.jsx)(r.II,{style:{marginBottom:"0px"},name:"phone",onChange:d,onBlur:s,type:"phone",value:t.phone,placeholder:"Mobile phone"}),e.phone&&i.phone&&(0,p.jsx)(r.jj,{children:i.phone})]})]}),(0,p.jsx)(r.$m,{type:"submit",style:{marginBottom:"16px"},children:"Register"})]}):(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(r.xu,{children:[(0,p.jsxs)(r.__,{children:[(0,p.jsx)(r.II,{name:"email",type:"email",onChange:d,onBlur:s,placeholder:"Email",value:t.email}),e.email&&i.email&&(0,p.jsx)(r.jj,{children:i.email})]}),(0,p.jsxs)(r.__,{children:[(0,p.jsx)(r.II,{name:"password",type:"password",onChange:d,onBlur:s,placeholder:"Password",value:t.password}),e.password&&i.password&&(0,p.jsx)(r.jj,{children:i.password})]}),(0,p.jsx)(r.__,{children:(0,p.jsx)(r.II,{style:{marginBottom:"0px"},name:"cPassword",type:"password",onChange:d,onBlur:s,placeholder:"Confirm Password",value:t.cPassword})}),(0,p.jsx)(r.Z9,{children:(0,p.jsx)(r.qH,{style:o})})]})})})}})}),(0,p.jsx)(r.$m,{name:"button",style:l,value:a,onClick:t,children:a?"Back":"Next"}),(0,p.jsxs)(r.oJ,{children:["Already have an account?",(0,p.jsx)(d.OL,{style:r.p4,to:"/login",children:"Login"})]})]})},m=i(643),c=i(2791),x=i(7689),u=function(){var n=(0,a.I0)(),e=(0,c.useState)(!1),i=(0,t.Z)(e,2),d=i[0],s=i[1],h=(0,c.useState)({}),u=(0,t.Z)(h,2),g=u[0],f=u[1],w=(0,c.useState)({}),b=(0,t.Z)(w,2),j=b[0],Z=b[1],y=(0,c.useState)({backgroundColor:"red"}),v=(0,t.Z)(y,2),k=v[0],P=v[1],_=(0,x.s0)(),I=function(n,e,i){if(/^([a-zA-Z0-9]{1}[\w\-.]{0,}[a-zA-Z0-9]{1})+@([\w-]+.)+[\w]{2,4}$/.test(i)&&void 0!==n)return n===e&&n.length>=7||void 0};return(0,p.jsxs)(m.W,{children:[(0,p.jsx)(r.bh,{children:(0,p.jsx)(l,{nextStyle:k,userPassword:j,chek:g,hendeLSumdit:function(e){var i=e.password,t=e.email,r=e.userName,a=e.city,d=e.phone;n((0,o.aX)({password:i,email:t,userName:r,city:a,phone:d})).then((function(n){return!n.error&&_("/user")}))},hendelPassword:function(n,e,i){n.length>0&&n.length<3&&f({width:"0%",backgroundColor:"#E5F1EF"}),n.length>3&&n.length<7&&f({width:"25%",backgroundColor:"red"}),n.length>=7&&n.length<=12&&f({width:"45%",backgroundColor:"orange"}),n.length>=12&&n.length<=32&&f({width:"100%",backgroundColor:"#24cca7"}),Z({password:n,cPassword:e,email:i}),I(n,e,i)?P({backgroundColor:"#f59256"}):P({backgroundColor:"red"})},hendeLNext:function(n){var e=n.target.value,i=j.password,t=j.cPassword,r=j.email;I(i,t,r)&&s("true"!==e)},next:d})}),(0,p.jsx)(r.UI,{})]})}},2691:function(n,e,i){i.d(e,{$m:function(){return z},Bt:function(){return C},IE:function(){return _},II:function(){return q},UI:function(){return B},Z9:function(){return S},__:function(){return N},bh:function(){return I},jj:function(){return k},oJ:function(){return v},p4:function(){return Z},qH:function(){return L},x2:function(){return y},xu:function(){return P}});var t,r,a,o,d,s,h,p,l,m,c,x,u,g=i(168),f=i(6444),w=i(8186),b=i(9669),j=i(799),Z={textDecoration:"underline",color:"#3091EB",marginLeft:"3px"},y=f.ZP.h2(t||(t=(0,g.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  margin-bottom: 40px;\n  @media screen and (min-width: 320px) {\n    font-weight: 700;\n    font-size: 24px;\n    line-height: 33px;\n  }\n\n  @media screen and (min-width: 767px) {\n    padding-top: 60px;\n    font-weight: 500;\n    font-size: 36px;\n    line-height: 49px;\n  }\n"]))),v=f.ZP.h3(r||(r=(0,g.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  color: rgba(17, 17, 17, 0.6);\n  @media screen and (min-width: 320px) {\n    margin-top: 40px;\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 16px;\n  }\n  @media screen and (min-width: 767px) {\n    margin-top: 40px;\n    padding-bottom: 60px;\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 16px;\n  }\n"]))),k=f.ZP.h3(a||(a=(0,g.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  color: red;\n  @media screen and (min-width: 320px) {\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 16px;\n  }\n  @media screen and (min-width: 767px) {\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 16px;\n  }\n"]))),P=f.ZP.div(o||(o=(0,g.Z)(["\n  margin-bottom: 40px;\n  display: flex;\n  flex-direction: column;\n"]))),_=f.ZP.div(d||(d=(0,g.Z)(["\n  position: relative;\n  z-index: 1;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n\n  display: flex;\n  flex-direction: column;\n  @media screen and (min-width: 320px) {\n  }\n  @media screen and (min-width: 767px) {\n    background: #ffffff;\n    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);\n    border-radius: 40px;\n    width: 608px;\n  }\n  @media screen and (min-width: 1279px) {\n    width: 618px;\n  }\n"]))),I=f.ZP.div(s||(s=(0,g.Z)(["\n  z-index: 5;\n  @media screen and (min-width: 320px) {\n    margin-top: 42px;\n  }\n  @media screen and (min-width: 767px) {\n    padding-top: 204px;\n  }\n  @media screen and (min-width: 1279px) {\n    padding-top: 80px;\n  }\n\n  justify-content: center;\n  display: flex;\n"]))),z=f.ZP.button(h||(h=(0,g.Z)(["\n\n  border: none;\n  color: #ffffff;\n  font-family: 'Manrope';\n  font-style: normal;\n  background: #f59256;\n  border-radius: 40px;\n  justify-content: center;\n  align-items: center;\n  @media screen and (min-width: 320px) {\n    width: 280px;\n    height: 44px;\n  }\n  @media screen and (min-width: 767px) {\n    font-weight: 500;\n    font-size: 2;\n    line-height: 27px;\n\n    width: 458px;\n    height: 48px;\n  }\n"]))),C=f.ZP.form(p||(p=(0,g.Z)(["\n  label:nth-last-child(1) {\n    margin-bottom: 0px;\n  }\n  button:nth-last-child(1) {\n    margin-bottom: 16px;\n  }\n"]))),N=f.ZP.label(l||(l=(0,g.Z)(["\n  margin-bottom: 16px;\n"]))),q=f.ZP.input(m||(m=(0,g.Z)(["\n  padding: 10px 30px;\n  background: #fdf7f2;\n  border: 1px solid rgba(245, 146, 86, 0.5);\n  border-radius: 40px;\n  @media screen and (min-width: 320px) {\n    width: 280px;\n    height: 40px;\n  }\n  @media screen and (min-width: 767px) {\n    width: 458px;\n    height: 52px;\n  }\n"]))),B=f.ZP.div(c||(c=(0,g.Z)(["\nwidth: 100%;\nmargin: 0 auto;\nbackground-repeat: no-repeat;\nbackground-position: bottom;\nbackground-size: 620px;\n@media screen and (min-width: 320px) {\n  background-image:  url(",");\n  max-width:  620px;\n  margin-top:-150px;\n  height:470px;\n  position:relative;\n  background-size: 280px;\n}\n\n@media screen and (min-width: 767px) {\n  max-width: 768px;\n  margin-top:-250px;\n  height:538px;\n  background-image:  url(",");\n  background-size: 768px;\n}\n@media screen and (min-width: 1279px) {\n  margin-top:-250px;\n  height:538px;\n  max-width: 1280px;\n  background-image: url(",");\n   background-size:  auto;\n}\n"])),w,b,j),S=f.ZP.div(x||(x=(0,g.Z)(["\nheight: 5px;\nmargin-top: 5px;\nborder-radius: 40px;\n"]))),L=f.ZP.div(u||(u=(0,g.Z)(["\n\nwidth: 0px;\ntransform: 3ms;\nheight: 5px;\ntransform-style: 5ms;\n"])))},643:function(n,e,i){i.d(e,{W:function(){return a}});var t,r=i(168),a=i(6444).ZP.div(t||(t=(0,r.Z)(["\n  max-width: 320px;\n  padding: 0 20px;\n  margin: 0 auto;\n\n  @media screen and (min-width: 767px) {\n    max-width: 768px;\n    padding: 0 32px;\n  }\n  @media screen and (min-width: 1279px) {\n    max-width: 1280px;\n    padding: 0 16px;\n  }\n"])))},799:function(n,e,i){n.exports=i.p+"static/media/auth-desk@1x.bfc51a1654d7f4b258aa.png"},9669:function(n,e,i){n.exports=i.p+"static/media/auth-tablet@2x.54d8df9196a7ff5e3fb0.png"},8186:function(n,e,i){n.exports=i.p+"static/media/hero-waves-mob@2x.d215f04cc3d92b31d12e.png"}}]);
//# sourceMappingURL=302.7534676d.chunk.js.map