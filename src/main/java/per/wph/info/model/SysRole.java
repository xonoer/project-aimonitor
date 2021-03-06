package per.wph.info.model;

public class SysRole {
    public enum SysRoleDefault{
        STRANGER(0L),OWNER(1L);
        private Long id;
        private SysRoleDefault(Long id){
            this.id = id;
        }
        public Long id(){
            return this.id;
        }
    }

    private Long id;

    private Boolean available;

    private String description;

    private String role;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Boolean getAvailable() {
        return available;
    }

    public void setAvailable(Boolean available) {
        this.available = available;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description == null ? null : description.trim();
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role == null ? null : role.trim();
    }
}