
def change(n,nums):
    result=[]
    if n== len(nums) : return result.append(nums)
    temp=nums[0]       
    if nums[0].isalpha():
        if nums[n].isupper():
            nums[n]=nums[n].lower()
        elif nums[n].islower():
            nums[n]=nums[n].upper()
        change(nums,n+1)
    nums[n]=temp
    change(nums,n+1)
    return result
print(change(0,[4,"a","b",7]))