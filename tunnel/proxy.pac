function FindProxyForURL(url, host) {

	if (shExpMatch(host, "devproxy.prod.apps.bdl") || shExpMatch(host, "authservicesext.dev.apps.bdl")  || shExpMatch(host, "devzone.sebp"))
		return "DIRECT";

	if (shExpMatch(host, "*.apps.sebp") || shExpMatch(host, "*.apps.bdl"))
		return "SOCKS localhost:8585";
	else
		return "DIRECT";
} 
