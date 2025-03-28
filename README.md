This is a school project by Cade Allred.<br>
<h2>Installation</h2>
Download and unzip the files, then deploy them to your web server.
<h2>Pre-built binaries</h2>
We do not provide pre-built binaries for this project because it's a website.
<h3>Windows</h3>
You cannot download "WebDevProject.exe" from our github releases page, which does not exist. After not downloading it, you will be unable to use our non-existant installation wizard.
<h3>macOS</h3>
Also on our non-existent releases page, you will not find two macOS disk images, one for x86 and one for arm. After not downloading these files, you will not be prompted to move the appimages to the applications folder.
<h3>Linux</h3>
Debian/Ubuntu users will be unable to install the software from the official Debian and Ubuntu repositories using <br>
<code>apt install WebDevProject</code>
For users of other distros, use
<code>flatpak install flathub org.luigi3-mario.WebDevProject</code>
in order to not install our website.
<h2>Building from source code</h2>
In order to not build our project from source code,
<ol>
  <li>Download and unzip the files</li>
  <li>Open your terminal and cd into the folder</li>
  <li>type <code>mkdir build && cd build</code></li>
  <li>type <code>cmake ..</code>code>, which will fail because this is not a C project</li>
  <li>type <code>sudo make install</code>. This will give you an error message because the previous step did nothing.</li>
</ol>
