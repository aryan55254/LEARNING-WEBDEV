//NETWORKING BASICS 
//LAN = LOCAL AREA NETWORK => NEWTWORK / SET OF DEVICES INTERACTING WITH EACH OTHER WITHIN A LIMITED RANGE 
//IP IS A LOGICAL ADDRESS TO IDENTIFY YOUR MACHINE ON YOUR LAN 
//SWITCH IS DEVICE THAT HELPS CONNECTS DEVICES IN YOUR LAN
//ROUTER IS DEVICE THAT FORWARDS DATA BETWEEN DIFFERENT IP NETWORKS 
//SUBNET IS SMALLER NETWORK INSIDE A LARGER NETWORK IT IS DEFINED BY IP ADRESS AND SUBNET MASK , SUBNET MAST DEFINES THE PORTION OF IP ADRESS WHICH BELONGS TO THE NETWORK AND WHICH PART IDENTIFIES THE HOST/DEVICES 
//TWO IP = 192.68.3.2 AND 192.68.7.5
//to determine if they belong to the same subnet, we need to check their subnet mask
//subnet marks help diff between network portion and host portion of ip address
//255.255.255.0 (Class C) → This means the first three octets define the network, and the last octet is for hosts.
//In this case, 192.68.3.X and 192.68.7.X are in different networks.
//255.255.0.0 (Class B) → This means the first two octets define the network, and the last two are for hosts.
//IN THIS CASE BOTH OF THEM ARE IN SAME SUBNET
//NETWORK GATEWAY IS JUST THE IP ADRESS OF THE ROUTER
//WAN
//WIDER AREA NETWORK 
//ROUTER HAS 4 CORE FUNCTIONALITITES 
//NAT = NETWORK ADRESS TRANSLATION 
//DMZ = DEMILITRALIZED ZONE 
//FIREWALL 
//PORT FORWARDING 
//NAT , METHOD OF ROUTER THAT REMAPS THE IP ADRESS WHILE INTERACTION BETWEEN TWO NETWORKS OUTSIDE THIER LANS
//DEVICE WANT INFO => ROUTER => REQUESTS TO OTHER DEVICE => ROUTER RECIEVES ANSWER => GIVES ANSWER TO DEVICE
//if a device is completely isolated in the network and not connected to router want to talk to a device directly inside your network then firewall comes into play , coz of security risk , firewall is passive rules to protect network from unauthorized access
//if u want to allow then u can configure a dmz or port forwarding 
//dmz is a zone where it is specififed to the router that if there is a ad-hoc requests then u pass that to a dmz 
//ad hoc req => router => dmz => interact directly 
//port = any machine in network talks to diff machines in diff networks using ports
//in port forwarding u specify a port and send a port to interact 
