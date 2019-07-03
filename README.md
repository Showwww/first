# Pre-Configure

- Github permissions

https://github.com/Showwww/first

Settings - > Collabotors -> vladyslavvolkov


# Install

## NVM Repository
https://github.com/nvm-sh/nvm#install--update-script 


In terminal:

    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
    
Insert into file: ~/.bash_profile

    open ~/.bash_profile
    
Install packages

    npm install
    
```bash
export NVM_DIR="${XDG_CONFIG_HOME/:-$HOME/.}nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Reboot

in project root:

    nvm use 


