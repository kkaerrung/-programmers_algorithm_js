function solution(babbling) {
    babbling = babbling.map((a) => a.replace(/aya|ye|woo|ma/g, ''))
    return babbling.filter((b) => b == "").length;
  }