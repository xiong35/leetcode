class MyHashSet:
    ThisSet = set()

    def __init__(self):
        self.ThisSet = set()

    def add(self, key: int) -> None:
        self.ThisSet.add(key)

    def remove(self, key: int) -> None:
        self.ThisSet.discard(key)

    def contains(self, key: int) -> bool:
        return (key in self.ThisSet)


# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet()
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)
