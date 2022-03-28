n = int(input())
for _ in range(n):
    data=input()
    left_stack=[]
    right_stack=[]
    for i in data:
        if left_stack:
           if i=="<" :
               right_stack.append(left_stack.pop())
           elif i == "-":
               left_stack.pop()
        if right_stack:
            if i==">":
                left_stack.append(right_stack.pop())
        if i != "<" and i != ">" and i != "-":
            left_stack.append(i)
    left_stack.extend(reversed(right_stack))
    print(''.join(left_stack))
               

               


              
            
                

