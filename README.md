# Ecommerce
A deceentralized Ecommerce website to buy paintings as NFTs. The user buys the painting by paying in DAI (a token on ethereum blockchain) and gets a link to access the painting.

<h2>Tech Stack</h2>
<ul>
<li><b>Express.js</b>: For creating local server</li>
<li><b>Node.js</b>: For backend</li>
<li><b>React: </b>For frontend</li>
<li><b>Redux: </b>For interaction of frontend with database</li>
<li><b>Mongo DB: </b>Database</li>
<li><b>JWT Authentication: </b>For user authentication</li>
<li><b>Ether.js: </b>For interaction with smart contract</li>
<li><b>Truffle: </b>To connect the application with locall blockchain network</li>
<li><b>Ganache: </b>To create local development blockchain network</li>
</ul>

<h2>Prerequisites</h2>
<ul>
<li>Latest version of Node.js installed on the machine</li>
<li>A database on the Mongo Database</li>
<li>Latest version of Truffle installed on machine</li>
<li>An account on MetaMask</li>
</ul>

<h2>Installation</h2>
<ul>
<li><code>git clone https://github.com/ar-ag/Ecommerce</code></li>
<li><code>cd ecommerce</code></li>
<li><code>npm install</code></li>
</ul>

<h2>Using the app on local device</h2>
<ul>
<li>Create <code>.env</code> file in the root of the project</li>
<li>
Copy paste the following code in the .env file<br>
<code>
MONGO_URI = [Connection string for the database]
JWT_SECRET = [A password]
</code>
</li>
<li>Run <code>node backendExpress/server.js</code> in the root</li>

<li>Run <code>truffle develop</code> in the root of the project, inside the truffle console run:
<ul>
<li><code>migrate --reset</code></li>
</ul>
</li>
<li>Go to frontend-redux folder and run <code>npm run start</code></li>
</ul>

<h2>Linking Local Development Blockchain network with Metamask</h2>
<ul>
<li>Open Metamask Extension</li>
<li>Click on the profile image and select 'Import Account'
<ul>
<li>Copy the Private key of 2nd account(index no. 1) from truffle ganache console and paste in the required private key in the 'import account' dialogue box</li>
<li>Click Import to import the account to Metamask</li>
</ul>
</li>
<li>Click on the profile image and select 'Settings'
<ul>
<li>Click on 'Advanced'</li>
<li>Click 'Reset Account'</li>
</ul>
</li>

</ul>

<h2>Screenshots</h2>

<h3>Register Page</h3>

![Screenshot (7)](https://user-images.githubusercontent.com/96348217/208464287-9c8fa061-d500-46fe-9231-f457f381fbdc.png)

<h3>Login Page</h3>

![Screenshot (8)](https://user-images.githubusercontent.com/96348217/208464394-f8eaa1cb-350e-44c4-aafd-8fdb6bf17dd7.png)

<h3>Homa Page - 1</h3>

![Screenshot (9)](https://user-images.githubusercontent.com/96348217/208464700-8eacd729-932a-4cf2-8862-467e67792a17.png)

<h3>Home Page - 2</h3>

![Screenshot (10)](https://user-images.githubusercontent.com/96348217/208464950-cd9c8766-d895-4103-bfa5-1f643f53daa0.png)

<h3>Cart Page </h3>

![Screenshot (11)](https://user-images.githubusercontent.com/96348217/208465160-371adf03-59b4-4a41-ae45-55429399c3f7.png)


