const hre = require("hardhat");


async function main() {
    const [admin, payer,  payer1] = await ethers.getSigners();
    // const admin = {
    //     address : '0x60962919051bb2d5be7A8eaee7B02dA0Dd41bF67'
    // }
  
    // console.log("Deploying contracts with the account:", deployer.address);
  
    const Dai = await hre.ethers.getContractFactory("Dai");
    const dai = await Dai.deploy();
    // const amt = ethers.utils.BigNumber.from("100000");
    await dai.faucet(payer.address, hre.ethers.parseEther('10000'));
  
    console.log("Dai address:", await dai.getAddress());

    const PaymentProcessor = await hre.ethers.getContractFactory("PaymentProcessor");
    const paymentProcessor = await PaymentProcessor.deploy(admin.address, dai.getAddress());
    console.log("Payment Processor: ",await paymentProcessor.getAddress());

    const tx1 = await dai.connect(payer).approve(paymentProcessor.getAddress(), 1000000);
      
      await tx1.wait();
      console.log(tx1);
    let exp = await paymentProcessor.connect(payer).pay(10000, 1);
    await exp.wait();
    let bal = await hre.ethers.provider.getBalance(payer.address);
    let balContract = await hre.ethers.provider.getBalance(admin.address);
    let balPayer1 = await hre.ethers.provider.getBalance(payer1.address);
    // console.log(exp);
    console.log(bal);
    console.log(balContract);
    console.log(balPayer1);
    
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });