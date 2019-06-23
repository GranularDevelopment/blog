webpackJsonp([52114733479180],{518:function(n,t){n.exports={data:{site:{siteMetadata:{title:"Granular Development Blog",author:"Brian Smith"}},markdownRemark:{id:"/Users/briansmith/Documents/Dev/granular-blog/src/pages/post-4-24-2019/index.md absPath of file >>> MarkdownRemark",html:'<h3>Configuring Spring Boot Application Properties.</h3>\n<p>Application properties can be found in resources folder under the main folder.</p>\n<p>Spring Boot allows for 3 different application properties:</p>\n<ul>\n<li>default: application.properties</li>\n<li>development: application-test.properties</li>\n<li>production: application-prod.properties</li>\n</ul>\n<p>In order to switch the profiles, you have to change the Run Configurations.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/runconfig-779000e89c3300563c511f7d0f46785c-ef9ea.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABtUlEQVQoz51TZ3OjUAzk//+3y9nBxDRjejHVFNPZSC8mk3KfTjM7Qo9h9XYlJFmRoagmjIsNzbhAPp+hvL1B002omgHbDT7hMLwAQRDC87j24Xo+HMfDhb43TAtSEoco8gxd12LoH8jzHLIs4+VwxOH1FUeCYRhwXRdJcsM0zdi27ReWZUFd3yE11QfZHn3fQ1XPOJ1O0HUdlmUhiRMiS0SzkQiXdfsNIpznGZIRDiTzCs6MqhnxR0twtCocrvU3/LVqIlzwr2DCaZogzWOPNIkwDIN4sa4r/ieYkDmkR1uhLAuMwyhelFmO8nZDlWa4Zyn5UqNpGjR7Jgz9gHEciaDHo+tQ3e9oKZcFeVhmEeIoEvo5JvJq8X0sYYSFBrEGAVaq1zjGRqQCTUtosBGRqJ/quIkUEpnoSoc8Lb5tmt6Q3lK0bftpNucdbAvjo6bn5zkPVPrpmUkropwUmrSKM+2jaZhCQVkU1KxEQZkl8wB+oiPZEt/qG6FpipVRFCKlJdc1HbZt067mws8drKp9elqTdD7jppKQ8AW+54ndcx0H9vVKf4GDLMvE7dgClsX4asEOHtA7aJhGn2y45xYAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Alternate screenshot"\n        title=""\n        src="/static/runconfig-779000e89c3300563c511f7d0f46785c-fb8a0.png"\n        srcset="/static/runconfig-779000e89c3300563c511f7d0f46785c-1a291.png 148w,\n/static/runconfig-779000e89c3300563c511f7d0f46785c-2bc4a.png 295w,\n/static/runconfig-779000e89c3300563c511f7d0f46785c-fb8a0.png 590w,\n/static/runconfig-779000e89c3300563c511f7d0f46785c-526de.png 885w,\n/static/runconfig-779000e89c3300563c511f7d0f46785c-fa2eb.png 1180w,\n/static/runconfig-779000e89c3300563c511f7d0f46785c-08f6a.png 1770w,\n/static/runconfig-779000e89c3300563c511f7d0f46785c-ef9ea.png 1920w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>In Run Configurations select the Arguments tab and add <strong>-Dspring.profiles.active=test</strong> to access the application-test.properties.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/arugments-cca76872780780c37c56f9a8d0c9e8bf-ef9ea.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAB20lEQVQoz2WSW2+jMBCF+f//qa3UVfchT0mlKA1XQ8A2d0gIIRA4O+Ntoqgd6ZMRto9nzozl+AI7J4DOS6isgBcJiDBEnEgc4gSxTBHF0pCo1KCUon1CKiRSmbNhFBMHWHmmURYFhkuPcRyQZxkc20amNbI0Rdd16E4dzucz+r43NMcaIjlgmm6Ybv8ZxxHH4xHWqS3ocId7XK8j7CCGE2okOoPtRXCFQkpZKaWR6hR5niOhrKZ5eXAjUcZalgVpEoBXZp5nJGFAWZdo6gZFXpjvn0gpzfl7PAQ7Sj9LlSnter2an1LGUOQNl8B+lWWJ/tw/SmZ4/1lwmiZz32pKjaqqHps1ve4FNuLDAZJK3H/t4bmewfd8hCI0RGGEYbjgdDqhaRp05HFTt7DKIjdNYdNZdKKmtNQQjooOuI5rstSKm5Q9SEh0aVssVMUyDOY8a1hcKvt2j7qp4PmeMb+gh1joJ05IkyD0t28z5m//WMt69oHDdV18fPzF2+sbXl9e8Of9HavVCuv1Gp+bT2w2G3ztvkzWPCrPtJTxL0GPBPnCdruldQd7b0MIgYoaw026w951BK9HEuJ/PE4Wl/uMCALYNNiu48CmhgS+b0qv69qUdLlcDPcxeYYf+AcS7D++hs2KvwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Alternate screenshot"\n        title=""\n        src="/static/arugments-cca76872780780c37c56f9a8d0c9e8bf-fb8a0.png"\n        srcset="/static/arugments-cca76872780780c37c56f9a8d0c9e8bf-1a291.png 148w,\n/static/arugments-cca76872780780c37c56f9a8d0c9e8bf-2bc4a.png 295w,\n/static/arugments-cca76872780780c37c56f9a8d0c9e8bf-fb8a0.png 590w,\n/static/arugments-cca76872780780c37c56f9a8d0c9e8bf-526de.png 885w,\n/static/arugments-cca76872780780c37c56f9a8d0c9e8bf-fa2eb.png 1180w,\n/static/arugments-cca76872780780c37c56f9a8d0c9e8bf-08f6a.png 1770w,\n/static/arugments-cca76872780780c37c56f9a8d0c9e8bf-ef9ea.png 1920w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>',frontmatter:{title:"Configuring Spring Boot Application Properties",date:"April 24, 2019"}}},pathContext:{slug:"/post-4-24-2019/",previous:{fields:{slug:"/post-4-7-2019/"},frontmatter:{title:"Deeplinking iOS and Android, Nginx and .Well-Known"}},next:{fields:{slug:"/post-6-23-2019/"},frontmatter:{title:"Jenkins Build Pull Request"}}}}}});
//# sourceMappingURL=path---post-4-24-2019-e23c8e98201393c7b404.js.map