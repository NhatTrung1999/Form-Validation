function Content() {
    return (
        <>
            <div className="content-header">
                <div className="list">Danh sách sản phẩm</div>
                <div className="content-add">
                    <div className="add-user"></div>
                    <span className="add">Thêm sản phẩm</span>
                </div>
            </div>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Đơn vị</th>
                            <th>Giá</th>
                            <th>Trạng thái</th>
                            <th>Ngày tạo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>Iphone 14 ProMax</td>
                        <td>10</td>
                        <td>cái</td>
                        <td>30.000.000VNĐ</td>
                        <td>Còn hàng</td>
                        <td>18/08/2022</td>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Content;
