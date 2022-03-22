
import sys
sys.setrecursionlimit(20000)
input = sys.stdin.readline

class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
# __init__안에 파라미터 self를 공유 객체로 사용할 수 있다
class Tree:
    def __init__(self):
        self.root = None
    
    #처음에 self.root None으로 잡고 처음 시작할 떄 부모 노드를 넣는 조건문을 만듦
    #그 다음 부모노드와 값을 비교하면서 왼쪽 오른쪽 값을 나눔
    def add(self,data):
        if(self.root == None):
            self.root = Node(data)
        
        else:
            current = self.root
            while(True):
                if(current.data> data):
                    if(current.left == None):
                        current.left =Node(data)
                    break
                if(current.data < data):
                    if(current.right == None):
                        current.right = Node(data)
                        break
                    current = current.right
    def postOrder(self, node=None):
        global answer
        #전위 순회이므로 부모 왼쪽 오른쪽 순으로 움직임
        if node == None:
            node = self.root
        
        if node.left != None:
            self.postOrder(node.left)
        if node.right != None:
            self.postOrder(node.right)
        answer.append(node.data)
tree = Tree()
while True:
    try:
        tree.add(int(input()))
    except:
        break

answer = []
tree.postOrder()
print('\n'.join(map(str, answer)))