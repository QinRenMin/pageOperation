function judge() {
    if(self!=top){
        top.location.href = self.location.href;
    }
}