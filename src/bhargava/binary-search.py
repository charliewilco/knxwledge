def binarySearch(list, item):
    """
    simple binary search
    """
    low = 0
    high = len(list)-1
    while low <= high:
        mid = (low + high)
        guess = list[mid]
        if guess == item:
            return mid
        if guess > item:
            high = mid - 1
        else:
            low = mid + 1
    return None


MY_LIST = [1, 3, 5, 7, 9]

print(binarySearch(MY_LIST, 3))
