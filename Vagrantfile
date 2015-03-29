# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.hostname = "travis-encrypt"
  config.vm.box = "ubuntu/trusty64"
  config.vm.provision :shell, inline: "apt-get update && apt-get install -y make ruby-full && gem source -q -a http://rubygems.org/ && gem install travis"
  config.vm.network "forwarded_port", guest: 443, host: 443
end
