
public class HinhChuNhat {
	private Diem diemTrenTrai;
	private Diem diemDuoiPhai;

	public HinhChuNhat(Diem x, Diem y) {
		this.diemTrenTrai = setDiemTrenTrai(x);
		this.diemDuoiPhai = setDiemDuoiPhai(y);
	}
	
	public Diem getDiemTrenTrai() {
		return this.diemTrenTrai;
	}
	
	public Diem getDiemDuoiPhai() {
		return this.diemDuoiPhai;
	}
	
	public Diem setDiemTrenTrai(Diem diemx) {
		return diemx;
	}
	
	public Diem setDiemDuoiPhai(Diem diemy) {
		return diemy;
	}
	
	public Diem calculatePoint() {
		double x, y, motnuadc;
		motnuadc = this.diemTrenTrai.calculateDistance(diemDuoiPhai)/2;
		Diem TrungDiem;
		DoanThang DuongCheo = new DoanThang(this.diemTrenTrai, this.diemDuoiPhai);
		x = 0+this.diemTrenTrai.getX();
		TrungDiem = DuongCheo.calculateAverage();
		y =TrungDiem.getY() - Math.sqrt(Math.pow(motnuadc, 2)-(Math.pow((TrungDiem.getX()-x), 2)));
		Diem DiemCanTim = new Diem(x, y);
		return DiemCanTim;
	}
	
	public double calculatePerimeter() {
		double temp1, temp2;
		temp1 = this.calculatePoint().calculateDistance(diemTrenTrai);
		temp2 = this.calculatePoint().calculateDistance(diemDuoiPhai);
		return (temp1 + temp2)*2;
	}
	
	public double calculateArea() {
		double temp1, temp2;
		temp1 = this.calculatePoint().calculateDistance(diemTrenTrai);
		temp2 = this.calculatePoint().calculateDistance(diemDuoiPhai);
		return temp1*temp2;
	}
}
