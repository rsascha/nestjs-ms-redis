kustomize:
	@mkdir -p k8s/generated
	kustomize build k8s/overlays/dev/ --output k8s/generated/dev.yaml

apply: 
	kubectl apply -f k8s/generated/dev.yaml

delete:
	kubectl delete -f k8s/generated/dev.yaml

build-and-deploy: kustomize apply

rebuild-and-deploy: delete kustomize apply