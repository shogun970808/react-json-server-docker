# react-json-server-docker

reactとjsonサーバーの環境構築をdockerで行った。

・node_modulesは匿名ボリュームとし、コンテナ側に値を持たせたのでホスト側ではコードにエラーが表示される。
　のでdevcontainerを使用して開発を進める。
