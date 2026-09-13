def quick_sort(nums):
    def Swap(left, right):
        temp = nums[right]
        nums[right] = nums[left]
        nums[left] = temp
    def getPartition(left, right, pivot):
        print(left, right)
        leftPtr = left
        rightPtr = right-1
        while True:
            while nums[leftPtr]<pivot:
                leftPtr += 1
            while rightPtr>0 and nums[rightPtr]>pivot:
                rightPtr -= 1

            if leftPtr >= rightPtr:
                break
            else:
                Swap(leftPtr, rightPtr)
        Swap(leftPtr,right)
        return leftPtr
        
    def QuickSort(left, right):
        if right-left<=0:
            return
        else:
            pivot = nums[right]
            partition = getPartition(left,right,pivot)
            QuickSort(left,partition-1)
            QuickSort(partition+1, right)
        
    QuickSort(0,len(nums)-1)
    return nums


nums = []
ouput = quick_sort(nums)
print(ouput)