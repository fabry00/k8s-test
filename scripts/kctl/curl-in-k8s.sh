kubectl run curl --image=radial/busyboxplus:curl -i --tty -n=k8s-test-${1}