const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
  user: "lame1797",
  password: "5T5n-z38t-x8Y!",
  host: "mesure.o2switch.net",
  port: 21,
  localRoot: __dirname + "/build",
  remoteRoot: "/webkoda.com/", 
  include: ["*", "**/*"],
  deleteRemote: true, 
  forcePasv: true,
  
};

ftpDeploy
  .deploy(config)
  .then(res => console.log("Finished:", res))
  .catch(err => console.log(err));


  